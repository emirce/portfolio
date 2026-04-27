---
slug: bullstudio
number: "001"
title: bullstudio
role: Designer & engineer
year: 2026
tags:
  - typescript
  - react
  - vite
  - nodejs
summary: Modern open-source dashboard for Bull and BullMQ jobs.
link: https://github.com/emirce/bullstudio
repo: https://github.com/emirce/bullstudio
status: live
order: 1
---

Bullstudio is a lightweight open-source dashboard for Bull and BullMQ jobs. I got the idea for it when I was working with BullMQ for a project and needed some insights how my jobs were performing. Existing solutions required me to couple them into my code via adapters etc. I wondered if it wouldn't be nice if there was a queue dashboard that I could just start from my command line. Something like <a href="https://www.prisma.io/studio" target="_blank">Prisma Studio</a> but for queues. And that's how Bullstudio was born.

You just run it from the command line and it communicates to your Redis instance directly:

```js
npx bullstudio
```

Built with React, Vite, Tanstack Router, TRPC. Served from a lightweight NodeJs server that runs via CLI. Production teams usually run Bullstudio in a Docker container.