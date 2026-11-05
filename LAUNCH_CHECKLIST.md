# What is needed to publish

The current repository is a visual and interaction prototype. The introductory Substack post is real client content; sample people and articles must be replaced before launch. The submission and newsletter forms validate locally but do not deliver or store data.

## Decisions and access from the client

- Domain name and registrar account owned by the client.
- Hosting accounts for the Next.js front end and WordPress CMS, with billing and admin access in the client's name.
- A WordPress administrator account for the editor, plus a recovery administrator.
- Approved logo or permission to finalize the typographic mark shown in this prototype.
- Approved articles, author names, biographies, categories, tags, translations, and any photography or illustrations, with usage rights.
- Approved daily quotes and a policy for sourcing/attribution; approved book recommendations and edition details.
- Instagram profile URL and permission to link to it.
- Newsletter provider account, sender address, mailing list, consent wording and preferred signup process.
- Analytics provider choice and privacy/consent requirements for the intended audience.
- Editorial contact address, general inquiry routing, response timeframe, submission limits, accepted file types and maximum upload size.
- Copyright, publication permission, privacy, retention and withdrawal policies reviewed by the client.

## Engineering before publication

- Provision and secure WordPress; define article, author, category, tag, page and translation fields; create editor permissions and backups.
- Point `/admin` to the live HTTPS WordPress dashboard with `WORDPRESS_ADMIN_URL`; enable two-factor authentication and login rate limits, then verify unauthenticated visitors reach the WordPress login and editors can sign in.
- Replace `src/lib/content.ts` sample data with a typed WordPress API layer and draft preview.
- Build private submission intake with file/link storage, spam protection, editor notification and review status. Never publish directly from a submission.
- Connect the contact form and newsletter form to the chosen services; test inquiry delivery, newsletter confirmation and unsubscribe.
- Add real Instagram link, analytics and consent controls.
- Replace `noindex` with production SEO metadata, canonical URLs, article structured data, sitemap and social share images.
- Complete responsive, keyboard, screen reader, performance, form delivery and editorial workflow QA on staging.
- Train the editor, document article publishing and submission review, and verify client ownership of all accounts and assets.

## Release gate

Do not make the site public until real content, legal text, private submission delivery, newsletter delivery, WordPress permissions, backups and end-to-end tests are approved.
