import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './Layout.module.css';
import jwfLogo from '../assets/jwflogo.png';

function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoFluid}>Fluid</span>
          <span className={styles.logoSpec}>Spec</span>
          <span className={styles.logoBadge}>beta</span>
        </div>
        <nav className={styles.headerNav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink} end>
            Selector
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}>
            About
          </NavLink>
        </nav>
        <img src={jwfLogo} alt="JWF logo" className={styles.headerCenterLogo} />
        <div className={styles.headerRight}>
          <span className={styles.headerCompanyLong}>Copyright 2026 GENEVIEVE Technology. All rights reserved.</span>
          <span className={styles.headerCompanyShort}>(c) GENEVIEVE</span>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
