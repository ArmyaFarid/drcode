# Portfolio Configuration Guide

This portfolio uses a centralized configuration system that makes it easy to update content without touching component code.

## Quick Updates

All personal information, content, and settings are stored in `config/portfolio.ts`. Simply edit this file to update:

### Personal Information
- Name, title, location, contact details
- Profile image path
- Social media links
- Professional tagline and summary

### Skills & Experience
- Add/remove skills with proficiency levels
- Update work experience and achievements
- Modify project descriptions and technologies

### Content Sections
- Update section titles and descriptions
- Modify navigation items
- Change theme colors

### Projects
- Add new projects with descriptions
- Update technology stacks
- Include demo and GitHub links

## Deployment

This portfolio is optimized for easy deployment on:
- **Vercel**: Push to GitHub and connect to Vercel
- **GitHub Pages**: Enable GitHub Pages in repository settings
- **Netlify**: Connect repository for automatic deployments

## File Structure

\`\`\`
config/
  portfolio.ts          # Main configuration file
components/
  hero.tsx             # Hero section
  about.tsx            # About section
  skills.tsx           # Skills with progress bars
  experience.tsx       # Work experience
  projects.tsx         # Featured projects
  education.tsx        # Education & certifications
  contact.tsx          # Contact form
  navigation.tsx       # Navigation menu
\`\`\`

## Customization

1. **Update Personal Info**: Edit `config/portfolio.ts` personal section
2. **Add Projects**: Add to the projects array in config
3. **Modify Skills**: Update skills object with categories and levels
4. **Change Colors**: Modify theme section in config
5. **Update Content**: Edit content section for all text

No database required - all data is stored in the configuration file for maximum portability and ease of deployment.
