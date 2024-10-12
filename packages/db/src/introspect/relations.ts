import { relations } from "drizzle-orm/relations";

import { Account, Session, User } from "./schema";

export const AccountRelations = relations(Account, ({ one }) => ({
  user: one(User, { fields: [Account.userId], references: [User.id] }),
}));

export const SessionRelations = relations(Session, ({ one }) => ({
  user: one(User, { fields: [Session.userId], references: [User.id] }),
}));

export const UserRelations = relations(User, ({ many }) => ({
  accounts: many(Account),
}));
