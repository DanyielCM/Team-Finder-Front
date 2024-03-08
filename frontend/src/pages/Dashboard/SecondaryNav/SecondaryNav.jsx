import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SecondaryNav.module.css";
import User from "./User";

import AuthService from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function SecondaryNav() {

  const navigateTo = useNavigate();
  const currentUser = AuthService.getCurrentUser();
  const authorities = AuthService.getAuthority();

  function getAuthorities(array) {
    return array.map(obj => obj.authority);
}


  const handleLogout = () => {
    AuthService.logout();
    navigateTo('/sign-in'); 
  };



  return (
    <div className={styles.navbar}>
      <div className={styles.icons}>
        <FontAwesomeIcon icon="fa-solid fa-bell" className={styles.icon_left} />
        
        <FontAwesomeIcon icon="fa-solid fa-gear" className={styles.icon_right}/>
        <button onClick={() => handleLogout()} style={{color: "red"}} ><FontAwesomeIcon icon="fa-solid fa-arrow-right-from-bracket" className={styles.icon_right}/></button>
        
      </div>
      <User imageSrc="../../../../assets/Profile.png" name={currentUser} role={JSON.parse(authorities)}/>
    </div>
  );
}