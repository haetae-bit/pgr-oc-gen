import { z } from "astro/zod";

export const height = z.enum([
  "tall (around 180cm or 5 feet, 10 inches and above)",
  "average (around 170cm or 5 feet, 6 inches)",
  "short (around 160cm or 5 feet, 3 inches and below)"
]);

export const bodyType = z.enum([
  "heavyset and shapely",
  "thick and boxy",
  "plush and soft",
  "athletic and broad-shouldered",
  "trim and muscular",
  "average and unimpressive",
  "lithe and graceful",
  "slim and agile",
  "thin and sickly",
]);