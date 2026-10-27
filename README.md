# Lunara

A React website built with **Next.js App Router** and **Bootstrap 5**.

## Development

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use `npm run dev -- --port 3001` for a different port.

## Production

```bash
npm run build
npm start
```

## Structure

```text
src/
  app/                 # Routes, metadata, root layout, and 404 page
  components/
    layout/            # Shared logo, header, footer, and page shell
    forms/             # Interactive contact form
    home/              # Homepage sections
    about/             # About page sections
    safety-check/      # Safety Hub sections
    contact/           # Contact page sections
  styles/              # Bootstrap-compatible custom styles
public/                # Images, fonts, and static presentation export
```

Pages and presentation sections are React Server Components. The header and contact
form are Client Components for theme switching, navigation, and form interactions.
Each route exports its metadata through Next.js. Internal navigation uses Next Link.
Bootstrap 5 CSS and Bootstrap Icons are installed through npm and imported once in
the root layout. Custom styles preserve the current responsive designs.

The legacy booking, partnership, and legal page designs remain supported, with their
styles isolated in `src/styles/legacy.css`. The original standalone HTML site and
static server have been removed. All `.html` page URLs redirect to clean Next routes.

The contact form prepares an email draft in the visitor's email app. It does not
send mail through a backend or claim that a message has been delivered.

## Formatting

```bash
npm run format
npm run format:check
```

## Vercel deployment

Import this repository with the root directory set to the repository root (leave
Root Directory empty). `vercel.json` selects the Next.js framework, runs `npm ci`
and `npm run build`, and uses `.next` as the build output. Do not select `public`
as the deployment output; that folder contains assets, not the application routes.
After changing deployment settings, redeploy the latest commit.
