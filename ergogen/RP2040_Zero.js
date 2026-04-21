module.exports = {
  params: {
    designator: 'U',
    side: 'F',
    // Côté droit (GPIO)
    GP0:  undefined,  // pad 0
    GP1:  undefined,  // pad 1
    GP2:  undefined,  // pad 2
    GP3:  undefined,  // pad 3
    GP4:  undefined,  // pad 4
    GP5:  undefined,  // pad 5
    GP6:  undefined,  // pad 6
    GP7:  undefined,  // pad 7
    GP8:  undefined,  // pad 8
    // Bas
    GP9:  undefined,  // pad 9
    GP10: undefined,  // pad 10
    GP11: undefined,  // pad 11
    GP12: undefined,  // pad 12
    GP13: undefined,  // pad 13
    GP14: undefined,  // pad 14
    // Côté gauche
    GP15: undefined,  // pad 15
    GP26: undefined,  // pad 26
    GP27: undefined,  // pad 27
    GP28: undefined,  // pad 28
    GP29: undefined,  // pad 29
    GP30: undefined,  // pad 30
    GP31: undefined,  // pad 31
    GP32: undefined,  // pad 32
  },
  body: p => `
    (footprint "RP2040_Zero"
      (layer "F.Cu")
      ${p.at}

      (property "Reference" "REF**"
        (at 1.27 0 0)
        (layer "F.SilkS")
        (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (property "Value" "RP2040 Zero"
        (at 2.5654 -2.6924 0)
        (layer "F.Fab")
        (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )

      (attr through_hole)

      (fp_line (start 11.54 -9.21)  (end 11.54 14.29)  (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
      (fp_line (start -6.46 -9.21)  (end 11.54 -9.21)  (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
      (fp_line (start -6.46 14.29)  (end -6.46 -9.21)  (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))
      (fp_line (start 11.54 14.29)  (end -6.46 14.29)  (stroke (width 0.05) (type solid)) (layer "F.CrtYd"))

      (pad "0"  thru_hole circle (at 10.16 -7.62) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP0})
      (pad "1"  thru_hole circle (at 10.16 -5.08) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP1})
      (pad "2"  thru_hole circle (at 10.16 -2.54) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP2})
      (pad "3"  thru_hole circle (at 10.16  0)    (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP3})
      (pad "4"  thru_hole circle (at 10.16  2.54) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP4})
      (pad "5"  thru_hole circle (at 10.16  5.08) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP5})
      (pad "6"  thru_hole circle (at 10.16  7.62) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP6})
      (pad "7"  thru_hole circle (at 10.16 10.16) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP7})
      (pad "8"  thru_hole circle (at 10.16 12.7)  (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP8})

      (pad "9"  thru_hole circle (at  7.62 12.7)  (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP9})
      (pad "10" thru_hole circle (at  5.08 12.7)  (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP10})
      (pad "11" thru_hole circle (at  2.54 12.7)  (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP11})
      (pad "12" thru_hole circle (at  0    12.7)  (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP12})
      (pad "13" thru_hole circle (at -2.54 12.7)  (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP13})
      (pad "14" thru_hole circle (at -5.08 12.7)  (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP14})

      (pad "15" thru_hole circle (at -5.08 10.16) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP15})
      (pad "26" thru_hole circle (at -5.08  7.62) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP26})
      (pad "27" thru_hole circle (at -5.08  5.08) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP27})
      (pad "28" thru_hole circle (at -5.08  2.54) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP28})
      (pad "29" thru_hole circle (at -5.08  0)    (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP29})
      (pad "30" thru_hole circle (at -5.08 -2.54) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP30})
      (pad "31" thru_hole circle (at -5.08 -5.08) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP31})
      (pad "32" thru_hole circle (at -5.08 -7.62) (size 1.524 1.524) (drill 0.762) (layers "*.Cu" "*.Mask") ${p.GP32})
    )
  `
}
