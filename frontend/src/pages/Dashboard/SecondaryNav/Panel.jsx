import { useState } from "react";
import styles from "./Panels.module.css";

export default function Panel({ icon, title, description, background_color, detail_colour, onClick }) {
  const [borderColor, setBorderColor ] = useState(undefined);
  const [border, setBorder] = useState(undefined);

  const handleClick = () => {
    onClick(title); // Invoke the onClick handler with the title of the panel item
      setBorderColor(detail_colour) 
      setBorder("solid 2px")
  };

  return (
      <li className={styles.list_item} onClick={handleClick} style={{backgroundColor: background_color, border: border, borderColor: borderColor}}>
        <div className={styles.container_left}>
            <div className={styles.icon} style={{backgroundColor: detail_colour}}>{icon}</div>
        </div>
        <div  className={styles.container_right}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </li>
  );
}