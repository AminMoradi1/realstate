import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import LogoutButton from "../module/LogoutButton";

import styles from "@/layout/DashboardSideBar.module.css";

async function DashboardSideBar({ children, email, role }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        <p>{role === "ADMIN" ? "ادمین" : null}</p>
        <p>{email}</p>
        <span></span>
        <Link href={"/dashboard"}>حساب کاربری</Link>
        <Link href={"/dashboard/my-profiles"}>آگهی های من</Link>
        <Link href={"/dashboard/add"}>ثبت آگهی</Link>
        {role === "ADMIN" ? <Link href={"/admin"}>در انتظار تایید</Link> : null}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSideBar;
