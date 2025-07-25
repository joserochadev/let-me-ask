import { db } from "@/db/connection.js";
import { schema } from "@/db/schemas/index.js";
import { count, eq } from "drizzle-orm";
import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const getRoomRoute: FastifyPluginCallbackZod = (app) => {
  app.get("/rooms", async () => {
    const result = await db
      .select({
        id: schema.rooms.id,
        name: schema.rooms.name,
        createdAt: schema.rooms.createdAt,
        questionsCount: count(schema.questions.id),
      })
      .from(schema.rooms)
      .leftJoin(schema.questions, eq(schema.questions.roomId, schema.rooms.id))
      .groupBy(schema.rooms.id)
      .orderBy(schema.rooms.createdAt);

    return result;
  });
};
