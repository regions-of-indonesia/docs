import { defineCollection, z } from "astro:content";

const DocSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  github: z.string().optional(),
});

export const collections = {
  docs: defineCollection({
    type: "content",
    schema: DocSchema,
  }),
};
