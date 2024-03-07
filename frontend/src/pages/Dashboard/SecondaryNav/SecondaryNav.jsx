import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SecondaryNav.module.css";
import User from "./User";

export default function SecondaryNav() {
  return (
    <div className={styles.navbar}>
      <div className={styles.icons}>
        <FontAwesomeIcon icon="fa-solid fa-bell" className={styles.icon_left} />
        <FontAwesomeIcon icon="fa-solid fa-gear" className={styles.icon_right}/>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className={styles.icon_right}/>
      </div>
      <User imageSrc="../../../../assets/Profile.png" name="Jackson Cullen fdfdsfdsfds" role="Organization Admin"/>
    </div>
  );
}
