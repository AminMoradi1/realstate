import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import SignUpPage from "@/components/template/SignUpPage";

async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/ ");
  return <SignUpPage />;
}

export default SignUp;
