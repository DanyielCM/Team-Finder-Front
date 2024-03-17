import styles from "./Banner.module.css";
import Avatar from "../../../../assets/avatar_male.png"
import DateTime from "../../../components/common/DateTime";

import AuthService from "../../../services/auth.service";

export default function Banner() {
  const currentUser = AuthService.getCurrentUser();
  const orgId = AuthService.getOrgId();
  const orgName = AuthService.getOrgName();
  const authorities = AuthService.getAuthority();

  const isAdmin =authorities.includes("OrganizationAdmin");
  

  return (
    <>
      {" "}
      <div className={styles.date_container}>
        <div className={styles.dashboard}>
          {" "}
          {isAdmin && (
            <a href={"/register-user?id=" + orgId + "&organisation=" + orgName} target="_blank">
              Get Employee URL
            </a>
          )}
        </div>
        <div className={styles.date}>
          <DateTime></DateTime>
        </div>
      </div>
      <div className={styles.banner}>
        <div>
          <h1 className={styles.title}>Welcome back {currentUser}</h1>

          <p className={styles.motivational_quote_title}>
            Today's motivational quote:
          </p>
          <p className={styles.motivational_quote}></p>
        </div>

        <img
          src={Avatar}
          alt="User avatar"
          className={styles.avatar}
        ></img>
      </div>
    </>
  );
}
