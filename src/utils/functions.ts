import type { z } from "astro:content";
import { type as characterType, type Character } from "./types";
import { babylonianForces, faction } from "./types/affiliation";
import { colors, skinTones } from "./types/colors";
import { classes, elements } from "./types/constructs/battle";
import frameTypes from "./types/constructs/frames";
import { corruption, maintenance } from "./types/constructs/state";
import { negative, neutral, positive } from "./types/personality";
import { bodyType, height } from "./types/physical";
import weapons from "./types/weapons";

function getRandom(data: string[]) {
  let array = [...data];
  let index = Math.floor(Math.random() * array.length);
  const random = array[index];
  array.splice(index, 1);
  return random;
}

function getRandomItems(data: string[], amount: number) {
  let result = [];
  for (let i = 0; i < amount; i++) result.push(getRandom(data));
  return result;
}

function randomFlip(): boolean {
  return Math.random() > 0.5 ? true : false;
}

function generateFaction() {
  const generatedFaction = getRandom(faction.options);
  let group: string | undefined;
  if (generatedFaction === faction.enum.Babylonia) {
    group = getRandom(babylonianForces.options);
  }
  return {
    faction: generatedFaction,
    group,
  }
}

function generateConstruct(type: z.infer<typeof characterType>) {
  if (type === "construct") {
    let battleClass = getRandom(classes.options);
    let element = getRandom(elements.options);
    let frameType = randomFlip() ? frameTypes.enum.omniframe : frameTypes.enum.uniframe;
    let physicalMaintenance = getRandom(maintenance.options);
    let corruptionLevel = getRandom(corruption.options);

    return {
      battleClass,
      element,
      frameType,
      maintenance: physicalMaintenance,
      corruption: corruptionLevel,
    };
  }
}

export function generateCharacter(): Character {
  let generatedType = randomFlip() ? characterType.enum.commandant : characterType.enum.construct;
  let eyeColor = randomFlip() ? getRandom(colors.options) : getRandomItems(colors.options, 2);
  let skinColor = getRandom(skinTones.options);
  let hairColor = getRandom(colors.options);
  let clothingColors = getRandomItems(colors.options, 3);
  let generatedHeight = getRandom(height.options);
  let generatedBodyType = getRandom(bodyType.options);
  let personality = {
    positive: getRandomItems(positive.options, 3),
    negative: getRandomItems(negative.options, 3),
    neutral: getRandomItems(neutral.options, 3),
  };
  let weapon = getRandom(weapons.options);

  return {
    type: generatedType,
    eyeColor,
    skinColor,
    hairColor,
    clothingColors,
    height: generatedHeight,
    bodyType: generatedBodyType,
    personality,
    affiliation: generateFaction(),
    weapon,
    ...generateConstruct(generatedType),
  };
}