import { app } from "./app.js";

const port = Number(process.env.PORT) || 3333;

app.listen({ port }).then(() => {
  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.log("HTTP server running...");
});
