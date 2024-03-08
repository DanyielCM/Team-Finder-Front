import styles from "./SecondaryNav.module.css"


export default function User({ imageSrc, name, role}) {
    return(
        <div className={styles.user_info}>
            <img src={imageSrc} alt="User account profile image" className={styles.user_image}/>
            <h4 className={styles.user_name}>{name}</h4>
            <p className={styles.user_role}>{role}</p>
        </div>
    )
}