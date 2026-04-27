---
slug: colophon
lang: de
title: Kolophon
date: 2026-04-26
summary: Notizen zu Typografie, Farben und Technik dieser Seite.
---

Diese Seite ist ein einziges, ruhig gesetztes Dokument. Ihre Ziele: ehrliche Performance, durchdachte Typografie und der Verzicht auf flüchtige Trends.

## Schrift

Display- und Brotschrift ist **Mona Sans**, die variable Grotesk von GitHub. Sie wird mit optischer Größenanpassung gesetzt — kräftigere Schnitte im Großen, offenere im Lesetext — um der Seite einen ruhigen Rhythmus zu geben, ohne mehrere unterschiedliche Schriften einzusetzen.

Begleitend kommt **Commit Mono** von Eigil Nikolajsen zum Einsatz, für Labels, Ziffern und Abschnittsmarker. Beide Schriften sind selbst gehostet, ausschließlich als woff2 und als variable Dateien ausgeliefert, damit die Übertragung klein bleibt.

## Farben

Eine bewusst einzige Palette: Tinte (`#111111`) auf warmem Papier (`#F4F1EA`), dazu ein einzelner Akzent — ein gebranntes Siena (`#C24A1F`), reserviert für Status, Bildmarke und die Unterstreichung, die beim Hover gezeichnet wird. Haarlinien laufen mit acht Prozent Tinte. Es gibt bewusst keine Dunkelvariante.

## Technik

Gebaut mit **Astro 6**, Vanilla-CSS und Design-Tokens. Kein Framework-Runtime, kein Tailwind, keine Animationsbibliothek. Die einzige Bewegung ist eine versetzte Eingangsanimation beim ersten Rendern; sie wird unterdrückt, wenn `prefers-reduced-motion: reduce` gesetzt ist.

Die Seite ist über Astros eingebautes i18n-Routing in Englisch und Deutsch lokalisiert. Inhalte liegen in Collections; alle Seiten sind statisch.

## Was fehlt

Vieles. Das hier ist eine leise erste Version. Notizen erscheinen, sobald sie da sind.
