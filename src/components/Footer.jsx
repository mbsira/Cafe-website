export default function Footer() {
  return (
    <footer style={{
      background: "#faf9f7",
      padding: "5rem 4rem 3rem",
      borderTop: "1px solid rgba(26,16,8,0.08)",
    }}>

      {/* 3 Column Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "3rem",
        maxWidth: "1100px",
        margin: "0 auto 4rem",
      }}>

        {/* Col 1 — Brand */}
        <div>
          <h3 style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem", fontWeight: 400,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#1a1008", marginBottom: "1.8rem",
          }}>Cozy Cup Café</h3>

          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: "0.78rem", letterSpacing: "2px",
            textTransform: "uppercase", color: "rgba(26,16,8,0.5)",
            lineHeight: 2, margin: "0 0 0.5rem",
          }}>123 Coffee Street</p>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: "0.78rem", letterSpacing: "2px",
            textTransform: "uppercase", color: "rgba(26,16,8,0.5)",
            lineHeight: 2, margin: "0 0 0.5rem",
          }}>Brewtown, CA 90210</p>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: "0.78rem", letterSpacing: "2px",
            textTransform: "uppercase", color: "rgba(26,16,8,0.5)",
            lineHeight: 2, margin: 0,
          }}>United States</p>
        </div>

        {/* Col 2 — Hours */}
        <div>
          <h3 style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem", fontWeight: 400,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#1a1008", marginBottom: "1.8rem",
          }}>Hours</h3>

          {[
            ["Mon – Fri", "7am – 10pm"],
            ["Saturday", "8am – 11pm"],
            ["Sunday", "9am – 9pm"],
          ].map(([day, time]) => (
            <div key={day} style={{
              display: "flex", justifyContent: "space-between",
              marginBottom: "0.8rem",
            }}>
              <span style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                fontSize: "0.75rem", letterSpacing: "2px",
                textTransform: "uppercase", color: "rgba(26,16,8,0.5)",
              }}>{day}</span>
              <span style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 400,
                fontSize: "0.75rem", letterSpacing: "2px",
                textTransform: "uppercase", color: "#1a1008",
              }}>{time}</span>
            </div>
          ))}
        </div>

        {/* Col 3 — Contact */}
        <div>
          <h3 style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem", fontWeight: 400,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#1a1008", marginBottom: "1.8rem",
          }}>Contact</h3>

          {[
            ["Phone", "(555) 123-4567"],
            ["Email", "info@cozycup.com"],
            ["Delivery", "Via App & Web"],
          ].map(([label, value]) => (
            <div key={label} style={{ marginBottom: "0.8rem" }}>
              <span style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 300,
                fontSize: "0.65rem", letterSpacing: "0.25em",
                textTransform: "uppercase", color: "rgba(26,16,8,0.35)",
                display: "block", marginBottom: "0.2rem",
              }}>{label}</span>
              <span style={{
                fontFamily: "'Jost', sans-serif", fontWeight: 400,
                fontSize: "0.78rem", letterSpacing: "2px",
                textTransform: "uppercase", color: "#1a1008",
              }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{
        width: "100%", maxWidth: "1100px",
        height: "1px", background: "rgba(26,16,8,0.1)",
        margin: "0 auto 2rem",
      }} />

      {/* Bottom row */}
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem",
      }}>
        <span style={{
          fontFamily: "'Jost', sans-serif", fontWeight: 300,
          fontSize: "0.65rem", letterSpacing: "0.2em",
          textTransform: "uppercase", color: "rgba(26,16,8,0.35)",
        }}>© 2026 Cozy Cup Café</span>

        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic", fontWeight: 400,
          fontSize: "1rem", color: "rgba(26,16,8,0.25)",
          letterSpacing: "0.05em",
        }}>Brewed with passion</span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,400&family=Jost:wght@300;400&display=swap');
        @media (max-width: 768px) {
          footer > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}