/**
 * @jest-environment jsdom
 */
import { server } from '../../mocks/server'

// TODO: consider which do I have to test. Probably header is the easiest and more useful.
describe('FeedList.tsx', () => {
   // Establish API mocking before all tests.
  beforeAll(() => server.listen())
  // Reset any request handlers that we may add during the tests,
  // so they don't affect other tests.
  afterEach(() => server.resetHandlers())
  // Clean up after the tests are finished.
  afterAll(() => server.close())
})
