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
