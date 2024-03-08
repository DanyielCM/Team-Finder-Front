import styles from "./Banner.module.css";
import DateTime from "../../../components/common/DateTime";
import AuthService from "../../../services/auth.service";

export default function Banner() {


  const currentUser = AuthService.getCurrentUser();


  return (
    <>
      <div className={styles.dashboard}>Dashboard</div>
      <div className={styles.date}>
        <DateTime></DateTime>
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
          src="../../../../assets/Avatar-Male.png"
          alt="User avatar"
          className={styles.avatar}
        ></img>
      </div>
    </>
  );
}