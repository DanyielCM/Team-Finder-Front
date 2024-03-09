import styles from "./MainNav.module.css"
import LogoImage from "../../../../assets/TFName-Logo.png";
import OrganizationLogo from "../../../../assets/Organization_Logo.png";
import { NAV_ITEMS } from "../../../../assets/const.utils"
import NavItem from "./NavItem";


export default function MainNav() {
  return (
    <nav className={styles.navbar}>

    <a href="/"><img src={LogoImage} alt="Team Finder Logo" className={styles.team_finder_logo}></img></a>

      <ul className={styles.list}>
        {NAV_ITEMS.map((navItem) => (
          <NavItem key={navItem.title} {...navItem} />
        ))}
      </ul>
      <img src={OrganizationLogo} alt="Organization Logo" className={styles.org_logo}></img>
    </nav>
  );

}

