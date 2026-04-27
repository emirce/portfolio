---
slug: "concept-slr"
number: "002"
title: "Capture-Replay for SFE Concept"
year: 2024
tags: 
  - C
  - C++
  - XLib
summary: Automatic session replay feature for SFE Concept.
repo: https://github.com/emirce/concept-slr
status: live
order: 2
---
For my Master's thesis at TU Berlin, in collaboration with Dassault Systèmes, I designed and built a Capture/Replay system for SFE CONCEPT, a modelling tool used in early-phase automotive chassis design. The goal: automate the long, repetitive modelling sessions that QA had to run by hand for scenario-based testing.
The system hooks directly into SFE CONCEPT's underlying X Window System to record user sessions as human-readable logs (with labels and window titles) and replay them by injecting validated, auto-corrected events into the main event loop.
Written in C, C++, and Fortran.