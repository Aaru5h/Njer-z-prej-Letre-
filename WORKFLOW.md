# Project workflow and launch plan

## 1. Discovery and content
Confirm CMS, hosting, domain owner, publication policies, real article and author content, logo/photography, and the newsletter/Instagram accounts. Produce a content inventory and approve the homepage and article layouts before populating the full archive.

## 2. Design
Use `Design.md` as the visual source of truth. Review the responsive homepage and article template in the local Next.js preview. Capture client feedback in one revision round before CMS wiring. Keep the paper motion optional under reduced-motion settings.

## 3. Production architecture
Chosen direction: **Next.js front end + headless WordPress** hosted in the client's account. WordPress gives familiar article, category and author editing; Next.js gives control over the reading experience and performance. WordPress [exposes posts, categories, tags and users through its REST API](https://developer.wordpress.org/rest-api/reference/); any custom editorial content type must explicitly opt into REST support. Use WordPress custom post types or a protected form service for submissions. Editors review every submission before an approved article is created. Do not expose private uploads through the public media library.

Sanity was considered as an alternative, but the client prefers WordPress.

## 4. Build sequence
1. Create content models: articles, authors, categories, tags, translations, pages and submission statuses.
2. Implement CMS read APIs and preview mode; preserve editorial draft/publish permissions.
3. Replace sample content with approved material and add author pages, topic archives and search indexing.
4. Connect submissions to protected storage and editor notifications, with file type/size limits, malware scanning and consent text.
5. Connect general contact and newsletter forms, Instagram profile, analytics and consent controls as required.
6. Add metadata, sitemap, canonical URLs, Open Graph images and structured article data.
7. Test navigation, search, forms, editorial review, mobile layouts, keyboard use, performance and error states on staging.
8. Transfer domain, hosting, CMS admin and integration ownership to client controlled accounts; document recovery and backups.

## 5. Editorial workflow
Writer reads guidelines → submits work and publication consent → editor receives private submission → editor reviews and corresponds with writer → accepted work is copied into a draft with author attribution → editor proofreads and schedules/publishes → writer receives publication link. Rejected or withdrawn work stays private and is retained only per the agreed policy.

## 6. Handover
Provide a short screen-recorded walkthrough and written steps for creating/editing articles, assigning authors/categories/tags, adding a translation, reviewing submissions, managing the newsletter connection, and checking analytics. Give the client admin access and keep a second recovery admin under their control. Record backup and update cadence.

## 7. Estimate to validate after integrations are chosen
Design and front-end implementation: roughly **3–5 weeks**. WordPress integration, submission workflow, content migration and QA: another **2–4 weeks**, depending on content readiness. A project fee requires an agreed day rate, content volume and integration scope.

As an illustrative hosting baseline checked in October 2026, [Vercel Pro is listed at $20/month](https://vercel.com/pricing) and [Kinsta's single WordPress plan at $35/month after its introductory month](https://kinsta.com/pricing/), for **$55/month before taxes, usage overages, newsletter and email services**. Domain cost depends on the extension and availability; [Cloudflare Registrar charges registry and ICANN cost without a markup](https://developers.cloudflare.com/registrar/). Obtain a live quote in the client's name before purchase. Ongoing maintenance should cover updates, backups, monitoring and editorial support under an agreed monthly scope.

## Current local deliverable
This repository contains the responsive Next.js interface and illustrative content. Its forms are explicitly in preview mode. Production publishing and delivery require the decisions and accounts above.
