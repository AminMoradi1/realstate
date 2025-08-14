import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignInPage from "@/components/template/SignInPage";


async function SigIn() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/ ");

  return <SignInPage />;
}

export default SigIn;
