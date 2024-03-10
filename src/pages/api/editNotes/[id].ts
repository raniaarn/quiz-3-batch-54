import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any
  message: string
  success: boolean
};

export default async function editNotes(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { id } = req.query
  try {
    const response = await fetch(
      `https://paace-f178cafcae7b.nevacloud.io/api/notes/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: req.body,
      })
    const result = await response.json();
    res.status(200).json({
      data: result.data,
      message: result.message,
      success: result.success
    })
  } catch (error) { }
}
