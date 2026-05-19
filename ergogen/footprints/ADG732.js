module.exports = {
  params: {
    designator: 'U',
    side: 'B',
    S1: undefined, S2: undefined, S3: undefined, S4: undefined,
    S5: undefined, S6: undefined, S7: undefined, S8: undefined,
    S9: undefined, S10: undefined, S11: undefined, S12: undefined,
    S13: undefined, S14: undefined, S15: undefined, S16: undefined,
    S17: undefined, S18: undefined, S19: undefined, S20: undefined,
    S21: undefined, S22: undefined, S23: undefined, S24: undefined,
    S25: undefined, S26: undefined, S27: undefined, S28: undefined,
    S29: undefined, S30: undefined, S31: undefined, S32: undefined,
    VDD: undefined,
    A0: undefined, A1: undefined, A2: undefined, A3: undefined, A4: undefined,
    CS: undefined,
    WR: undefined,
    EN: undefined,
    GND: undefined,
    VSS: undefined,
    D: undefined,
    NIC: undefined,
  },
  body: p => `
    (footprint "ADG732_TQFP"
      (layer "B.Cu")
      ${p.at}

      (property "Reference" "REF**"
        (at 0 -0.0 0)
        (layer "B.SilkS")
        (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )
      (property "Value" "ADG732BSUZ"
        (at 0 -6.0 0)
        (layer "B.Fab")
        (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )

      (attr smd)

      (fp_line (start -3.6322 -3.6322) (end -3.22244 -3.6322) (stroke (width 0.1524) (type solid)) (layer "B.SilkS"))
      (fp_line (start -3.6322 -3.22244) (end -3.6322 -3.6322) (stroke (width 0.1524) (type solid)) (layer "B.SilkS"))
      (fp_line (start -3.6322 3.6322) (end -3.6322 3.22244) (stroke (width 0.1524) (type solid)) (layer "B.SilkS"))
      (fp_line (start -3.22244 3.6322) (end -3.6322 3.6322) (stroke (width 0.1524) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.22244 -3.6322) (end 3.6322 -3.6322) (stroke (width 0.1524) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.6322 -3.6322) (end 3.6322 -3.22244) (stroke (width 0.1524) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.6322 3.22244) (end 3.6322 3.6322) (stroke (width 0.1524) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.6322 3.6322) (end 3.22244 3.6322) (stroke (width 0.1524) (type solid)) (layer "B.SilkS"))

      (fp_line (start -5.5626 -3.3977) (end -5.5626 3.3977) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -5.5626 3.3977) (end -4.0132 3.3977) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -4.0132 -4.0132) (end -4.0132 -3.3977) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -4.0132 -3.3977) (end -5.5626 -3.3977) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -4.0132 3.3977) (end -4.0132 4.0132) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -3.3977 -5.5626) (end -3.3977 -4.0132) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -3.3977 -4.0132) (end -4.0132 -4.0132) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -3.3977 4.0132) (end -4.0132 4.0132) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -3.3977 5.5626) (end -3.3977 4.0132) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 3.3977 -5.5626) (end -3.3977 -5.5626) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 3.3977 -4.0132) (end 3.3977 -5.5626) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 3.3977 4.0132) (end 3.3977 5.5626) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 3.3977 5.5626) (end -3.3977 5.5626) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 4.0132 -4.0132) (end 3.3977 -4.0132) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 4.0132 -4.0132) (end 4.0132 -3.3977) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 4.0132 -3.3977) (end 5.5626 -3.3977) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 4.0132 3.3977) (end 4.0132 4.0132) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 4.0132 4.0132) (end 3.3977 4.0132) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 5.5626 -3.3977) (end 5.5626 3.3977) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 5.5626 3.3977) (end 4.0132 3.3977) (stroke (width 0.1524) (type solid)) (layer "B.CrtYd"))

      (pad "1"  smd rect (at -4.1656 2.75 270)     (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S12})
      (pad "2"  smd rect (at -4.1656 2.250001 270)  (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S11})
      (pad "3"  smd rect (at -4.1656 1.749999 270)  (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S10})
      (pad "4"  smd rect (at -4.1656 1.249999 270)  (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S9})
      (pad "5"  smd rect (at -4.1656 0.750001 270)  (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S8})
      (pad "6"  smd rect (at -4.1656 0.25 270)      (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S7})
      (pad "7"  smd rect (at -4.1656 -0.25 270)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S6})
      (pad "8"  smd rect (at -4.1656 -0.750001 270)   (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S5})
      (pad "9"  smd rect (at -4.1656 -1.249999 270)   (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S4})
      (pad "10" smd rect (at -4.1656 -1.749999 90)    (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S3})
      (pad "11" smd rect (at -4.1656 -2.250001 270)   (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S2})
      (pad "12" smd rect (at -4.1656 -2.75 270)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S1})

      (pad "13" smd rect (at -2.75 -4.1656)           (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.VDD})
      (pad "14" smd rect (at -2.250001 -4.1656)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.VDD})
      (pad "15" smd rect (at -1.749999 -4.1656)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.A0})
      (pad "16" smd rect (at -1.249999 -4.1656)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.A1})
      (pad "17" smd rect (at -0.750001 -4.1656)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.A2})
      (pad "18" smd rect (at -0.25 -4.1656)           (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.A3})
      (pad "19" smd rect (at 0.25 -4.1656)            (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.A4})
      (pad "20" smd rect (at 0.750001 -4.1656)        (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.CS})
      (pad "21" smd rect (at 1.249999 -4.1656)        (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.WR})
      (pad "22" smd rect (at 1.749999 -4.1656)        (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.EN})
      (pad "23" smd rect (at 2.250001 -4.1656)        (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.GND})
      (pad "24" smd rect (at 2.75 -4.1656)            (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.VSS})

      (pad "25" smd rect (at 4.1656 -2.75 90)         (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S17})
      (pad "26" smd rect (at 4.1656 -2.250001 90)     (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S18})
      (pad "27" smd rect (at 4.1656 -1.749999 90)     (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S19})
      (pad "28" smd rect (at 4.1656 -1.249999 270)    (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S20})
      (pad "29" smd rect (at 4.1656 -0.750001 90)     (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S21})
      (pad "30" smd rect (at 4.1656 -0.25 270)        (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S22})
      (pad "31" smd rect (at 4.1656 0.25 270)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S23})
      (pad "32" smd rect (at 4.1656 0.750001 270)   (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S24})
      (pad "33" smd rect (at 4.1656 1.249999 270)   (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S25})
      (pad "34" smd rect (at 4.1656 1.749999 270)   (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S26})
      (pad "35" smd rect (at 4.1656 2.250001 270)   (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S27})
      (pad "36" smd rect (at 4.1656 2.75 90)        (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S28})

      (pad "37" smd rect (at 2.75 4.1656)           (size 0.2794 1.778) (layers "B.Cu" "B.Paste") ${p.S29})
      (pad "38" smd rect (at 2.250001 4.1656)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S30})
      (pad "39" smd rect (at 1.749999 4.1656)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S31})
      (pad "40" smd rect (at 1.249999 4.1656)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S32})
      (pad "41" smd rect (at 0.750001 4.1656)       (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.NIC})
      (pad "42" smd rect (at 0.25 4.1656)           (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.NIC})
      (pad "43" smd rect (at -0.25 4.1656)          (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.D})
      (pad "44" smd rect (at -0.750001 4.1656)      (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.NIC})
      (pad "45" smd rect (at -1.249999 4.1656)      (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S16})
      (pad "46" smd rect (at -1.749999 4.1656)      (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S15})
      (pad "47" smd rect (at -2.250001 4.1656)      (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S14})
      (pad "48" smd rect (at -2.75 4.1656)          (size 0.2794 1.778) (layers "B.Cu" "B.Mask" "B.Paste") ${p.S13})
    )
  `
}