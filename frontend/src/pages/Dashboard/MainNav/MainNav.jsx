import React from "react";
import styles from "./MainNav.module.css";
import LogoImage from "../../../../assets/TFName-Logo.png";
import OrganizationLogo from "../../../../assets/Organization_Logo.png";
import { MAIN_NAV_ITEMS } from "../../../../assets/const.utils";
import NavItem from "./NavItem";

export default function MainNav({ onNavItemSelect }) {


  const handleNavItemSelection = (selectedItem) => {
    onNavItemSelect(selectedItem);
  };

  return (
    <nav className={styles.navbar}>
      <a href="/">
        <img
          src={LogoImage}
          alt="Team Finder Logo"
          className={styles.team_finder_logo}
        ></img>
      </a>

      <ul className={styles.list}>
        {MAIN_NAV_ITEMS.map((navItem) => (
          <NavItem
            key={navItem.title}
            {...navItem}
            onClick={() => handleNavItemSelection(navItem.title)}
          />
        ))}
      </ul>
      <img
        src={OrganizationLogo}
        alt="Organization Logo"
        className={styles.org_logo}
      ></img>
    </nav>
  );
}