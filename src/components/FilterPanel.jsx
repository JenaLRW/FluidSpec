import React, { useState } from 'react';
import styles from './FilterPanel.module.css';

const ACTUATION_OPTIONS = [
  'Manual Rotary',
  'Manual Lever',
  'Manual Push',
  'Manual Pull',
  'Hydraulic Pilot',
];

const PSI_OPTIONS = [3000, 3300, 4000, 4600, 5000, 6500];

const CAVITY_OPTIONS = [
  'SDC08', 'SDC10', 'SDC16', 'SDC20',
  'C-8', 'C-12', 'C-16', 'C-20',
  'NCS', 'A893', 'A5302',
];

function FilterPanel({ filters, setFilter, clearFilters, activeFilterCount, totalCount, filteredCount }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <aside className={`${styles.panel} ${mobileOpen ? styles.panelOpen : ''}`}>
      <button
        className={styles.mobileToggle}
        onClick={() => setMobileOpen(o => !o)}
        aria-expanded={mobileOpen}
      >
        <span>
          Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''} · {filteredCount} of {totalCount}
        </span>
        <span className={styles.mobileToggleIcon}>{mobileOpen ? '▲' : '▼'}</span>
      </button>

      <div className={styles.panelBody}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>Filters</span>
          {activeFilterCount > 0 && (
            <button className={styles.clearBtn} onClick={clearFilters}>
              Clear {activeFilterCount}
            </button>
          )}
        </div>

        <div className={styles.resultCount}>
          {filteredCount} of {totalCount} parts
        </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Search</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Model or keyword..."
          value={filters.query}
          onChange={e => setFilter('query', e.target.value)}
        />
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Manufacturer</label>
        <select className={styles.select} value={filters.mfr} onChange={e => setFilter('mfr', e.target.value)}>
          <option value="">All</option>
          <option value="Danfoss">Danfoss</option>
          <option value="Bucher">Bucher Hydraulics</option>
          <option value="Sun">Sun Hydraulics</option>
          <option value="HAWE">HAWE Hydraulik</option>
          <option value="Argo">Argo-Hytos</option>
          <option value="Deltrol">Deltrol Fluid Products</option>
          <option value="NACHI">NACHI America</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Ways</label>
        <div className={styles.segmented}>
          {['', '2-Way', '3-Way', '4-Way'].map(w => (
            <button
              key={w}
              className={filters.ways === w ? styles.segActive : styles.segBtn}
              onClick={() => setFilter('ways', w)}
            >
              {w || 'All'}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Default state</label>
        <select className={styles.select} value={filters.defaultState} onChange={e => setFilter('defaultState', e.target.value)}>
          <option value="">Any</option>
          <option value="Normally Open">Normally Open</option>
          <option value="Normally Closed">Normally Closed</option>
          <option value="All ports blocked">All ports blocked</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Actuation</label>
        <select className={styles.select} value={filters.actuation} onChange={e => setFilter('actuation', e.target.value)}>
          <option value="">Any</option>
          {ACTUATION_OPTIONS.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Valve element</label>
        <div className={styles.segmented}>
          {['', 'Spool', 'Poppet'].map(e => (
            <button
              key={e}
              className={filters.element === e ? styles.segActive : styles.segBtn}
              onClick={() => setFilter('element', e)}
            >
              {e || 'Any'}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Max pressure (psi)</label>
        <select className={styles.select} value={filters.maxPsi} onChange={e => setFilter('maxPsi', e.target.value)}>
          <option value="">Any</option>
          {PSI_OPTIONS.map(p => <option key={p} value={p}>{p.toLocaleString()} psi</option>)}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.label}>Cavity</label>
        <select className={styles.select} value={filters.cavity} onChange={e => setFilter('cavity', e.target.value)}>
          <option value="">Any</option>
          {CAVITY_OPTIONS.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      </div>
    </aside>
  );
}

export default FilterPanel;
