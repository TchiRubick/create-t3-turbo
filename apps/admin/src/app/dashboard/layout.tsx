import "~/app/globals.css";

import { SidebarComponent } from "../_components/sidebar/sidebar-component";

export default function DashboardLayout(props: { children: React.ReactNode }) {
  return <SidebarComponent>{props.children}</SidebarComponent>;
}
