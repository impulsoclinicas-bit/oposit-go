import { auth } from "@/auth";
import { HeaderNav } from "@/components/HeaderNav";

export async function Header() {
  const session = await auth();
  return <HeaderNav email={session?.user?.email ?? null} />;
}
