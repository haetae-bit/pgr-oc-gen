import { z } from "astro/zod";
import { colors, skinTones } from "./colors";
import { positive, negative, neutral } from "./personality";
import { bodyType, height } from "./physical";
import weapons from "./weapons";
import { classes, elements } from "./constructs/battle";
import frameTypes from "./constructs/frames";
import { maintenance, corruption } from "./constructs/state";
import { babylonianForces, faction } from "./affiliation";
import { getRandom, randomFlip } from "@/functions";

export const type = z.enum(["commandant", "construct"]);

type Personality = {
  positive: string[];
  negative: string[];
  neutral: string[];
}

class Character {
  type: string;
  skinColor: string;
  eyeColor: string | string[];
  clothingColors: string[];
  height: string;
  bodyType: string;
  personality: Personality;
  weapon: string;
  faction: string;
  group?: string;

  constructor(characterType: z.infer<typeof type>) {
    this.type = characterType;
    this.skinColor = getRandom(skinTones.options)[0];
    if (randomFlip()) {
      this.eyeColor = getRandom(colors.options, 2);
    } else {
      this.eyeColor = getRandom(colors.options)[0];
    }
    this.clothingColors = getRandom(colors.options, 3);
    this.height = getRandom(height.options)[0];
    this.bodyType = getRandom(bodyType.options)[0];
    this.personality = {
      positive: getRandom(positive.options, 3),
      negative: getRandom(negative.options, 3),
      neutral: getRandom(neutral.options, 3),
    };
    this.faction = getRandom(faction.options)[0];
    if (this.faction === faction.enum.Babylonia) {
      this.group = getRandom(babylonianForces.options)[0];
    }
    this.weapon = getRandom(weapons.options)[0];
  }
}

export class Construct extends Character {
  class: string;
  element: string;
  frameType: z.infer<typeof frameTypes>;
  maintenance: string;
  corruption: string;

  constructor() {
    super("construct");
    this.class = getRandom(classes.options)[0];
    this.element = getRandom(elements.options)[0];
    this.frameType = randomFlip() ? frameTypes.enum.omniframe : frameTypes.enum.uniframe;
    this.maintenance = getRandom(maintenance.options)[0];
    this.corruption = getRandom(corruption.options)[0];
  }
}

export class Commandant extends Character {
  constructor() {
    super("commandant");
  }
}