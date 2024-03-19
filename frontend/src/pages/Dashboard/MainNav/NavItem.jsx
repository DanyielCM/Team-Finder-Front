import styles from "./MainNav.module.css";
import { useState } from "react";
import "../../../index.css"

export default function NavItem({ icon, title }) {

  return (
    <li className={styles.list_item}>
      <div className={styles.container}>
        <div className={styles.icons}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </li>
  );
}
