# Abhijeet Maske — Portfolio

A DevOps / Cloud Engineer portfolio built with Next.js 16, TypeScript, and
Tailwind CSS — designed to also demonstrate DevOps practices in how it's
built, containerized, and deployed.

**Live sections:** Hero · About · Skills · Projects · Architecture (interactive
CI/CD pipeline) · Education · GitHub · Contact

---

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack build)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Animation:** Motion (the successor to Framer Motion) — respects
  `prefers-reduced-motion` throughout
- **Icons:** Lucide React
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono
  (code/terminal accents) — loaded via `next/font/google`, self-hosted at
  build time (no runtime request to Google)

No state management library, no CSS-in-JS, no UI kit — kept intentionally
minimal per the brief.

---

## Project structure

```
src/
  app/                    Routes, layout, metadata, sitemap, robots, OG image
  components/
    layout/               Navbar, Footer
    sections/              Hero, About, Skills, Projects, Architecture,
                           Education, GitHubSection, Contact
    ui/                    Reusable primitives (Button, Badge, GlowCard, ...)
  config/                 ← EDIT HERE: personal info, skills, projects, links
  lib/                    Small utilities (cn() class merger)
  types/                  Shared TypeScript types
public/                   Static assets, resume.pdf goes here
k8s/                      Optional Kubernetes manifests
terraform/                Optional AWS EC2 hosting scaffold
.github/workflows/        CI: lint, type-check, build, Docker build
```

---

## Where to put your real information

Everything personal lives in **`src/config/`** — you should not need to touch
component code to update content.

| What | File | Field(s) |
|---|---|---|
| Name, tagline, location | `src/config/site.ts` | top-level fields |
| GitHub / LinkedIn / email | `src/config/site.ts` | `links.github`, `links.linkedin`, `links.email` |
| Resume file | `public/resume.pdf` | drop the file in; `links.resume` already points at `/resume.pdf` |
| SEO title/description | `src/config/site.ts` | `seo.*` |
| Skills | `src/config/skills.ts` | `skillCategories` array |
| Projects (GitHub/demo links) | `src/config/projects.ts` | `github`, `demo` per project |
| Pipeline / architecture stages | `src/config/pipeline.ts` | `pipelineStages` array |
| Education | `src/config/site.ts` | `education` array |

The site currently ships with clearly-labeled placeholder URLs
(`your-github-username`, `your.email@example.com`, etc.) — search for
`TODO` and `your-` across `src/config/` to find every spot that needs a real
value before you deploy.

---

## Contact form

The contact form in `src/components/sections/Contact.tsx` validates input
and shows proper loading / success / error states, but **has no backend
wired up yet** — it currently simulates a network call. See the `TODO`
comment in that file for two ready-to-go options:

1. **Formspree** — no server code needed, just an endpoint URL
   (`NEXT_PUBLIC_FORMSPREE_ENDPOINT` in `.env`)
2. **Resend** — via a small Next.js API route (`src/app/api/contact/route.ts`,
   not included by default — add it when you're ready)

---

## Run locally

```bash
npm install
cp .env.example .env.local   # optional — only needed once the contact form is wired up
npm run dev
```

Visit `http://localhost:3000`.

Other scripts:

```bash
npm run lint         # ESLint (flat config, eslint-config-next)
npm run type-check   # tsc --noEmit
npm run build         # production build
npm run start         # serve the production build locally
```

---

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Set `NEXT_PUBLIC_SITE_URL` to your real domain in the Vercel project's
   environment variables (used for metadata / sitemap / Open Graph URLs).
4. Deploy — Vercel auto-detects Next.js, no extra config needed.

---

## Deploy with Docker

The `Dockerfile` is a multi-stage build using Next's `output: "standalone"`
mode, so the final image only contains the compiled server output — no
`node_modules`, no source, and it runs as a non-root user.

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

Visit `http://localhost:3000`.

### What each stage does (useful for explaining this in an interview)

1. **`deps`** — installs dependencies from `package-lock.json` only, so this
   layer is cached independently of source changes.
2. **`builder`** — copies source in, runs `npm run build`. Next compiles a
   self-contained server into `.next/standalone`.
3. **`runner`** — a fresh, minimal `node:20-alpine` image that copies in only
   `public/`, `.next/standalone`, and `.next/static`. Runs as a dedicated
   `nextjs` user (not root), exposes port 3000, and starts with
   `node server.js`.

---

## CI/CD

`.github/workflows/ci.yml` runs on every push/PR to `main`:

1. **`lint-and-build`** — `npm ci` → `next lint` → `tsc --noEmit` → `next build`
2. **`docker-build`** — builds the Docker image (via Buildx, with GitHub
   Actions layer caching) to confirm the container build stays green; it
   does not push anywhere by default.

To push images automatically, add a registry login step (e.g.
`docker/login-action`) and set `push: true` with a real `tags:` value —
intentionally left out here since it needs your own registry credentials.

---

## Optional: Kubernetes

`k8s/` contains a `Deployment`, `Service`, and `Ingress` for running the
container on a Kubernetes cluster — replace the placeholder image reference
(`your-registry/portfolio:latest`) and domain before applying:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml   # only if you have an ingress controller
```

## Optional: Terraform (AWS EC2)

`terraform/` provisions a minimal EC2 host (security group + instance) that
pulls and runs the Docker image on boot — a simple, explainable alternative
to Kubernetes for a single-instance deployment.

```bash
cd terraform
terraform init
terraform plan -var="key_name=your-key-pair" -var="allowed_ssh_cidr=203.0.113.4/32"
terraform apply -var="key_name=your-key-pair" -var="allowed_ssh_cidr=203.0.113.4/32"
```

---

## Accessibility & performance notes

- Skip-to-content link, visible focus rings, semantic landmarks
  (`<header>`, `<main>`, `<footer>`, labeled `<nav>`)
- `prefers-reduced-motion` disables/shortens all animation globally
  (`globals.css`) and is checked explicitly in animated components via
  `useReducedMotion()`
- Fonts are self-hosted at build time via `next/font/google` (no
  render-blocking third-party font request)
- Open Graph image is generated at build time (`src/app/opengraph-image.tsx`),
  not a hand-exported static asset
- `output: "standalone"` keeps the Docker image and cold-start size small

---

## Honesty note

This portfolio intentionally contains **no fabricated companies, employers,
testimonials, or statistics** — every project description is scoped to what
was actually built (see the project briefs in `src/config/projects.ts`).
Replace the placeholder GitHub/demo links with your real repositories before
publishing.
