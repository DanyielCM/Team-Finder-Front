import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Panels.module.css";
import AuthService from "../../../services/auth.service";

import Panel from "./Panel";
import { SECONDARY_NAV_ITEMS_ADMIN } from "../../../../assets/const.utils";
import { SECONDARY_NAV_ITEMS_PROJ } from "../../../../assets/const.utils";
import { SECONDARY_NAV_ITEMS_DEP } from "../../../../assets/const.utils";
import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";   

export default function Panels() {
  const authorities = AuthService.getAuthority();

  return (
    <>
      {authorities==="OrganizationAdmin" && (
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
                onClick={() => handleNavItemSelection(navItem.title)}
              />
            ))}
          </ul>
        </div>
      )}
      {authorities === "ProjectManager" && (
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
             
              />
            ))}
          </ul>
        </div>
      )}
      {authorities == "DepartmentManager" && (
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
                onClick={() => handleNavItemSelection(navItem.title)}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
