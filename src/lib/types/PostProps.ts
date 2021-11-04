export type PostProps = {
  id: string
  title?: string
  author?: {
    name: string
    email: string
  } | null
  content?: string
  published?: string
}
