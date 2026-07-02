#!/bin/bash
ergogen layout.yaml
#python3 arangement.py
killall pcbnew
pcbnew output/pcbs/first.kicad_pcb &
