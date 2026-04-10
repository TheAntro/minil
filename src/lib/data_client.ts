import { LAW_DATA_URL } from "astro:env/server";
import { parseStatute } from "./data_parser";

export async function getDocument({
  year,
  number,
}: {
  year: number;
  number: number;
}) {
  try {
    const res = await fetch(
      `${LAW_DATA_URL}/akn/fi/act/statute/${year}/${number}/fin%40`,
      { headers: { "User-Agent": "minil" } },
    );
    const data = await res.text();
    const parsed = parseStatute(data);
    return parsed;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
    return null;
  }
}
