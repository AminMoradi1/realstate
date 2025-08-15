import BuyResidentialPage from "@/components/template/BuyResidentialPage";
import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";

async function BuyResidential({ searchParams }) {
  await connectDB();

  let profiles = await Profile.find({ published: true }).lean();

  if (searchParams.category) {
    profiles = profiles.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialPage data={JSON.parse(JSON.stringify(profiles))} />;
}

export default BuyResidential;
