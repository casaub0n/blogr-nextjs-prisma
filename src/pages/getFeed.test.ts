import prisma from '../lib/prisma'
// import { ContainerProps } from '../components/Post'
// import { getFeed } from './index'

beforeAll(async () => {
  await prisma.post.createMany({
    data: [{
      title: 'hoge',
      content: 'content',
      authorId: '1124',
    }]
  })
  // TODO: make author
  // TODO: make 1 more data

  // eslint-disable-next-line no-console
  console.log('✨ 2 posts successfully created!')
})

afterAll(async () => {
  const deletePosts = prisma.post.deleteMany()

  await prisma.$transaction([
    deletePosts
  ])

  await prisma.$disconnect()
})


// it('should create 1 new post with 1 author', async () => {
//   const post: ContainerProps = {
//     id: 2,
//     title: 'hoge',
//   }

//   // create POst
//   await getFeed()
// })

