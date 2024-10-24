"use server";

import { cookies } from "next/headers";

import { supabase } from "..";

export const logout = async () => {
  const supa = supabase(cookies());

  const { error } = await supa.auth.signOut();

  if (error) {
    throw new Error("Failed to sign out");
  }

  return true;
};
