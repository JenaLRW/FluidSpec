import React from 'react';
import styles from './ResultsTable.module.css';

function ResultsTable({ grouped }) {
  const mfrKeys = Object.keys(grouped);

  if (mfrKeys.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyIcon}>⊘</div>
        <p className={styles.emptyText}>No parts match your filters</p>
        <p className={styles.emptyHint}>Try adjusting the criteria in the panel on the left</p>
      </div>
    );
  }

  return (
    <div className={styles.results}>
      {/* Column headers */}
      <div className={styles.colHead}>
        <span>Model</span>
        <span>Description</span>
        <span className={styles.centered}>Ways</span>
        <span className={styles.centered}>Element</span>
        <span className={styles.centered}>Max PSI</span>
        <span className={styles.centered}>Max GPM</span>
        <span>Cavity</span>
        <span className={styles.right}>Price</span>
      </div>

      {mfrKeys.map(mfr => (
        <div key={mfr} className={styles.mfrGroup}>
          <div className={styles.mfrHeader}>
            <span className={styles.mfrName}>{mfr}</span>
            <span className={styles.mfrCount}>{grouped[mfr].length}</span>
          </div>

          {grouped[mfr].map(part => (
            <div key={part.id} className={styles.row}>
              <span className={styles.model}>{part.model}</span>
              <span className={styles.desc}>{part.description}</span>
              <span className={styles.centered}>{part.ways}</span>
              <span className={styles.centered}>
                <span className={part.element === 'Poppet' ? styles.badgePoppet : styles.badgeSpool}>
                  {part.element}
                </span>
              </span>
              <span className={styles.centered}>{part.maxPsi.toLocaleString()}</span>
              <span className={styles.centered}>{part.maxGpm !== null ? part.maxGpm : '—'}</span>
              <span className={styles.cavity}>{part.cavity}</span>
              <span className={styles.price}>
                {part.price !== null ? `$${part.price.toFixed(2)}` : '—'}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ResultsTable;
