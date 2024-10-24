"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { supabase } from "@acme/supabase";

export const signin = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supa = supabase(cookies());

  const { data } = await supa.auth.signInWithPassword({
    email,
    password,
  });

  if (!data.user) {
    throw new Error("Invalid credentials");
  }
  console.log("ok");

  redirect("/dashboard");
};
