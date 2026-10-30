# Njerëz prej Letre — Design system

## Thesis
An independent literary magazine that feels like a carefully printed object brought to life. The page is a reading space first. A single dimensional paper composition on the homepage makes “people made of paper” memorable without putting motion into article text.

## Visual world
- **Material:** uncoated ivory paper, warm ink, fine rules, restrained marginal marks, a deep oxblood editorial accent.
- **Composition:** asymmetric magazine grids, wide page margins, large type with deliberate line breaks, article lists separated by rules rather than generic cards.
- **Typography:** expressive old-style serif for the identity and editorial heads; compact humanist sans for metadata, navigation and controls. Body prose uses a generous serif measure.
- **Palette:** paper `#f5f0e7`, lighter paper `#fbf8f2`, ink `#251f1b`, secondary ink `#6c5e54`, oxblood `#6b272e`, line `#cfc4b5`.
- **Motion:** paper layers respond gently to pointer position. One entrance sequence establishes the cover, then navigation and reading remain steady. Motion reduces to static states under `prefers-reduced-motion`.

## Homepage
The first viewport acts as a magazine cover: oversized Albanian masthead, compact issue context and an abstract paper object. The latest feature crosses the lower edge of the cover. A quiet editorial sequence follows: lead story, latest writing, editorial statement, topic index, featured writers, submission invitation and newsletter.

## Article page
Category and reading time precede a large serif headline. The author and publication details sit above a narrow, comfortable reading column. Pull quotes and small marginal notes break the rhythm without fragmenting the essay. Related writing follows the article.

## Interaction and access
Navigation and search are keyboard usable. All links have visible focus, form controls have explicit labels, and actionable states are never conveyed by color alone. Decorative dimensional elements are hidden from assistive technology. Pages target contrast of at least 4.5:1 for body text. The visual hierarchy scales from desktop to mobile without horizontal scrolling.

## Content rules
Albanian is the default language. The logo remains Albanian if English article translations are added. Sample articles and people in this prototype are marked illustrative in the UI. Never imply they are real submissions or published work. English can be added as a paired article translation with `language`, `translationOf`, and localized URLs.

## Implementation boundaries
This is a Next.js front end. The production CMS, submission storage, newsletter provider and analytics need client accounts and credentials before launch. The UI keeps those integrations behind clear boundaries; no form claims delivery before a service is connected.
