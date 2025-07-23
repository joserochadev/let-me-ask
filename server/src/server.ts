import { app } from './app.ts'
import { env } from './env/index.ts'

app.listen({ port: env.PORT }).then(() => {
  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.log('HTTP server running...')
})
