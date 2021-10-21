import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

// TODO: define in env
const { stream, send } = logflarePinoVercel({
  apiKey: "",
  sourceToken: ""
})

const logger = pino({
  browser: {
    transmit: {
      level: "info",
      send: send,
    }
  },
  level: "debug",
  base: {
    env: process.env.NODE_ENV,
    revision: process.env.VERCEL_GITHUB_COMMIT_SHA,
  },
}, stream)

export default logger
