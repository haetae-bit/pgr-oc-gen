import { z } from "astro/zod";

const frameTypes = z.enum([
  "omniframe",
  "uniframe",
]);

export default frameTypes;