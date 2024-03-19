import React from "react";
import styles from "./MainNav.module.css";
import LogoImage from "../../../../assets/TF_logo.png";
import OrganizationLogo from "../../../../assets/Organization_Logo.png";
import { MAIN_NAV_ITEMS } from "../../../../assets/const.utils";
import NavItem from "./NavItem";

export default function MainNav({ onNavItemSelect }) {


  const handleNavItemSelection = (selectedItem) => {
    onNavItemSelect(selectedItem);
  };

  return (
    <nav className={styles.navbar}>
        <img
          src={LogoImage}
          alt="Team Finder Logo"
          className={styles.team_finder_logo}
        ></img>

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