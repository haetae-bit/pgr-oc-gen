import { z } from "astro/zod";

export const faction = z.enum([
  "Babylonia",
  "Forsaken",
  "World Government Association of Art",
  "Church of Machina",
  "Akdilek Commercial Alliance",
  "Arctic Route Union",
  "Kowloong Chamber of Commerce",
  "independent",
]);

export const babylonianForces = z.enum([
  "Purifying Force",
  "Engineering Force",
  "Task Force",
  "Support Force",
]);