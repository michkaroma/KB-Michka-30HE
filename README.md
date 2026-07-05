# KB-Michka-30HE

Clavier mécanique custom ultra-compact de 30 touches à effet Hall, filaire, pour la main gauche (demi-clavier gaming). Conçu de zéro, de la génération du PCB avec Ergogen jusqu'au routage dans KiCad.

Projet inspiré et adapté du [Lucca-58HE](https://github.com/Maka8295) de Maka8295, avec des choix de conception différents (MCU, mux, firmware, filtrage par touche). Le schéma d'alimentation s'appuie sur l'étude du projet HE60.

## Caractéristiques

- **30 touches** : matrice 6×4 + 5 touches de pouce + 1 touche isolée
- **Disposition** : AZERTY
- **Switches analogiques** à effet Hall avec capteur intégré
- **Filaire** (USB-C via le MCU)
- **Firmware** : KMK (CircuitPython)

## Composants principaux

| Rôle | Composant | Notes |
|---|---|---|
| Switches | Gateron Magnetic Jade PRO HE | Capteur Hall intégré, pôle N face au PCB, entraxe 10 mm |
| MCU | Waveshare RP2040-Zero | Régulateur 3.3 V embarqué, ADC sur GP27 |
| Multiplexeur | ADG732 (TQFP) | Analogique 32 canaux, adressé sur 5 bits |
| Ferrite | Perle 600 Ω @ 100 MHz, boîtier 0805 | Sépare le rail analogique du rail numérique |

### Affectation des GPIO (RP2040-Zero)

| GPIO | Fonction |
|---|---|
| GP0–GP4 | Lignes d'adresse du mux (MUX_A4 → MUX_A0) |
| GP27 | Entrée ADC (AIN1, sortie commune du mux) |

Les entrées de contrôle CS, WR et EN de l'ADG732 sont câblées à GND (mux toujours actif, sélection purement par adresse).

## Architecture électrique

### Alimentation : rail analogique 3V3A

Le RP2040-Zero ne fournit qu'une seule sortie 3.3 V. Le rail analogique est donc dérivé du rail numérique à travers une ferrite, avec un filtre en pi :

```
RP2040-Zero 3V3 ──┬──── ferrite 600Ω ────┬──── 3V3A ──→ capteurs + ADG732
                  │                      │
             10µF + 100nF           10µF + 100nF
                  │                      │
                 GND                    GND
```

La ferrite laisse passer le courant continu (~0.3 Ω en DC) mais présente 600 Ω à 100 MHz : le bruit de commutation du MCU ne remonte pas dans le rail des capteurs. Les condensateurs sont en dérivation (un pad sur le rail, un pad vers GND) ; seule la ferrite est en série. Le plan de masse reste commun (un seul GND, pas de masse analogique séparée).

À la différence du HE60, qui utilise deux régulateurs LDO distincts (TLV75733 pour le numérique, XC6206 pour l'analogique), l'approche ferrite est adaptée ici au fait que le RP2040-Zero embarque déjà son régulateur.

### Filtrage par touche

Chaque touche embarque ses passifs directement dans le footprint custom `HESwitch_Michka`, ce qui garantit leur proximité avec le capteur :

```
3V3A ──┬──→ VCC capteur
       │
     100nF                     capteur ──→ 1kΩ ──┬──→ vers ADG732
       │                                         │
      GND                                      4.7nF
                                                 │
                                                GND
```

- **100 nF** (X7R) : découplage de l'alimentation du capteur
- **1 kΩ + 4.7 nF** (C0G/NP0 de préférence) : filtre RC passe-bas sur la sortie analogique, fc ≈ 34 kHz — le signal d'appui (quelques centaines de Hz) passe intact, le bruit HF est atténué

Le filtre est placé **par capteur, en amont du mux** : chaque nœud est déjà stabilisé quand le mux le sélectionne, ce qui évite les problèmes de temps d'établissement pendant le scan. La résistance série isole en plus le capteur du transitoire de charge à chaque commutation de canal. (Le HE60 n'a que le condensateur shunt, sans résistance série.)

### Récapitulatif des valeurs

| Emplacement | Composant | Valeur | Quantité |
|---|---|---|---|
| Filtre pi, côté MCU | Condensateur 0805 | 10 µF + 100 nF | 1 + 1 |
| Filtre pi, côté 3V3A | Condensateur 0805 | 10 µF + 100 nF | 1 + 1 |
| Entre les deux | Ferrite 0805 | 600 Ω @ 100 MHz | 1 |
| Par touche, découplage | Condensateur | 100 nF | 30 |
| Par touche, filtre sortie | Résistance | 1 kΩ | 30 |
| Par touche, filtre sortie | Condensateur | 4.7 nF | 30 |

## Toolchain et méthode

1. **Ergogen v4.2.1** (npm) génère le placement des touches et le PCB initial à partir de `ergogen/layout.yaml`, avec des footprints custom en JavaScript :
   - `HESwitch_Michka.js` — switch HE avec passifs intégrés (pads GND, VCC, signal externe vers le mux, signal interne Q du capteur)
   - `ADG732.js` — mux TQFP
   - `RP2040_Zero.js` — MCU
   - `C0805.js` — condensateur 0805 (converti depuis un `.kicad_mod`)
   - `mountinghole.js` — trous de fixation M2
2. **Script Python de post-traitement** : Ergogen 4.2.1 génère les arcs (`gr_arc`) à l'ancien format `(start)(end)(angle)` alors que KiCad 10 exige `(start)(mid)(end)`. Le script calcule mathématiquement le point `mid` de chaque arc.
3. **KiCad 10** : reprise du PCB généré (`kicad/pcb/`), placement final et routage.

### Ordre de routage prévu

1. Pour de masse GND
2. Rails d'alimentation (3V3 puis 3V3A)
3. Pistes de contrôle numériques vers l'ADG732 (adresses)
4. Pistes analogiques en dernier, courtes et éloignées des signaux bruyants

## État d'avancement

- [x] Layout Ergogen (outlines + placement des 30 touches)
- [x] Footprints custom (switch, mux, MCU, condensateur, fixations)
- [x] Pipeline Ergogen → KiCad 10 (conversion des arcs)
- [x] Placement du filtre d'alimentation près du MCU
- [x] Routage de la rangée r1 (signaux, alimentation, capteurs)
- [ ] Création du net 3V3A en aval de la ferrite
- [ ] Routage des rangées r2–r5 et des touches de pouce
- [ ] Pour de masse
- [ ] Annotation des références (C*, R*, FB1, U*)
- [ ] Firmware KMK

## Structure du dépôt

```
ergogen/
  layout.yaml        # Source de vérité du layout
  footprints/        # Footprints custom (JS)
  output/            # Outlines DXF + PCB généré
kicad/
  pcb/               # Projet KiCad 10 (placement + routage)
```
