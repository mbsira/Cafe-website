export default function Location() {
  return (
    <section id="location-message" style={{
      background: "#080604", padding: "8rem 3rem",
      borderTop: "1px solid rgba(214,178,142,0.08)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "5rem" }}>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
            letterSpacing: "0.35em", textTransform: "uppercase",
            color: "#d6b28e", margin: "0 0 1rem",
          }}>Where to find us</p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 400, color: "#f8e9d0",
            margin: 0, letterSpacing: "2px",
          }}>Visit Us</h2>
        </div>

        {/* Two col layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1px",
          background: "rgba(214,178,142,0.08)",
          border: "1px solid rgba(214,178,142,0.08)",
        }}>

          {/* Left — map + address */}
          <div style={{ background: "#080604", padding: "3rem" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d4a32b6e1b1!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%" height="260"
              style={{ border: 0, display: "block", marginBottom: "2.5rem", filter: "grayscale(1) invert(1) contrast(0.85)" }}
              allowFullScreen="" loading="lazy" title="map"
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { label: "Address", value: "123 Coffee Street, Brewtown, CA 90210" },
                { label: "Hours", value: "Mon – Fri  7am – 10pm\nSat – Sun  8am – 11pm" },
                { label: "Phone", value: "(555) 123-4567" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                  <span style={{
                    fontFamily: "'Jost', sans-serif", fontSize: "0.6rem",
                    letterSpacing: "0.25em", textTransform: "uppercase",
                    color: "#d6b28e", minWidth: "60px", paddingTop: "2px",
                  }}>{item.label}</span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1rem", fontWeight: 400,
                    color: "rgba(248,233,208,0.7)", letterSpacing: "1px",
                    lineHeight: 1.7, whiteSpace: "pre-line",
                  }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — minimal contact */}
          <div style={{ background: "#080604", padding: "3rem", borderLeft: "1px solid rgba(214,178,142,0.08)" }}>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
              letterSpacing: "0.35em", textTransform: "uppercase",
              color: "#d6b28e", margin: "0 0 2.5rem",
            }}>Get in touch</p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {["Your Name", "Your Email", "Your Message"].map((ph, i) => (
                i < 2 ? (
                  <input key={ph} type={i === 1 ? "email" : "text"} placeholder={ph}
                    style={{
                      background: "none", border: "none",
                      borderBottom: "1px solid rgba(214,178,142,0.12)",
                      padding: "1.2rem 0", color: "#f8e9d0",
                      fontFamily: "'Jost', sans-serif", fontWeight: 300,
                      fontSize: "0.85rem", letterSpacing: "1px",
                      outline: "none", width: "100%",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={e => e.target.style.borderBottomColor = "rgba(214,178,142,0.5)"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(214,178,142,0.12)"}
                  />
                ) : (
                  <textarea key={ph} placeholder={ph} rows="4"
                    style={{
                      background: "none", border: "none",
                      borderBottom: "1px solid rgba(214,178,142,0.12)",
                      padding: "1.2rem 0", color: "#f8e9d0",
                      fontFamily: "'Jost', sans-serif", fontWeight: 300,
                      fontSize: "0.85rem", letterSpacing: "1px",
                      outline: "none", width: "100%", resize: "none",
                      transition: "border-color 0.3s ease",
                    }}
                    onFocus={e => e.target.style.borderBottomColor = "rgba(214,178,142,0.5)"}
                    onBlur={e => e.target.style.borderBottomColor = "rgba(214,178,142,0.12)"}
                  />
                )
              ))}
            </div>

            <button style={{
              marginTop: "2.5rem", background: "none", border: "none",
              padding: 0, cursor: "pointer",
              fontFamily: "'Jost', sans-serif", fontWeight: 400,
              fontSize: "0.7rem", letterSpacing: "0.25em",
              textTransform: "uppercase", color: "rgba(248,233,208,0.4)",
              display: "flex", alignItems: "center", gap: "0.8rem",
              transition: "color 0.3s ease",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "#d6b28e"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(248,233,208,0.4)"}
            >
              <span style={{
                display: "inline-block", width: "24px", height: "1px",
                background: "currentColor",
              }} />
              Send Message
            </button>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');
        ::placeholder { color: rgba(248,233,208,0.25) !important; }
        @media (max-width: 768px) {
          section > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}