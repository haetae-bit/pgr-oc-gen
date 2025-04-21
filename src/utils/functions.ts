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

function getRandom(data: string[], array = false) {
  let index = Math.floor(Math.random() * data.length);
  const random = data[index];
  (array) ? data.splice(index, 1) : data.toSpliced(index, 1);
  return random;
}

function getRandomItems(data: string[], amount: number) {
  let array = [...data];
  let result = [];
  for (let i = 0; i < amount; i++) result.push(getRandom(array, true));
  return [...new Set(result)];
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
    const battleClass = getRandom(classes.options);
    const element = getRandom(elements.options);
    const frameType = randomFlip() ? frameTypes.enum.omniframe : frameTypes.enum.uniframe;
    const physicalMaintenance = getRandom(maintenance.options);
    const corruptionLevel = getRandom(corruption.options);

    return {
      class: battleClass,
      element,
      frameType,
      maintenance: physicalMaintenance,
      corruption: corruptionLevel,
    };
  }
}

export function generateCharacter(): Character {
  const generatedType = randomFlip() ? characterType.enum.commandant : characterType.enum.construct;
  const eyeColor = randomFlip() ? getRandom(colors.options) : getRandomItems(colors.options, 2);
  const skinColor = getRandom(skinTones.options);
  const hairColor = getRandom(colors.options);
  const clothingColors = getRandomItems(colors.options, 3);
  const generatedHeight = getRandom(height.options);
  const generatedBodyType = getRandom(bodyType.options);
  const personality = {
    positive: getRandomItems(positive.options, 3),
    negative: getRandomItems(negative.options, 3),
    neutral: getRandomItems(neutral.options, 3),
  };
  const weapon = getRandom(weapons.options);

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