import { pageGuard } from "@acme/supabase";

const DashboardPage = async () => {
  await pageGuard();

  return <div></div>;
};

export default DashboardPage;
