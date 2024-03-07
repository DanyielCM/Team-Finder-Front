import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SecondaryNav.module.css";
import User from "./User";

export default function SecondaryNav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.icons}>
        <FontAwesomeIcon icon="fa-solid fa-bell" className={styles.icon} />
        <FontAwesomeIcon icon="fa-solid fa-gear" />
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" />
      </div>
      <User imageSrc="../../../../assets/Profile.png" name="Jackson Cullen fdfdsfdsfds" role="Organization Admin"/>
    </div>
  );
}
