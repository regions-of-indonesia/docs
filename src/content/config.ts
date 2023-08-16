import { defineCollection, z } from "astro:content";

const DocSchema = z.object({
  title: z.string(),
});

export const collections = {
  docs: defineCollection({
    type: "content",
    schema: DocSchema,
  }),
};
