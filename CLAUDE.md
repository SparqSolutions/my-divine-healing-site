# Divine Healing Therapy Website

## Project Overview
A Next.js website for Divine Healing Therapy - a Christian counseling service that integrates faith with professional mental health care.

## Recent Updates
- Fixed transparency issues on main page - hero section maintains transparent background while content sections have solid white backgrounds for readability
- Updated navigation to be responsive - compact header on non-home pages to prevent content overlap
- Changed site-wide font to Playfair Display
- Repositioned avatar image in hero section to wrap with text
- Reduced "Shy's Story" header font size from text-9xl to text-6xl
- Removed quote text from hero section

## Tech Stack
- Next.js with TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display)

## Key Components
- `/src/app/page.tsx` - Main homepage with hero section and service information
- `/src/components/Navigation.tsx` - Responsive navigation with conditional styling
- `/src/app/globals.css` - Global styles and CSS variables
- `/src/app/layout.tsx` - Root layout with font configuration

## Development Notes
- Uses CSS custom properties for consistent color theming
- Background image is fixed on homepage with proper z-index layering
- Navigation adapts styling based on current page (transparent on home, solid on other pages)

## Deployment
- Deployed on Vercel
- Preview URL: https://my-divine-healing-site-b1mpp8uox-juliens-projects-aa68c1aa.vercel.app
- Production URL: my-divine-healing-site.vercel.app (run `vercel --prod` to deploy)