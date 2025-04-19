import { z } from "astro/zod";

const weapons = z.enum([
  "sword",
  "dual blades",
  "greatsword",
  "dagger",
  "scythe",
  "spear",
  "halberd",
  "glaive",
  "dual guns",
  "gun",
  "cannon",
  "levi-gun",
  "chakram",
  "tonfas",
  "claws",
  "gauntlets",
  "hammer",
  "mace",
  "morning star",
  "chain blade",
  "gunblade",
  "gunlance",
]);

export default weapons;