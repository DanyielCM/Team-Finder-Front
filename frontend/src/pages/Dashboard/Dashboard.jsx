import React, { useState } from "react";
import styles from "./Dashboard.module.css";
import AuthService from "../../services/auth.service.jsx";

import MainNav from "./MainNav/MainNav.jsx";
import SecondaryNav from "./SecondaryNav/SecondaryNav.jsx";
import Banner from "./Banner/Banner.jsx";

export default function Dashboard() {

  const orgId = AuthService.getOrgId();
  const orgName = AuthService.getOrgName();
  
  return (
    <div className={styles.background}>
        <MainNav
          onNavItemSelect={(selectedItem) => setSelectedNavItem(selectedItem)}
        />
        <Banner></Banner>
        <SecondaryNav></SecondaryNav>
    </div>
  );
}
