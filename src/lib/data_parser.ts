import { z } from "astro/zod";
import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser({ ignoreAttributes: false });

const InfoSchema = z.object({
  docNumber: z.string().nonempty(),
  docTitle: z.string().nonempty(),
});

export function parseStatute(data: string) {
  const json = parser.parse(data);
  const info = InfoSchema.safeParse(json?.akomaNtoso?.act?.preface?.p);
  if (!info.success) {
    return null;
  }
  return info.data;
}
