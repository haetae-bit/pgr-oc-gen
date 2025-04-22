import { colors, skinTones } from "@/types/colors";
import { useState } from "preact/hooks";
import "./ColorChip.css";

type Props = {
  color: string;
}

export default function ColorChip({ color }: Props) {
  const [value, setValue] = useState("");

  switch (color) {
    // https://www.color-meanings.com/shades-of-brown-color-names-html-hex-rgb-codes/
    case skinTones.enum.amber:
      setValue("#FFC000");
      break;
    case skinTones.enum.ash:
      setValue("#c1b5a9");
      break;
    case skinTones.enum.beige:
      setValue("#F5F5DC");
      break;
    case skinTones.enum.bronze:
      setValue("#CD7F32");
      break;
    case skinTones.enum.chestnut:
      setValue("#954535");
      break;
    case skinTones.enum.clay:
      // https://www.color-name.com/clay-red.color
      setValue("#A6615D");
      break;
    case skinTones.enum.copper:
      setValue("#B87333");
      break;
    case skinTones.enum["dark brown"]:
      setValue("#654321");
      break;
    case skinTones.enum["dark tan"]:
      setValue("#918151");
      break;
    case skinTones.enum.fair:
      setValue("#EFDECD");
      break;
    case skinTones.enum.fawn:
      setValue("#E5AA70");
      break;
    case skinTones.enum.ghostly:
      setValue("#E3DAC9");
      break;
    case skinTones.enum.golden:
      setValue("#996515");
      break;
    case skinTones.enum.ivory:
      setValue("#FFFFF0");
      break;
    case skinTones.enum["light tan"]:
      setValue("#D2B48C");
      break;
    case skinTones.enum.ochre:
      setValue("#CC7722");
      break;
    case skinTones.enum.olive:
      // https://colorcodes.io/olive-skin-color-codes/
      setValue("#C68642");
      break;
    case skinTones.enum.pale:
      setValue("#E3DEC6");
      break;
    case skinTones.enum.russet:
      setValue("#80461B");
      break;
    case skinTones.enum.sienna:
      setValue("#882D17");
      break;
    case skinTones.enum.tawny:
      setValue("#CD5700");
      break;
    case skinTones.enum["terra cotta"]:
      setValue("#C66E4E");
      break;
    case skinTones.enum.walnut:
      setValue("#59392B");
      break;
    case skinTones.enum.umber:
      setValue("#635147");
      break;
    case skinTones.enum.taupe:
      setValue("#483C32");
      break;

    case colors.enum.ruby:
      setValue("#E0115F");
      break;
    case colors.enum.citrine:
      setValue("#E4D00A");
      break;
    case colors.enum.topaz:
      setValue("#ffc87c");
      break;
    case colors.enum.emerald:
      setValue("#50C878");
      break;
    case colors.enum.gold:
      setValue("#D4AF37");
      break;
    case colors.enum.gunmetal:
      // https://colorcodes.io/gray/gunmetal-gray-color-codes/
      setValue("#53565A");
      break;
    case colors.enum.sapphire:
      setValue("#0F52BA");
      break;
    case colors.enum.obsidian:
      // https://encycolorpedia.com/3b363c
      setValue("#3b363c");
      break;
    case colors.enum.turquoise:
      setValue("#40E0D0");
      break;
    case colors.enum.teal:
      setValue("#008080");
      break;
    case colors.enum["ice blue"]:
      setValue("#C8E9E9");
      break;

    default:
      setValue(color);
      break;
  }

  return (
    <div class="chip">
      <div class="color" style={{ backgroundColor: value }}></div>
      <span>{color}</span>
    </div>
  )
}