# Repository agent guidance

## Product

- This repository contains a reusable static landing-page starter for private tutors.
- The first implementation is a Ukrainian-language website for an English tutor.
- Keep tutor-specific content separate from reusable presentation components.
- Never invent testimonials, qualifications, student counts, exam results, or experience.
- Do not commit personal contact information or client photographs without explicit approval.

## Architecture

- Use Astro, TypeScript, and plain CSS.
- Do not add React or another UI framework without explicit approval.
- Keep the generated site static and minimize client-side JavaScript.
- Do not add a backend, database, authentication, analytics, advertising pixels, CMS,
  payment integration, or custom scheduling system without explicit approval.
- Centralize client content and theme configuration.
- Optional sections must be configurable without deleting component code.

## Quality

- Design mobile-first.
- Use semantic HTML and accessible interactions.
- Preserve visible keyboard focus and sufficient color contrast.
- Optimize images and avoid unlicensed assets.
- Do not use placeholder copy such as Lorem ipsum in the finished demo.
- Take screenshots for perceptible UI changes.

## Delivery

- Never commit directly to main.
- Use one bounded branch and pull request per stage.
- Use Conventional Commits.
- Before committing, run the project checks, build, formatting checks, git diff --check,
  and git status.
