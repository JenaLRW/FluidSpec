import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '5rem', gap: '1rem', textAlign: 'center' }}>
      <p style={{ fontSize: 48, color: 'var(--color-border-strong)' }}>404</p>
      <p style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>Page not found</p>
      <Link to="/">← Back to selector</Link>
    </div>
  );
}

export default NotFoundPage;
