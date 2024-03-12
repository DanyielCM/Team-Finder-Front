import styles from "./Panels.module.css";

export default function Panel({ icon, title, description }) {
  return (
      <li className={styles.list_item}>
        <div className={styles.container_left}>
            <div className={styles.icon}>{icon}</div>
        </div>
        <div  className={styles.container_right}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </li>
  );
}
