# Circle — Сээкл ХХК

Corporate website built with Next.js, React and Tailwind CSS. Includes business sectors, company news, careers, partners and contact information, with Mongolian/English controls and light/dark themes.

## Development

```sh
npm install
npm run dev -- --port 3030
```

## Production preview

```sh
npm run build -- --webpack
npm run start -- --port 3030
```

## Content

- `data/circle.json`: original company posts and categories.
- `public/circle/`: company images, logos and fonts.
- `data/circle-language.json`: shared interface translations.
- `data/news-en.js`: English news listing excerpts; full source articles remain Mongolian.
- `data/contact-details.json`: original office and branch contact information.

The contact enquiry form opens an email draft addressed to `circle1@orgil.mn`; it does not send mail from the server and requires no email API credentials. The map uses a Google Maps embed. The legacy `/tour` URL redirects to `/business`.
