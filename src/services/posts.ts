import prisma from '../lib/prisma'

export const getPublishedPost = async (): Promise<object> => {
  const feed = await prisma.post.findMany({
    where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
  })
  return { feed }
}

export const createPost = async (title: string, content: string, email?: string): Promise<object> => {
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: email } },
    },
  })
  return result
}
