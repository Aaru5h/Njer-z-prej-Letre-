# Njerëz prej Letre — Marginalia

An Albanian-first literary magazine prototype built with Next.js. See [Design.md](./Design.md) for the visual direction, [WORKFLOW.md](./WORKFLOW.md) for the production path, [HANDOVER.md](./HANDOVER.md) for the editor workflow, and [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) for what is needed before publication.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` for a production compile check.

The prototype currently reads illustrative content from `src/lib/content.ts`. WordPress is the chosen production CMS, but no WordPress account or endpoint has been supplied. Forms explicitly remain in preview mode and do not send data. The manuscript form requires a URL for demonstration; production will also support private file uploads. The prototype is marked `noindex` to avoid indexing sample people and articles.
