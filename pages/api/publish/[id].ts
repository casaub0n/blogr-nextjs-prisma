import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // TODO:find better way
  const postId = typeof req.query.id === 'string' ? req.query.id : undefined
  const post = await prisma.post.update({
    where: { id: postId },
    data: { published: true }
  })
  res.json(post)
}
