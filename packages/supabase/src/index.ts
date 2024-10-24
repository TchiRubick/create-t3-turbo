import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createBrowserClient, createServerClient } from "@supabase/ssr";

export const name = "supabase";

export const supabase = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};

export const supabaseClient = () =>
  createBrowserClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export const pageGuard = async () => {
  const { data } = await supabase(cookies()).auth.getSession();

  if (!data.session) {
    redirect("/");
  }

  return data.session;
};
