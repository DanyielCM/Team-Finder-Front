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
      <div>
        <div className={styles.dropdown}>
          <Dropdown
          
            value={selectedAuthority}
            onChange={handleAuthorityChange}
            options={authorities}
            optionLabel="" // Adjust this if the property name is different
            placeholder="Select an Authority"
            className="w-full md:w-14rem"
          />
        </div>
      </div>
      {selectedAuthority==="OrganizationAdmin" && (
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
      {selectedAuthority === "ProjectManager" && (
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
      {selectedAuthority == "DepartmentManager" && (
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
               
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
