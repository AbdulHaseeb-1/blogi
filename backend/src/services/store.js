import { nanoid } from "nanoid";

const now = () => new Date().toISOString();

const posts = new Map();
const media = new Map();

const seedPost = {
  id: nanoid(),
  title: "Welcome to Blogi",
  slug: "welcome-to-blogi",
  status: "published",
  author: "Admin",
  heroImageId: null,
  tags: ["intro", "design"],
  excerpt: "A production-ready foundation for modern editorial workflows.",
  blocks: [
    { type: "paragraph", content: "Start building a premium blog experience." },
    { type: "video", url: "https://player.vimeo.com/video/76979871" },
    { type: "link", url: "https://blogi.dev", title: "Design system" }
  ],
  createdAt: now(),
  updatedAt: now(),
  scheduledFor: null
};

posts.set(seedPost.id, seedPost);

export const store = {
  listPosts() {
    return Array.from(posts.values());
  },
  getPost(id) {
    return posts.get(id);
  },
  createPost(payload) {
    const id = nanoid();
    const post = {
      id,
      title: payload.title,
      slug: payload.slug,
      status: payload.status || "draft",
      author: payload.author || "Admin",
      heroImageId: payload.heroImageId || null,
      tags: payload.tags || [],
      excerpt: payload.excerpt || "",
      blocks: payload.blocks || [],
      createdAt: now(),
      updatedAt: now(),
      scheduledFor: payload.scheduledFor || null
    };
    posts.set(id, post);
    return post;
  },
  updatePost(id, payload) {
    const existing = posts.get(id);
    if (!existing) return null;
    const updated = {
      ...existing,
      ...payload,
      updatedAt: now()
    };
    posts.set(id, updated);
    return updated;
  },
  removePost(id) {
    return posts.delete(id);
  },
  listMedia() {
    return Array.from(media.values());
  },
  createMedia(payload) {
    const id = nanoid();
    const asset = {
      id,
      name: payload.name,
      type: payload.type,
      url: payload.url,
      size: payload.size || 0,
      tags: payload.tags || [],
      createdAt: now()
    };
    media.set(id, asset);
    return asset;
  }
};
