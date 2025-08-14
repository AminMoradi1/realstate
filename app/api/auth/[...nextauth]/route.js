import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export const authOptions = {
  session: { strategt: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است❌");
        }

        if (!email || !password)
          throw new Error("لطفا اطلاعات را کامل پرکنید!❌");

        const user = await User.findOne({ email });

        if (!user) throw new Error("!حساب کاربری وجود ندارد❌");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("نام کاربری یا رمزعبور اشتباه است!❌");

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
