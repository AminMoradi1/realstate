
import styles from "@/template/DashboardPage.module.css";

async function DashboardPage({ createdAt }) {
  const joinDate = new Date(createdAt);

  return (
    <div className={styles.container}>
      <h3>سلام 👋</h3>
      <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را ببینند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{joinDate.toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
