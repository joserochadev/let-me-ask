import { app } from "./app.js";
import { env } from "./env/index.js";

app.listen({ port: env.PORT }).then(() => {
  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.log("HTTP server running...");
});
