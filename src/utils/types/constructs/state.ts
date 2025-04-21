import { z } from "astro/zod";

export const maintenance = z.enum([
  "nearing collapse",
  "rusting",
  "malfunctioning",
  "functional",
  "well-maintained",
  "polished",
]);

export const corruption = z.enum([
  "not infected",
  "infected",
  "a Transcendant",
  "an Ascendant",
  "an Agent",
]);