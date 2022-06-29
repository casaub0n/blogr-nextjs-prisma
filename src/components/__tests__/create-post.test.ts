import prisma from "../../lib/prisma"
import { createPost } from "../../services/posts"
import { prismaMock } from "./mock/singleton"

// beforeEach(async () => {
//   // user object
//   const user = {
//     id: '1',
//     email: 'example@example.com'
//   }
//   prismaMock.user.create.mockRejectedValue(user)
// })

test('should create post', async () => {
  // post object
  const post = {
    id: '1',
    title: 'new test title',
    content: 'new test content',
    published: false,
    authorId: 'ckwy207ga000609jso3rdcls3'
  }

  prismaMock.post.create.mockResolvedValue(post)

  // ? https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-nextjs-api-routes-auth/prisma/seed.ts
  // const createAcount = prisma.account.create({
  //   data: {}
  // })

  await expect(createPost('new test title', 'new test content', 'netzach.yoshida@gmail.com')).resolves.toEqual({
    // id: '1',
    title: 'new test title',
    content: 'new test content',
    published: false,
    // authorId: 'ckwy207ga000609jso3rdcls3'
  })
})
