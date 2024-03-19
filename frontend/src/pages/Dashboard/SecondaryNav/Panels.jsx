import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Panels.module.css";
import AuthService from "../../../services/auth.service";

import Panel from "./Panel";
import { SECONDARY_NAV_ITEMS_ADMIN, SECONDARY_NAV_ITEMS_PROJ, SECONDARY_NAV_ITEMS_DEP  } from "../../../../assets/const_utils";

const authorities = AuthService.getAuthority();

export default function Panels({onPanelSelect}) {
  const [selectedAuthority, setSelectedAuthority] = useState(null);

  const authorities = AuthService.getAuthority();

  const handleAuthorityChange = (e) => {
    const selectedOption = e.value;
    console.log("Selected Authority:", selectedOption);
    setSelectedAuthority(selectedOption);
  };
  const handleNavItemSelection = (title) => {
    onPanelSelect(title);
  };

  return (
    <>
      {authorities.some(str => str.includes("OrganizationAdmin")) ? (
        <div className={styles.panel}>
          <div className={styles.panel_name}>
            <span>Admin Panel</span>
            <FontAwesomeIcon
              icon="fa-solid fa-sort-down"
              className={styles.icon_down}
            />
          </div>
          <ul className={styles.list}>
            {SECONDARY_NAV_ITEMS_ADMIN.map((navItem) => (
              <Panel
                key={navItem.title}
                {...navItem}
                onClick={() => handleNavItemSelection(navItem.title)} // Invoke with the title
              />
            ))}
          </ul>
        </div>
      ) : undefined}
      {authorities.some(str => str.includes("ProjectManager")) ? (
        <div className={styles.panel}>
          <div className={styles.panel_name}>
            <span>Projects Panel</span>
            <FontAwesomeIcon
              icon="fa-solid fa-sort-down"
              className={styles.icon_down}
            />
          </div>
          <ul className={styles.list}>
            {SECONDARY_NAV_ITEMS_PROJ.map((navItem) => (
              <Panel
                key={navItem.title}
                {...navItem}
                onClick={() => handleNavItemSelection(navItem.title)} // Invoke with the title
              />
            ))}
          </ul>
        </div>
      ) : undefined}
      {authorities.some(str => str.includes("DepartmentManager")) ? (
        <div className={styles.panel}>
          <div className={styles.panel_name}>
            <span>Department Panel</span>
            <FontAwesomeIcon
              icon="fa-solid fa-sort-down"
              className={styles.icon_down}
            />
          </div>
          <ul className={styles.list}>
            {SECONDARY_NAV_ITEMS_DEP.map((navItem) => (
              <Panel
                key={navItem.title}
                {...navItem}
                onClick={() => handleNavItemSelection(navItem.title)} // Invoke with the title
              />
            ))}
          </ul>
        </div>
      ) : undefined}
    </>
  );
}