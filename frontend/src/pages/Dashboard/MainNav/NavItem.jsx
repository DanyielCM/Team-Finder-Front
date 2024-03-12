import styles from "./MainNav.module.css";
import { useState } from "react";
import "../../../index.css"

export default function NavItem({ icon, title }) {

  return (
    <li className={styles.list_item}>
      <div>
        <span className={styles.icons}>{icon}</span>
        <span>{title}</span>
      </div>
    </li>
  );
}
