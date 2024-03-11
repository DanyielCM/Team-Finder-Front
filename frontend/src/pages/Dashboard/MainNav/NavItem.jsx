import React from "react";
import styles from "./MainNav.module.css";

export default function NavItem({ icon, title, onClick }) {
  return (
    <li className={styles.list_item} onClick={onClick}>
      <span className={styles.icons}>{icon}</span>
      <span>{title}</span>
    </li>
  );
}
