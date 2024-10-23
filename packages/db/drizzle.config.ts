import type { Config } from "drizzle-kit";

if (!process.env.POSTGRES_URL) {
  throw new Error("Missing POSTGRES_URL");
}

const nonPoolingUrl =
  process.env?.MODE && process.env.MODE === "pull"
    ? process.env.POSTGRES_URL.replace(":6543", ":5432")
    : process.env.POSTGRES_URL;

export default {
  schema: "./src/introspect/schema.ts",
  out: "./src/introspect/",
  dialect: "postgresql",
  dbCredentials: { url: nonPoolingUrl },
  casing: "snake_case",
  strict: true,
} satisfies Config;
