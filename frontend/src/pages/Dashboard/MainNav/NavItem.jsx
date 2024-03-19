import styles from "./MainNav.module.css";
import { useState } from "react";
import "../../../index.css"

export default function NavItem({ icon, title, onClick }) {
  const handleClick = () => {
    onClick(title); // Invoke the onClick handler with the title of the panel item
  };
  return (
    <li className={styles.list_item} onClick={handleClick}>
      <div className={styles.container}>
        <div className={styles.icons}>{icon}</div>
        <div className={styles.title}>{title}</div>
      </div>
    </li>
  );
}
