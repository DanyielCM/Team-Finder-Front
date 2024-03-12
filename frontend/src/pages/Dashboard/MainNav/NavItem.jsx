import styles from "./MainNav.module.css";
import { useState } from "react";
import "../../../index.css"

export default function NavItem({ icon, title }) {
  let cssClass= 'unselected';
  function handleClick(title) {
    cssClass= 'selected'
    console.log(title)
  }

  return (
    <li className={styles.list_item}>
      <button  onClick={() => (handleClick(title))}>
        <span className={styles.icons}>{icon}</span>
        <span className={cssClass}>{title}</span>
      </button>
    </li>
  );
}
