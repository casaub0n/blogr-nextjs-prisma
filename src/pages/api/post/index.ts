import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { createPost } from '../../../services/posts'

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
  const email = session?.user?.email
  if (email !== null) res.json(await createPost(title, content, email))
  console.error('session error')
}
