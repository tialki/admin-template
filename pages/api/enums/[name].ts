// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { localEnums } from "../../../config/enums";
import { EnumName } from "../../../types/enums";

type Data = Record<string, string>;

const mockEnums: Record<EnumName, Record<string, string>> = {
  Test1: { GOOD: "Good", BAD: "Bad" },
  Test2: { YES: "Yes", NO: "No" },
  ...localEnums,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query;
  res.status(200).json(mockEnums[name as EnumName]); // you can also fetch from backend
}
