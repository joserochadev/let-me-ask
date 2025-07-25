import { fastifyCors } from "@fastify/cors";
import { fastifyMultipart } from "@fastify/multipart";
import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env/index.js";
import { getRoomRoute } from "./http/routes/get-rooms.js";
import { createRoomRoute } from "./http/routes/create-room.js";
import { getRoomQuestionsRoute } from "./http/routes/get-room-questions.js";
import { createQuestionRoute } from "./http/routes/create-question.js";
import { uploadAudioRoute } from "./http/routes/upload-audio.js";

export const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: env.FRONTEND_URL,
});

app.register(fastifyMultipart);

// Routes
app.get("/health", () => {
  return "OK";
});
app.register(getRoomRoute);
app.register(createRoomRoute);
app.register(getRoomQuestionsRoute);
app.register(createQuestionRoute);
app.register(uploadAudioRoute);

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
