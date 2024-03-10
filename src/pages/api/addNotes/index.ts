// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any
  message: string
  success: boolean
};

export default async function addNotes(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const response = await fetch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: req.body,
      }
    );

    const result = await response.json();
    res.status(200).json({
      data: result.data,
      message: result.message,
      success: result.success
    });
  } catch (error) { }
}
