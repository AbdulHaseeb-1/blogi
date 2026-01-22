# Blogi

A production-ready starter for a modern blog platform with a Node/Express backend and a responsive admin dashboard built with React + shadcn-inspired UI.

## Highlights
- **Rich post content**: supports structured blocks for text, images, video, audio, links, and documents.
- **Media pipeline**: upload, tag, and reuse assets across posts.
- **Roles & permissions**: admin/editor/author roles with scoped capabilities.
- **Publishing workflows**: draft, scheduled, published, archived.
- **Search & analytics**: extensible architecture for full-text search and KPI dashboards.

## Project structure
```
backend/   # API service (Express)
admin/     # Admin dashboard (React)
```

## Quick start

### Backend
```
cd backend
npm install
npm run dev
```

### Admin
```
cd admin
npm install
npm run dev
```

## Deployment notes
- Use Postgres in production (swap the in-memory store for a DB adapter).
- Configure object storage for media (S3/GCS/Cloudflare R2) and enable CDN.
- Provide JWT secrets, OAuth providers, and rate-limiting.
- Run behind a reverse proxy (Nginx/Traefik) with TLS.

## Design inspiration
The layout draws from modern editorial systems (Notion-like organization, Webflow-style media cards, and CMS-style workflows) for a clean, premium visual hierarchy.

### Frontend
```
cd frontend
python3 -m http.server 5050
```
