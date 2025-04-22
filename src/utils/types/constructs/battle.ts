import { z } from "astro/zod";

export const classes = z.enum([
  "tank",
  "support",
  "attacker",
  "annihilator",
  "amplifier",
  // "observer", // unreleased class
  "vanguard",
]);

export const elements = z.enum([
  "physical",
  "fire",
  "ice",
  "lightning",
  "dark",
  "nihil",
]);