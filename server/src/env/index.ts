import z from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  FRONTEND_URL: z.string().url(),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
  GEMINI_API_KEY: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  throw new Error('❌ Invalid enviroment variables.')
}

export const env = _env.data
