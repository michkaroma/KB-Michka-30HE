module.exports = {
  params: {
    designator: 'U',
    side: 'B',
    // Sources S1-S16 (pins 1-12, 45-48)
    S1: undefined, S2: undefined, S3: undefined, S4: undefined,
    S5: undefined, S6: undefined, S7: undefined, S8: undefined,
    S9: undefined, S10: undefined, S11: undefined, S12: undefined,
    S13: undefined, S14: undefined, S15: undefined, S16: undefined,
    // Sources S17-S32 (pins 25-40)
    S17: undefined, S18: undefined, S19: undefined, S20: undefined,
    S21: undefined, S22: undefined, S23: undefined, S24: undefined,
    S25: undefined, S26: undefined, S27: undefined, S28: undefined,
    S29: undefined, S30: undefined, S31: undefined, S32: undefined,
    // Alimentation (pins 13, 14)
    VDD: undefined,
    // Adresse (pins 15-19)
    A0: undefined, A1: undefined, A2: undefined, A3: undefined, A4: undefined,
    // Contrôle (pins 20-22)
    CS: undefined,
    WR: undefined,
    EN: undefined,
    // Référence (pin 23)
    GND: undefined,
    // Alimentation négative (pin 24)
    VSS: undefined,
    // Drain commun (pin 43)
    D: undefined,
    // Exposed pad (EPAD) → doit être connecté à GND
    EPAD: undefined,
  },
  body: p => `
    (footprint "ADG732"
      (layer "B.Cu")
      ${p.at}

      (property "Reference" "REF**"
        (at 0 -4.8 0)
        (layer "B.SilkS")
        (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (property "Value" "ADG732"
        (at 0 4.8 0)
        (layer "B.Fab")
        (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )

      (attr smd)

      (fp_line (start 3.135 -3.61) (end 3.61 -3.61) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.61 -3.61) (end 3.61 -3.135) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start -3.135 3.61) (end -3.61 3.61) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start -3.61 3.61) (end -3.61 3.135) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.135 3.61) (end 3.61 3.61) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.61 3.61) (end 3.61 3.135) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start -3.135 -3.61) (end -3.61 -3.61) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))

      (fp_line (start -2.5 -3.5) (end 3.5 -3.5) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 3.5 -3.5) (end 3.5 3.5) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 3.5 3.5) (end -3.5 3.5) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -3.5 3.5) (end -3.5 -2.5) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -3.5 -2.5) (end -2.5 -3.5) (stroke (width 0.1) (type solid)) (layer "B.Fab"))

      (fp_line (start -4.1 -4.1) (end -4.1 4.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -4.1 4.1) (end 4.1 4.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 4.1 4.1) (end 4.1 -4.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 4.1 -4.1) (end -4.1 -4.1) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))

      (pad "1"  smd roundrect (at -3.45 -2.75) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S12})
      (pad "2"  smd roundrect (at -3.45 -2.25) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S11})
      (pad "3"  smd roundrect (at -3.45 -1.75) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S10})
      (pad "4"  smd roundrect (at -3.45 -1.25) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S9})
      (pad "5"  smd roundrect (at -3.45 -0.75) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S8})
      (pad "6"  smd roundrect (at -3.45 -0.25) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S7})
      (pad "7"  smd roundrect (at -3.45 0.25)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S6})
      (pad "8"  smd roundrect (at -3.45 0.75)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S5})
      (pad "9"  smd roundrect (at -3.45 1.25)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S4})
      (pad "10" smd roundrect (at -3.45 1.75)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S3})
      (pad "11" smd roundrect (at -3.45 2.25)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S2})
      (pad "12" smd roundrect (at -3.45 2.75)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S1})

      (pad "13" smd roundrect (at -2.75 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.VDD})
      (pad "14" smd roundrect (at -2.25 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.VDD})
      (pad "15" smd roundrect (at -1.75 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.A0})
      (pad "16" smd roundrect (at -1.25 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.A1})
      (pad "17" smd roundrect (at -0.75 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.A2})
      (pad "18" smd roundrect (at -0.25 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.A3})
      (pad "19" smd roundrect (at  0.25 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.A4})
      (pad "20" smd roundrect (at  0.75 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.CS})
      (pad "21" smd roundrect (at  1.25 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.WR})
      (pad "22" smd roundrect (at  1.75 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.EN})
      (pad "23" smd roundrect (at  2.25 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.GND})
      (pad "24" smd roundrect (at  2.75 3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.VSS})

      (pad "25" smd roundrect (at 3.45 2.75)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S17})
      (pad "26" smd roundrect (at 3.45 2.25)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S18})
      (pad "27" smd roundrect (at 3.45 1.75)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S19})
      (pad "28" smd roundrect (at 3.45 1.25)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S20})
      (pad "29" smd roundrect (at 3.45 0.75)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S21})
      (pad "30" smd roundrect (at 3.45 0.25)  (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S22})
      (pad "31" smd roundrect (at 3.45 -0.25) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S23})
      (pad "32" smd roundrect (at 3.45 -0.75) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S24})
      (pad "33" smd roundrect (at 3.45 -1.25) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S25})
      (pad "34" smd roundrect (at 3.45 -1.75) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S26})
      (pad "35" smd roundrect (at 3.45 -2.25) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S27})
      (pad "36" smd roundrect (at 3.45 -2.75) (size 0.8 0.25) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S28})

      (pad "37" smd roundrect (at  2.75 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S29})
      (pad "38" smd roundrect (at  2.25 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S30})
      (pad "39" smd roundrect (at  1.75 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S31})
      (pad "40" smd roundrect (at  1.25 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S32})
      (pad "41" smd roundrect (at  0.75 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25))
      (pad "42" smd roundrect (at  0.25 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25))
      (pad "43" smd roundrect (at -0.25 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.D})
      (pad "44" smd roundrect (at -0.75 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25))
      (pad "45" smd roundrect (at -1.25 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S16})
      (pad "46" smd roundrect (at -1.75 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S15})
      (pad "47" smd roundrect (at -2.25 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S14})
      (pad "48" smd roundrect (at -2.75 -3.45) (size 0.25 0.8) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.25) ${p.S13})

      (pad "49" smd rect (at 0 0) (size 4.1 4.1) (layers "B.Cu" "B.Mask") ${p.EPAD})

      (pad "" smd roundrect (at -1.37 -1.37) (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
      (pad "" smd roundrect (at -1.37 0)     (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
      (pad "" smd roundrect (at -1.37 1.37)  (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
      (pad "" smd roundrect (at 0 -1.37)     (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
      (pad "" smd roundrect (at 0 0)         (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
      (pad "" smd roundrect (at 0 1.37)      (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
      (pad "" smd roundrect (at 1.37 -1.37)  (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
      (pad "" smd roundrect (at 1.37 0)      (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
      (pad "" smd roundrect (at 1.37 1.37)   (size 1.1 1.1) (layers "B.Paste") (roundrect_rratio 0.227273))
    )
  `
}
