import { db } from "@/db/connection.js";
import { schema } from "@/db/schemas/index.js";
import { generateEmbeddings, transcribeAudio } from "@/services/gemini.js";
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/audio",
    {
      schema: {
        params: z.object({
          roomId: z.string().min(1),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const audio = await request.file();

      if (!audio) {
        throw new Error("Audio is required.");
      }

      const audioBuffer = await audio.toBuffer();
      const audioBase64 = audioBuffer.toString("base64");

      const transcription = await transcribeAudio(audioBase64, audio.mimetype);
      const embeddings = await generateEmbeddings(transcription);

      const result = await db
        .insert(schema.audioChunks)
        .values({
          roomId,
          transcription,
          embeddings,
        })
        .returning();

      const chunk = result[0];

      if (!chunk) {
        throw new Error("Error to save audio chunk.");
      }

      return reply.status(201).send({ chunkId: chunk.id });
    }
  );
};
