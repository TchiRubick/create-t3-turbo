import { redirect } from "next/navigation";

import { logout } from "@acme/supabase/actions";

export const signout = async () => {
  await logout();
  redirect("/");
};
