---
slug: colophon
title: Colophon
date: 2026-04-26
summary: Notes on the typography, palette, and engineering choices behind this site.
---

This site is a single, calmly composed document. Its goals are honest performance, considered typography, and a refusal to chase passing trends.

## Type

The display and body face is **Mona Sans**, GitHub's variable grotesk. It is set with optical sizing — heavier display weights at large sizes, a more open cut at body — to give the page a quiet rhythm without resorting to many distinct typefaces.

The supporting face is **Commit Mono** by Eigil Nikolajsen, used for labels, numerals, and section markers. Both fonts are self-hosted, woff2 only, and served as variable files to keep payloads small.

## Palette

A single committed palette: ink (`#111111`) on warm paper (`#F4F1EA`), with one accent — a burnt sienna (`#C24A1F`) reserved for status, the mark, and the underline that draws on hover. Hairline rules use eight percent ink. There is no dark theme by design.

## Engineering

Built with **Astro 6**, vanilla CSS, and design tokens. No framework runtime, no Tailwind, no animation library. The only motion is one staggered entrance animation on first paint, suppressed when `prefers-reduced-motion: reduce` is set.

Content lives in collections; pages are static.

## What's missing

Plenty. This is a quiet first version. Notes will appear here as they arrive.
