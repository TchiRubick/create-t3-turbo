import type { InferSelectModel } from "drizzle-orm";

import type { User } from "../schema";

export type UserSelect = InferSelectModel<typeof User>;
