import styles from "./MainNav.module.css"

export default function NavItem({ icon, title }) {
    return (
      <li className={styles.list_item}>
        <span className={styles.icons}>{icon}</span>
        <span>{title}</span>
      </li>
    )
  }