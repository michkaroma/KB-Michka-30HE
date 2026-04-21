module.exports = {
  params: {
    designator: 'SW',
    side: 'B',
    GND: undefined,
    VCC: undefined,
    signal: undefined,
    intern: undefined,
  },
  body: p => `
    (footprint "HESwitch_Michka"
      (layer "B.Cu")
      ${p.at}

      (property "Reference" "REF**"
        (at 0 -0.5 0)
        (unlocked yes)
        (layer "B.SilkS")
        (hide yes)
        (effects (font (size 1 1) (thickness 0.1)))
      )
      (property "Value" "HESwitch_Michka"
        (at 0 1 0)
        (unlocked yes)
        (layer "B.Fab")
        (hide yes)
        (effects (font (size 1 1) (thickness 0.15)))
      )

      (attr smd)

      (fp_line (start -3.859994 0.261235) (end -3.859986 -0.261259) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start -2.39 0.261251) (end -2.389992 -0.261243) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start -1.772936 2.265) (end -2.227064 2.265) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start -1.772936 3.735) (end -2.227064 3.735) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start -1.54 0.88) (end -1.54 -0.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -0.49 0.88) (end -1.54 0.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start -0.46 -0.88) (end 0.46 -0.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 0.49 0.88) (end 1.54 0.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 1.54 0.88) (end 1.54 -0.88) (stroke (width 0.15) (type solid)) (layer "B.SilkS"))
      (fp_line (start 2.284993 0.261235) (end 2.285001 -0.261259) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.754987 0.261251) (end 3.754995 -0.261243) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_rect (start 7 -7) (end -7 7) (stroke (width 0.1) (type default)) (fill no) (layer "B.SilkS"))

      (fp_circle (center -5.08 0) (end -4.28 0) (stroke (width 0.1) (type default)) (fill no) (layer "Edge.Cuts"))
      (fp_circle (center 5.08 0) (end 5.88 0) (stroke (width 0.1) (type default)) (fill no) (layer "Edge.Cuts"))

      (fp_line (start -4.104999 -1.88) (end -2.144994 -1.880018) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -4.104992 1.88001) (end -4.104999 -1.88) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -3.85 2.05) (end -0.15 2.05) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -3.85 3.95) (end -3.85 2.05) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -2.144994 -1.880018) (end -2.144987 1.879992) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -2.144987 1.879992) (end -4.104992 1.88001) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -0.15 2.05) (end -0.15 3.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start -0.15 3.95) (end -3.85 3.95) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 2.039988 -1.88) (end 3.999993 -1.880018) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 2.039995 1.88001) (end 2.039988 -1.88) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 2.539995 -1.500018) (end 2.539988 2.259992) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 3.999993 -1.880018) (end 4 1.879992) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 4 1.879992) (end 2.039995 1.88001) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))

      (fp_line (start -3.749999 1.000002) (end -3.749986 -1.000005) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -3.749986 -1.000005) (end -2.499987 -1.00001) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -3 2.375) (end -1 2.375) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -3 3.625) (end -3 2.375) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -2.5 0.999997) (end -3.749999 1.000002) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -2.499987 -1.00001) (end -2.5 0.999997) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -1 2.375) (end -1 3.625) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -1 3.625) (end -3 3.625) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 2.394988 1.000002) (end 2.395001 -1.000005) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 2.395001 -1.000005) (end 3.645 -1.00001) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 3.644987 0.999997) (end 2.394988 1.000002) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 3.645 -1.00001) (end 3.644987 0.999997) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_circle (center -1.46 -1.4) (end -1.46 -1.43) (stroke (width 0.06) (type solid)) (fill no) (layer "B.Fab"))

      (fp_rect (start 2.5 -2.5) (end -2.5 2.5) (stroke (width 0.2) (type default)) (fill no) (layer "User.2"))
      (fp_circle (center -5.08 0) (end -4.28 0) (stroke (width 0.2) (type default)) (fill no) (layer "User.2"))
      (fp_circle (center 5.08 0) (end 5.88 0) (stroke (width 0.2) (type default)) (fill no) (layer "User.2"))
      (fp_rect (start 9.525 -9.525) (end -9.525 9.525) (stroke (width 0.1) (type default)) (fill no) (layer "User.4"))

      (pad "1" smd roundrect (at -3.124999 1.037501 90) (size 1.175 1.45) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.212766) ${p.signal})
      (pad "1" smd roundrect (at -1 3 180) (size 1.2 1.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.208333) ${p.intern})
      (pad "1" smd rect (at 0.95 1.24 270) (size 1.07 0.6) (layers "B.Cu" "B.Mask" "B.Paste") ${p.VCC})
      (pad "1" smd roundrect (at 3 -1 270) (size 1.175 1.45) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.212766) ${p.GND})

      (pad "2" smd roundrect (at -3.124987 -1.037509 90) (size 1.175 1.45) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.212766) ${p.GND})
      (pad "2" smd roundrect (at -3 3 180) (size 1.2 1.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.208333) ${p.signal})
      (pad "2" smd rect (at -0.95 1.24 90) (size 1.07 0.6) (layers "B.Cu" "B.Mask" "B.Paste") ${p.intern})
      (pad "2" smd roundrect (at 3.000012 1.07501 270) (size 1.175 1.45) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.212766) ${p.VCC})

      (pad "3" smd rect (at 0 -1.24 270) (size 1.07 0.6) (layers "B.Cu" "B.Mask" "B.Paste") ${p.GND})
    )
  `
}
