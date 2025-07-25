import z from "zod";

const envSchema = z.object({
  FRONTEND_URL: z.string().url(),
  DATABASE_URL: z.string().url().startsWith("postgresql://"),
  GEMINI_API_KEY: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  throw new Error("❌ Invalid enviroment variables.");
}

export const env = _env.data;
