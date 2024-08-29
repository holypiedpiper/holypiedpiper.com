import { HppNextAuthenticator } from "app/ui/auth/HppNextAuthenticator";
import { AdminHome } from "src/layout/AdminHome";

export const metadata = {
  title: "hpp Admin Home",
};

export default function NextAdminHome() {
  return (
    <HppNextAuthenticator>
      <AdminHome />
    </HppNextAuthenticator>
  );
}
