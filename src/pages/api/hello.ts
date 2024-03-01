// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  users: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const response = await (await fetch("https://dummyjson.com/users")).json();
    res.status(200).json({ users: response });
  } catch (error) {

  }
}
