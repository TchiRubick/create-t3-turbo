"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import { supabase } from "@acme/supabase";

const zEmail = z.string().email();
const zPassword = z.string();

export const signin = async (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const { error: errorEmail, data: emailData } = zEmail.safeParse(email);
  const { error: errorPassword, data: passwordData } =
    zPassword.safeParse(password);

  if (errorEmail) {
    throw new Error("Email is invalid");
  }

  if (errorPassword) {
    throw new Error("Password is invalid");
  }

  const supa = supabase(cookies());

  const { data } = await supa.auth.signInWithPassword({
    email: emailData,
    password: passwordData,
  });

  if (!data.user) {
    throw new Error("Invalid credentials");
  }

  redirect("/dashboard");
};
