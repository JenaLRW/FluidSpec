import React from 'react';
import styles from './AboutPage.module.css';

function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>About FluidSpec</h1>
        <p className={styles.body}>
          FluidSpec is an internal fluid power component selection tool built for
          JWF Technologies. Use it to quickly find directional control valves across
          all manufacturer lines we distribute, filtered by your application requirements.
        </p>

        <h2 className={styles.section}>Manufacturers</h2>
        <ul className={styles.list}>
          <li>Danfoss Power Solutions</li>
          <li>Bucher Hydraulics <span className={styles.tag}>partial</span></li>
          <li>Sun Hydraulics <span className={styles.tag}>coming soon</span></li>
          <li>HAWE Hydraulik <span className={styles.tag}>coming soon</span></li>
          <li>Argo-Hytos <span className={styles.tag}>coming soon</span></li>
          <li>Deltrol Fluid Products <span className={styles.tag}>coming soon</span></li>
          <li>NACHI America <span className={styles.tag}>coming soon</span></li>
        </ul>

        <h2 className={styles.section}>Roadmap</h2>
        <ul className={styles.list}>
          <li>Pricing integration from distributor accounts</li>
          <li>Lead time data</li>
          <li>Cross-reference / equivalent part finder</li>
          <li>PDF datasheet links</li>
          <li>Saved searches</li>
        </ul>

        <p className={styles.version}>v0.1.0 — internal beta</p>
      </div>
    </div>
  );
}

export default AboutPage;
