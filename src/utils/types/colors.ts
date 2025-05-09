import { z } from "astro/zod";

export const colors = z.enum([
  "ruby",
  "red",
  "citrine",
  "orange",
  "topaz",
  "yellow",
  "gold",
  "emerald",
  "green",
  "sapphire",
  "blue",
  "indigo",
  "violet",
  "purple",
  "lavender",
  "pink",
  "magenta",
  "white",
  "gray",
  "silver",
  "gunmetal",
  "black",
  "obsidian",
  "brown",
  "teal",
  "turquoise",
  "ice blue",
]);

// reference: https://www.tumblr.com/writingwithcolor/96830966357/words-for-skin-tone-how-to-describe-skin-color
export const skinTones = z.enum([
  "dark brown",
  "brown",
  "tawny",
  "fawn",
  "terra cotta",
  "ochre",
  "russet",
  "pale",
  "ghostly",
  "ivory",
  "light tan",
  "dark tan",
  "pink",
  "beige",
  "fair",
  "olive",
  "golden",
  "copper",
  "bronze",
  "amber",
  "chestnut",
  "walnut",
  "ash",
  "sienna",
  "clay",
  "umber",
  "taupe",
]);