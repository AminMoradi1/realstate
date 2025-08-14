import MyProfilesPage from "@/components/template/MyProfilesPage";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "@/models/User";
import { getServerSession } from "next-auth";


async function MyProfiles() {
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },

    {
      $lookup: {
        from: "profiles",
        localField: "_id",
        foreignField: "userId",
        as: "profiles",
        pipeline: [{ $sort: { createdAt: -1 } }],
      },
    },
  ]);

  return <MyProfilesPage profiles={user.profiles} />;
}

export default MyProfiles;
