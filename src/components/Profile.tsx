import type { Character } from "@/types";
import ColorChip from "./ColorChip";
import PersonalityTable from "./PersonalityTable";
import { generateCharacter } from "@/functions";
import { useState } from "preact/hooks";

export default function Profile() {
  const [character, setCharacter] = useState<Character>();

  function generate() {
    setCharacter(generateCharacter());
  }

  return (
    <article id="profile">
      <button onClick={generate}>Randomize!</button>
      {character && (
        <>
          <h1>You are... a {character.type}</h1>

          <h2>Colors</h2>
          <h3>Your eye color{typeof character.eyeColor === "object" ? "s are" : " is"}:</h3>
          <div>
            {typeof character.eyeColor === "string"
              ? <ColorChip color={character.eyeColor} />
              : character.eyeColor.map((eye, i) => (
                <ColorChip key={i} color={eye} />
            ))}
          </div>

          <h3>Your skin is:</h3>
          <ColorChip color={character.skinColor} />

          <h3>Your hair is:</h3>
          <ColorChip color={character.hairColor} />

          <h3>Your outfit has these colors:</h3>
          <div>
            {character.clothingColors.map((clothes, i) => (
              <ColorChip key={i} color={clothes} />
            ))}
          </div>

          <h2>Physical</h2>
          <h3>You are {character.height}</h3>
          <h3>You look {character.bodyType}</h3>
          {character.type === "construct" && (<>
            <h3>Your frame is {character.maintenance}</h3>
            <h3>According to the Punishing: Virus scan, you are {character.corruption}</h3>
          </>)}

          <h2>Personality</h2>
          <PersonalityTable data={character.personality} />

          <h2>Affiliation</h2>
          <h3>You are aligned with {character.affiliation.faction}</h3>
          {character.affiliation.group && (<h3>You work in the {character.affiliation.group}</h3>)}

          <h2>Battle</h2>
          <h3>You use {character.weapon.endsWith("s") ? character.weapon : `a ${character.weapon}`}</h3>
          {character.type === "construct" && (<>
            <h3>You are designated frame type: {character.frameType}</h3>
            <h3>Your class is {character.class}</h3>
            <h3>You are well-versed using {character.element}</h3>
          </>)}
        </>
      )}
    </article>
  )
}