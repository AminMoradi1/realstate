import BuyResidentialPage from "@/components/template/BuyResidentialPage";
import React from "react";

async function BuyResidential({ searchParams }) {
  const res = await fetch(
    "https://realstate-2antlw0br-amin-moradis-projects.vercel.app/api/profile",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;
  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialPage data={finalData} />;
}

export default BuyResidential;
