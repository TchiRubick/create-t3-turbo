"use client";

import { useState } from "react";

import { SidebarProvider, SidebarTrigger } from "@acme/ui/sidebar";

import { AppSidebar } from "./app-sidebar";

export const SidebarComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};
