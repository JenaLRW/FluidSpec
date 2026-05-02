import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styles from './Layout.module.css';

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
        <div className={styles.headerRight}>
          <span className={styles.headerCompany}>JWF Technologies</span>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
