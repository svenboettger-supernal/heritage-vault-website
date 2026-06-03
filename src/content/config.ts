import { defineCollection, z } from "astro:content";

const surfaces = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    capabilities: z.array(z.string()),
    whyItMatters: z.string(),
    order: z.number(),
    screenshot: z.string().optional(),
    icon: z.string().optional(),
  }),
});

const documents = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    order: z.number(),
  }),
});

const faqs = defineCollection({
  type: "content",
  schema: z.object({
    page: z.enum(["home", "product", "firms", "security", "request-access", "global"]),
    question: z.string(),
    answer: z.string(),
    order: z.number(),
  }),
});

const securityClaims = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    bullets: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { surfaces, documents, faqs, securityClaims };
