import type { Personality } from "@/types";

type Props = {
  data: Personality;
}

export default function PersonalityTable({ data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Positive</th>
          <th scope="col">Neutral</th>
          <th scope="col">Negative</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.positive[0]}</td>
          <td>{data.neutral[0]}</td>
          <td>{data.negative[0]}</td>
        </tr>
        <tr>
          <td>{data.positive[1]}</td>
          <td>{data.neutral[1]}</td>
          <td>{data.negative[1]}</td>
        </tr>
        <tr>
          <td>{data.positive[2]}</td>
          <td>{data.neutral[2]}</td>
          <td>{data.negative[2]}</td>
        </tr>
      </tbody>
    </table>
  );
}