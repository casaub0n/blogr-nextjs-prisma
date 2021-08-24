import prisma from '../../../lib/prisma'
import { getSession } from "next-auth/client"
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * POST /api/post
 *
 * Required fields in body: title
 *
 * Optional fields in body: content
 * @param req request
 * @param res response
 */
export default async function handle(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { title, content} = req.body
  const session = await getSession({ req })
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: session?.user?.email != null ? session?.user?.email : undefined } },
    },
  })
  res.json(result)
}
