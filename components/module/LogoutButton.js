"use client";

import styles from "./LogoutButton.module.css";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
function LogoutButton() {
  const signOutHandler = () => {
    signOut();
  };
  return (
    <button className={styles.LogoutButton} onClick={signOutHandler}>
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
