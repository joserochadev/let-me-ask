import { reset, seed } from "drizzle-seed";
import { db, sql } from "./connection.js";
import { schema } from "./schemas/index.js";

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
    questions: {
      count: 10,
    },
  };
});

await sql.end();

// biome-ignore lint/suspicious/noConsole: only use in dev
console.log("Database seeded.");
