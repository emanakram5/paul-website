# Paul Langshaw website (React + Vite + Tailwind)
```
npm install
npm run dev      # local preview
npm run build    # production build into dist/
```
- All content: `src/data/site.js` (properties, services, reviews, articles, stats, contact).
- Paul's photo: save as `public/paul.jpg`.
- Images are random stock photos (picsum.photos) via `img()` in `src/components/ui.jsx`. Replace with local files in `public/`.
- Forms open the visitor's email app (no backend). Stats, timeline, reviews are placeholders awaiting Paul's confirmation.
- If hosting on Netlify/Vercel, add an SPA redirect to index.html so deep links work.
