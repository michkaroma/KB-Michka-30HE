import re, math

def old_arc_to_new(m):
    sx, sy = float(m.group(1)), float(m.group(2))
    ex, ey = float(m.group(3)), float(m.group(4))
    angle  = float(m.group(5))
    rest   = m.group(6)

    # Centre de l'arc : Ergogen utilise start comme centre, end comme début de l'arc
    cx, cy = sx, sy
    r = math.hypot(ex - cx, ey - cy)
    start_angle = math.atan2(ey - cy, ex - cx)
    mid_angle   = start_angle + math.radians(angle / 2)
    mx = cx + r * math.cos(mid_angle)
    my = cy + r * math.sin(mid_angle)

    return f'(gr_arc (start {ex} {ey}) (mid {mx:.4f} {my:.4f}) (end {cx} {cy}) {rest})'

content = open('output/pcbs/first.kicad_pcb').read()
content = re.sub(
    r'\(gr_arc \(start ([0-9.-]+) ([0-9.-]+)\) \(end ([0-9.-]+) ([0-9.-]+)\) \(angle ([0-9.-]+)\) (.*?)\)',
    old_arc_to_new,
    content
)
open('output/pcbs/first.kicad_pcb', 'w').write(content)
print("Done")