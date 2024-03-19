import styles from "./SecondaryNav.module.css"

export default function User({ imageSrc, name, roles }) {

    if (roles.some(str => str.includes("OrganizationAdmin" || "ProjectManager" || "DepartmentManager"))) {
        roles = roles.filter(e => e !== 'Employee');
    }
  return (
    <div className={styles.user_info}>
      <img
        src={imageSrc}
        alt="User account profile image"
        className={styles.user_image}
      />
      <h4 className={styles.user_name}>{name}</h4>
      <div className={styles.user_roles}>
        {roles.map((role) => (
          <div key={role}>{role}</div>
        ))}
      </div>
    </div>
  );
}
