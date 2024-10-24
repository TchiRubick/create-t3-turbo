"use server";

import { cookies } from "next/headers";

import { supabase } from "..";

export const login = async (email: string, password: string) => {
  const supa = supabase(cookies());

  const { data } = await supa.auth.signInWithPassword({
    email,
    password,
  });

  return data;
};
