import pino from 'pino'
// import { logflarePinoVercel } from 'pino-logflare'
// https://github.com/Logflare/pino-logflare/blob/master/docs/VERCEL.md
// https://github.com/pinojs/pino-nextjs-example
// https://github.com/Logflare/next-pino-logflare-logging-example

export const logger = pino({
  name: 'app-name',
  level: 'debug'
})
