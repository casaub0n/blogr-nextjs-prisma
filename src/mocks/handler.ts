import { rest } from 'msw'

import { get as getArticle } from '../mocks/api/getArticle'

export const handlers = [rest.get('/api/p', getArticle)]
