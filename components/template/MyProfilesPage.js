import styles from "@/template/MyProfilesPage.module.css";
import DashboardCard from "../module/DashboardCard";

async function MyProfilesPage({ profiles }) {
  console.log(profiles);

  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}
      {profiles.map((i) => (
        <DashboardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
