# Njerëz prej Letre — Marginalia

An Albanian-first literary magazine prototype built with Next.js. See [Design.md](./Design.md) for the visual direction, [WORKFLOW.md](./WORKFLOW.md) for the production path, [HANDOVER.md](./HANDOVER.md) for the editor workflow, and [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) for what is needed before publication.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` for a production compile check.

The prototype currently reads content from `src/lib/content.ts`. The introductory post “Lexoj, prandaj kuptoj!” was republished from the client's public Substack link; the other articles and individual author profiles remain illustrative. WordPress is the chosen production CMS, but no WordPress account or endpoint has been supplied. Forms explicitly remain in preview mode and do not send data. The manuscript form requires a URL for demonstration; production will also support private file uploads. The prototype is marked `noindex` to avoid indexing sample people and articles.

## Editorial dashboard entry

`/admin` is the entry point for editors. Set `WORDPRESS_ADMIN_URL` to the client-owned WordPress dashboard's full HTTPS URL (for example, `https://cms.njerezprejletre.com/wp-admin/`). The route then redirects to WordPress, where login, roles, editing, drafts and publishing are managed. It returns HTTP 503 until that URL is configured, and refuses an insecure, malformed or credential-bearing URL. This route does not create a separate Next.js login or store editorial credentials.

For production, enforce HTTPS on WordPress administration, enable two-factor authentication and login rate limits, give the client an owner Administrator account, and use Editor accounts for routine publishing. The actual WordPress installation and its content integration are still required before CRUD is available.
