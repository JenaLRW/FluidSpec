import { useState, useMemo } from 'react';
import PARTS from '../data/parts';

const EMPTY_FILTERS = {
  query:        '',
  mfr:          '',
  ways:         '',
  defaultState: '',
  actuation:    '',
  element:      '',
  maxPsi:       '',
  cavity:       '',
  minGpm:       '',
  maxGpm:       '',
};

function usePartFilter() {
  const [filters, setFilters] = useState(EMPTY_FILTERS);

  const setFilter = (key, value) =>
    setFilters(prev => ({ ...prev, [key]: value }));

  const clearFilters = () => setFilters(EMPTY_FILTERS);

  const filtered = useMemo(() => {
    const q = filters.query.toLowerCase().trim();

    return PARTS.filter(p => {
      if (q && !p.model.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
      if (filters.mfr          && p.mfr          !== filters.mfr)          return false;
      if (filters.ways         && p.ways          !== filters.ways)          return false;
      if (filters.defaultState && p.defaultState  !== filters.defaultState) return false;
      if (filters.actuation    && p.actuation     !== filters.actuation)    return false;
      if (filters.element      && p.element       !== filters.element)      return false;
      if (filters.maxPsi       && p.maxPsi        !== parseInt(filters.maxPsi)) return false;
      if (filters.cavity       && !p.cavity.startsWith(filters.cavity))    return false;
      if (filters.minGpm       && p.maxGpm        !== null && p.maxGpm < parseFloat(filters.minGpm)) return false;
      if (filters.maxGpm       && p.maxGpm        !== null && p.maxGpm > parseFloat(filters.maxGpm)) return false;
      return true;
    });
  }, [filters]);

  // Group results by manufacturer for display
  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach(p => {
      if (!map[p.mfr]) map[p.mfr] = [];
      map[p.mfr].push(p);
    });
    return map;
  }, [filtered]);

  const activeFilterCount = Object.entries(filters).filter(
    ([key, val]) => val !== ''
  ).length;

  return { filters, setFilter, clearFilters, filtered, grouped, activeFilterCount };
}

export default usePartFilter;
