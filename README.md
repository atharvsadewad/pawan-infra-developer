## Pawan Infra Developer — Website

Elegant, professional, and minimal website for a construction and real-estate developer.

### Tech
- Next.js (Pages Router) + TypeScript
- Tailwind CSS
- Framer Motion (subtle animations)
- React Icons

### Scripts
```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Lint
```

### Structure
```
src/
  components/    # Navbar, Footer, Hero, Cards, ContactForm, Section
  pages/         # Home, About, Projects, Services, Gallery, Contact
  styles/        # Tailwind global styles
public/assets/   # Placeholder images
```

### Deployment (GitHub → Vercel)
1. Push this repository to GitHub.
2. Create a new Vercel project and import the repo.
3. Use defaults; framework is detected automatically.

### Customization
- Update colors/typography via Tailwind utility classes.
- Replace placeholder images in `public/assets`.
- Update meta tags in `src/pages/_app.tsx` and `src/pages/_document.tsx`.

