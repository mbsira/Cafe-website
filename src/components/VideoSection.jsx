import { useState, useEffect } from "react"

const panels = [
  {
    video: "https://www.pexels.com/download/video/15212948/",
    label: "Crafted",
    tag: "Fresh Daily",
    info: {
      title: "Fresh Delivery",
      desc: "Every order is freshly prepared and delivered within 30 minutes to your door.",
      detail: "Available 7am – 10pm",
    }
  },
  {
    video: "https://www.pexels.com/download/video/7936183/",
    label: "Brewed",
    tag: "With Passion",
    info: {
      title: "Free Delivery",
      desc: "Orders above $25 get free delivery anywhere within 5km of Cozy Cup Café.",
      detail: "Track your order live",
    }
  },
  {
    video: "https://www.pexels.com/download/video/6829490/",
    label: "Served",
    tag: "With Heart",
    info: {
      title: "Fast & Warm",
      desc: "Insulated packaging keeps your food and drinks at the perfect temperature.",
      detail: "Contactless delivery available",
    }
  },
]

function Panel({ panel, index, isMobile }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      style={{
        flex: isMobile ? "none" : hovered ? "1.4" : "1",
        height: isMobile ? "60vw" : "100%",
        position: "relative",
        overflow: "hidden",
        transition: "flex 0.8s cubic-bezier(0.0, 0.0, 0.2, 1)",
        cursor: "pointer",
        minWidth: 0,
        minHeight: isMobile ? "220px" : 0,
      }}
    >
      {/* Video */}
      <video autoPlay muted loop playsInline preload="none" style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover", zIndex: 0,
        filter: hovered ? "brightness(0.35) saturate(0.7)" : "brightness(0.55) saturate(0.85)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        transition: "filter 0.6s ease, transform 0.6s ease",
      }}>
        <source src={panel.video} type="video/mp4" />
      </video>

      {/* Default label */}
      <div style={{
        position: "absolute", bottom: "2rem", left: 0, right: 0,
        textAlign: "center", zIndex: 2,
        opacity: hovered ? 0 : 1,
        transform: hovered ? "translateY(10px)" : "translateY(0)",
        transition: "all 0.8s cubic-bezier(0.0, 0.0, 0.2, 1)",
      }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.65rem", letterSpacing: "0.3em",
          textTransform: "uppercase", color: "#d6b28e",
          margin: "0 0 0.3rem"
        }}>{panel.tag}</p>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
          fontWeight: 400, color: "#ffffff",
          margin: 0, letterSpacing: "2px",
        }}>{panel.label}</h3>
      </div>

      {/* Hover info */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        padding: "2rem",
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s cubic-bezier(0.0, 0.0, 0.2, 1)",
      }}>
        <div style={{ fontSize: "2rem", marginBottom: "1.2rem" }}>
          {index === 0 ? "🛵" : index === 1 ? "📦" : "♨️"}
        </div>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.65rem", letterSpacing: "0.3em",
          textTransform: "uppercase", color: "#d6b28e",
          margin: "0 0 0.6rem"
        }}>Delivery</p>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
          fontWeight: 400, color: "#ffffff",
          margin: "0 0 1rem", letterSpacing: "2px",
          textAlign: "center",
        }}>{panel.info.title}</h3>
        <div style={{ width: "30px", height: "1px", background: "#d6b28e", margin: "0 auto 1rem" }} />
        <p style={{
          fontFamily: "'Jost', sans-serif", fontWeight: 300,
          fontSize: "clamp(0.78rem, 1.2vw, 0.9rem)",
          color: "rgba(255,255,255,0.7)",
          textAlign: "center", lineHeight: 1.8,
          letterSpacing: "0.5px", margin: "0 0 1rem",
          maxWidth: "260px",
        }}>{panel.info.desc}</p>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.7rem", letterSpacing: "0.2em",
          textTransform: "uppercase", color: "#d6b28e", margin: 0,
        }}>{panel.info.detail}</p>
      </div>

      {/* Index number */}
      <div style={{
        position: "absolute", top: "2rem", left: "1.5rem", zIndex: 2,
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "0.75rem", color: "rgba(255,255,255,0.3)",
        letterSpacing: "0.1em"
      }}>0{index + 1}</div>
    </div>
  )
}

export default function VideoSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <section style={{
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      height: isMobile ? "auto" : "100vh",
      overflow: "hidden",
      background: "#0a0705",
    }}>
      {panels.map((panel, i) => (
        <Panel key={i} panel={panel} index={i} isMobile={isMobile} />
      ))}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');
      `}</style>
    </section>
  )
}