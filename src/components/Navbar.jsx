export default function Navbar({ totalItems, onCartClick }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, width: "100%",
      zIndex: 1000, display: "flex", justifyContent: "center",
      alignItems: "center", padding: "1.8rem 0",
      background: "transparent",
    }}>
      <ul style={{
        display: "flex", gap: "2.5rem", listStyle: "none",
        margin: 0, padding: "0.5rem 2rem",
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(12px)",
        borderRadius: "100px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}>
        {[
          { label: "Home", href: "#about" },
          { label: "About", href: "#exterior" },
          { label: "Menu", href: "#products" },
          { label: "Location", href: "#location-message" },
          { label: "Cart", href: "#", onClick: onCartClick, badge: totalItems },
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={item.onClick}
              style={{
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.72rem", letterSpacing: "0.18em",
                textTransform: "uppercase",
                transition: "color 0.3s ease",
                display: "flex", alignItems: "center", gap: "0.4rem",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
            >
              {item.label}
              {item.badge > 0 && (
                <span style={{
                  background: "#d6b28e", color: "#1a0f0a",
                  borderRadius: "50%", width: "16px", height: "16px",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: "0.6rem", fontWeight: 700
                }}>{item.badge}</span>
              )}
            </a>
          </li>
        ))}
      </ul>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');
        @media (max-width: 600px) {
          nav ul { gap: 1.2rem !important; padding: 0.5rem 1rem !important; }
          nav ul li a { font-size: 0.6rem !important; letter-spacing: 0.1em !important; }
        }
      `}</style>
    </nav>
  )
}