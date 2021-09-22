import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

/**
 * DELETE /api/post/:id
 * @param req
 * @param res
 */
export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const postId = req.query.id
  if (req.method === 'DELETE') {
    const post = await prisma.post.delete({
      where: { id: String(postId) }
    })
    res.json(post)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}
