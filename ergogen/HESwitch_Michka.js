module.exports = {
  params: {
    designator: 'SW',
    side: 'B',
    from: undefined,  // pad 1 - signal
    to: undefined,    // pad 2 - signal
    gnd: undefined,   // pad 3 - ground
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
      (fp_line (start 2.784993 0.118757) (end 2.785001 0.641251) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
      (fp_line (start 3.734999 -0.22375) (end 3.735007 0.298744) (stroke (width 0.12) (type solid)) (layer "B.SilkS"))
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
      (fp_line (start 2.02 1.917501) (end 3.980005 1.917519) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 2.539995 -1.500018) (end 2.539988 2.259992) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 3.980005 1.917519) (end 3.980012 -1.842491) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))
      (fp_line (start 3.980012 -1.842491) (end 2.020007 -1.842509) (stroke (width 0.05) (type solid)) (layer "B.CrtYd"))

      (fp_line (start -3.749999 1.000002) (end -3.749986 -1.000005) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -3.749986 -1.000005) (end -2.499987 -1.00001) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -3 2.375) (end -1 2.375) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -3 3.625) (end -3 2.375) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -2.5 0.999997) (end -3.749999 1.000002) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -2.499987 -1.00001) (end -2.5 0.999997) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -1 2.375) (end -1 3.625) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start -1 3.625) (end -3 3.625) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 2.894988 -0.62001) (end 2.895001 1.379997) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 2.895001 1.379997) (end 4.145 1.380002) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 3.625012 1.037511) (end 3.624999 -0.962496) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_line (start 4.144987 -0.620005) (end 2.894988 -0.62001) (stroke (width 0.1) (type solid)) (layer "B.Fab"))
      (fp_circle (center -1.46 -1.4) (end -1.46 -1.43) (stroke (width 0.06) (type solid)) (fill no) (layer "B.Fab"))

      (fp_rect (start 2.5 -2.5) (end -2.5 2.5) (stroke (width 0.2) (type default)) (fill no) (layer "User.2"))
      (fp_circle (center -5.08 0) (end -4.28 0) (stroke (width 0.2) (type default)) (fill no) (layer "User.2"))
      (fp_circle (center 5.08 0) (end 5.88 0) (stroke (width 0.2) (type default)) (fill no) (layer "User.2"))
      (fp_rect (start 9.525 -9.525) (end -9.525 9.525) (stroke (width 0.1) (type default)) (fill no) (layer "User.4"))

      (pad "1" smd roundrect (at -3.124999 1.037501 90) (size 1.175 1.45) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.212766) ${p.from})
      (pad "1" smd roundrect (at -1 3 180) (size 1.2 1.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.208333) ${p.from})
      (pad "1" smd rect (at 0.95 1.24 270) (size 1.07 0.6) (layers "B.Cu" "B.Mask" "B.Paste") ${p.from})
      (pad "1" smd roundrect (at 3 -1 270) (size 1.175 1.45) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.212766) ${p.from})

      (pad "2" smd roundrect (at -3.124987 -1.037509 90) (size 1.175 1.45) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.212766) ${p.to})
      (pad "2" smd roundrect (at -3 3 180) (size 1.2 1.4) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.208333) ${p.to})
      (pad "2" smd rect (at -0.95 1.24 90) (size 1.07 0.6) (layers "B.Cu" "B.Mask" "B.Paste") ${p.to})
      (pad "2" smd roundrect (at 3.000012 1.07501 270) (size 1.175 1.45) (layers "B.Cu" "B.Mask" "B.Paste") (roundrect_rratio 0.212766) ${p.to})

      (pad "3" smd rect (at 0 -1.24 270) (size 1.07 0.6) (layers "B.Cu" "B.Mask" "B.Paste") ${p.gnd})
    )
  `
}
