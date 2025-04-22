import "./Icon.css";

type Props = {
  category: "class" | "element";
  item: string;
}

export default function Icon({ category, item }: Props) {
  return (
    <img class="icon" src={`/icons/${category}/${item}.png`} alt={item + " " + category} />
  )
}