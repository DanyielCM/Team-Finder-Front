import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SecondaryNav.module.css";
import ProfileImage from "../../../../assets/user_profile_image.png";
import User from "./User";
import Panels from "./Panels";

import AuthService from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function SecondaryNav({ onSelectedItem}) {
  const navigateTo = useNavigate();
  const currentUser = AuthService.getCurrentUser();
  const authorities = AuthService.getAuthority();

  function getAuthorities(array) {
    return array.map((obj) => obj.authority);
  }

  const handleLogout = () => {
    AuthService.logout();
    navigateTo("/sign-in");
  };

  
  const handlePanelSelect = (title) => {
    onSelectedItem(title);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.icons_container}>
        <FontAwesomeIcon icon="fa-solid fa-bell" className={styles.icon_left} />
        <div>
          <FontAwesomeIcon
            onClick={() => handleLogout()}
            icon="fa-solid fa-arrow-right-from-bracket"
            className={styles.icon_right}
          />
          <FontAwesomeIcon
            icon="fa-solid fa-gear"
            className={styles.icon_right}
          />
        </div>
      </div>
      <User imageSrc={ProfileImage} name={currentUser} roles={authorities} />
      <Panels onPanelSelect={handlePanelSelect}></Panels>
    </div>
  );
}
