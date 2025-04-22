import type { ComponentChildren } from "preact";
import type { Character } from "@/types";
import { generateCharacter } from "@/functions";
import { useState } from "preact/hooks";
import ColorChip from "./ColorChip";
import PersonalityTable from "./PersonalityTable";
import Icon from "./Icon";

type Props = {
  children?: ComponentChildren;
}

export default function Profile({ children }: Props) {
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
          {children}

          <section class="row">
            <h2>Colors</h2>
            <section class="colors">
              <div class="col">
                <h3>Your eye color{typeof character.eyeColor === "object" && "s"}</h3>
                <section>
                  {typeof character.eyeColor === "string"
                    ? <ColorChip color={character.eyeColor} />
                    : character.eyeColor.map((eye, i) => (
                      <ColorChip key={i} color={eye} />
                  ))}
                </section>
              </div>

              <div class="col">
                <h3>Your skin color:</h3>
                <ColorChip color={character.skinColor} />
              </div>

              <div class="col">
                <h3>Your hair color:</h3>
                <ColorChip color={character.hairColor} />
              </div>
            </section>
            
            <div class="col">
              <h3>Your outfit colors:</h3>
              <section class="colors">
                {character.clothingColors.map((clothes, i) => (
                  <ColorChip key={i} color={clothes} />
                ))}
              </section>
            </div>
          </section>
          
          <section class="row">
            <h2>Physical</h2>
            <h3>You are {character.height}</h3>
            <h3>You look {character.bodyType}</h3>
            {character.type === "construct" && (<>
              <h3>Your frame is {character.maintenance}</h3>
              <h3>According to the Punishing: Virus scan, you are {character.corruption}</h3>
            </>)}
          </section>

          <section class="row">
            <h2>Personality</h2>
            <PersonalityTable data={character.personality} />
          </section>

          <section class="row">
            <h2>Affiliation</h2>
            <h3>You are aligned with {character.affiliation.faction}</h3>
            {character.affiliation.group && (<h3>You work in the {character.affiliation.group}</h3>)}
          </section>

          <section class="row">
            <h2>Battle</h2>
            <h3>You wield {character.weapon.endsWith("s") ? character.weapon : `a ${character.weapon}`}</h3>
            {character.type === "construct" && (<>
              <h3>You are designated frame type: {character.frameType}</h3>
              <section class="battle">
                <div class="col">
                  <h3>Your class is {character.class}</h3>
                  <div class="col-content">
                    <Icon category="class" item={character.class!} />
                  </div>
                </div>

                <div class="col">
                  <h3>You are well-versed using {character.element}</h3>
                  <div class="col-content">
                    <Icon category="element" item={character.element!} />
                  </div>
                </div>
              </section>
            </>)}
          </section>
        </>
      )}
    </article>
  )
}