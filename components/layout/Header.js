"use client";

import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import styles from "@/layout/Header.module.css";
import Link from "next/link";
import { useSession } from "next-auth/react";
function Header() {
  const { status } = useSession();

  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href={"/"}>صفحه اصلی</Link>
          </li>
          <li>
            <Link href={"/buy-residential"}>آگهی ها</Link>
          </li>
        </ul>
      </div>
      {status !== "authenticated" ? (
        <div className={styles.login}>
          <Link href={"/signin"}>
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      ) : (
        <Link href={"/dashboard"}>
          <FaUserAlt />
        </Link>
      )}
    </header>
  );
}

export default Header;
