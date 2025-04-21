import "./ColorChip.css";

type Props = {
  color: string;
}

export default function ColorChip({ color }: Props) {
  console.log(`this shouldn't change: ${color}`);
  return (
    <div class="chip">
      <div class="color" style={{ backgroundColor: color }}></div>
      <span>{color}</span>
    </div>
  )
}