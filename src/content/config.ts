import { defineCollection, z } from 'astro:content';

const contactsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    email: z.string().email(),
    telegram: z.string(),
    location: z.object({
      en: z.string(),
      ru: z.string(),
      pt: z.string(),
    }),
    social: z.object({
      linkedin: z.string().url(),
      github: z.string().url(),
      twitter: z.string().url(),
    }),
  }),
});

const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    position: z.object({
      en: z.string(),
      ru: z.string(),
      pt: z.string(),
    }),
    startDate: z.string(),
    endDate: z.string().optional(),
    technologies: z.array(z.string()),
    achievements: z.object({
      en: z.array(z.string()),
      ru: z.array(z.string()),
      pt: z.array(z.string()),
    }),
    order: z.number(),
  }),
});

const technologiesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    categories: z.array(z.object({
      id: z.number(),
      title: z.object({
        en: z.string(),
        ru: z.string(),
        pt: z.string(),
      }),
      icon: z.string(),
      technologies: z.array(z.string()),
    })),
  }),
});

const personalCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.object({
      en: z.string(),
      ru: z.string(),
      pt: z.string(),
    }),
    summary: z.object({
      en: z.string(),
      ru: z.string(),
      pt: z.string(),
    }),
    avatar: z.string(),
    yearsOfExperience: z.number(),
    location: z.object({
      en: z.string(),
      ru: z.string(),
      pt: z.string(),
    }),
  }),
});

export const collections = {
  contacts: contactsCollection,
  experience: experienceCollection,
  technologies: technologiesCollection,
  personal: personalCollection,
};