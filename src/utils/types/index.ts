import { z } from "astro/zod";

export const type = z.enum(["commandant", "construct"]);

export type Personality = {
  positive: string[];
  negative: string[];
  neutral: string[];
};

type Affiliation = {
  faction: string;
  group?: string | undefined;
};

export type Character = {
  [key: string]: any;
  type: string;
  eyeColor: string | string[];
  skinColor: string;
  hairColor: string;
  clothingColors: string[];
  height: string;
  bodyType: string;
  personality: Personality;
  affiliation: Affiliation;
  weapon: string;
  class?: string;
  element?: string;
  frameType?: string;
  maintenance?: string;
  corruption?: string;
}