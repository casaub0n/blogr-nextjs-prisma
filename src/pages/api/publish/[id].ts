import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../lib/prisma";

/**
 * PUT /api/publish/:id
 * @param req request
 * @param res response
 */
export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // TODO:find better way
  // const postId = typeof req.query.id === 'string' ? req.query.id : undefined
  const postId = req.query.id
  if (typeof postId === 'string') {
    const post = await prisma.post.update({
      where: { id: postId },
      data: { published: true }
    })
    res.json(post)
  }
  res.json(undefined)
}
