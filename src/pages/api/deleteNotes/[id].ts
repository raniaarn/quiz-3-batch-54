// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any
  message: string
  success: boolean
};

export default async function deleteNotes(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id } = req.query

  try {
    const response = await fetch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/delete/${id}`,
      {
        method: "DELETE",
      })
    const result = await response.json();
    res.status(200).json({
      data: result.data,
      message: result.message,
      success: result.success
    });
  } catch (error) { }
}
