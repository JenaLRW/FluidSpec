import React from 'react';
import FilterPanel from '../components/FilterPanel';
import ResultsTable from '../components/ResultsTable';
import usePartFilter from '../hooks/usePartFilter';
import PARTS from '../data/parts';
import styles from './SelectorPage.module.css';

function SelectorPage() {
  const {
    filters,
    setFilter,
    clearFilters,
    filtered,
    grouped,
    activeFilterCount,
  } = usePartFilter();

  return (
    <div className={styles.page}>
      <FilterPanel
        filters={filters}
        setFilter={setFilter}
        clearFilters={clearFilters}
        activeFilterCount={activeFilterCount}
        totalCount={PARTS.length}
        filteredCount={filtered.length}
      />
      <div className={styles.content}>
        <ResultsTable grouped={grouped} />
      </div>
    </div>
  );
}

export default SelectorPage;
