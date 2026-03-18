import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb-nav" style={{ padding: 'clamp(12px, 3vw, 20px) 0 0' }}>
      <ol style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 'clamp(4px, 1vw, 8px)',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        fontSize: 'clamp(12px, 2.5vw, 13px)',
      }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {i > 0 && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} style={{
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#22c55e')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item.label}
              </Link>
            ) : (
              <span style={{ color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
