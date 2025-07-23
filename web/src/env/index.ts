import { z } from "zod";

const envSchema = z.object({
  VITE_BACKEND_URL: z.url(),
});

const _env = envSchema.safeParse(import.meta.env);

if (_env.success === false) {
  throw new Error("❌ Invalid enviroment variables.");
}

export const env = _env.data;
