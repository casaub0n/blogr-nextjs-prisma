import { MockedRequest, ResponseResolver, restContext } from 'msw'

// https://zenn.dev/azukiazusa/articles/using-msw-to-mock-frontend-tests
// TODO: get article. follow on PostProps

type PostProps = {
  id: string
  title?: string
  author?: {
    name: string
    email: string
  } | null
  content?: string
  published?: string // Yabai
}

const get: ResponseResolver<MockedRequest, typeof restContext> = ( _req, res, ctx ) => {
  return res(
    ctx.status(200),
    ctx.json<[PostProps]>([
      {
        id: '1',
        title: 'New article',
        author: {
          name: 'Jimmy',
          email: 'jimmy@example.com'
        },
        content: 'This is new an article.',
        published: 'false'
      }
    ])
  )
}

export { get }
