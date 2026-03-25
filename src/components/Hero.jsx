import { useState, useEffect } from "react"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])

  return (
    <section id="about" style={{
      position: "relative", width: "100%", height: "100vh",
      overflow: "hidden",
    }}>

      <video autoPlay muted loop playsInline preload="none" style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        objectFit: "cover", zIndex: 0,
        filter: "brightness(0.5) saturate(0.85)",
      }}>
        <source src="https://www.pexels.com/download/video/2909916/" type="video/mp4" />
      </video>

      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to bottom, transparent 60%, rgba(5,3,2,0.5) 100%)"
      }} />

      <div style={{
        position: "absolute",
        bottom: "clamp(2rem, 8vw, 6rem)",
        left: "2.5rem",
        right: "2.5rem",
        zIndex: 3,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "1rem",
      }}>

        <span style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "clamp(1.8rem, 5vw, 3.8rem)",
          fontWeight: 300,
          letterSpacing: "0.08em",
          color: "#ffffff",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(12px)",
          transition: "all 0.9s ease 0.5s",
          whiteSpace: "nowrap",
        }}>cozy cup</span>

        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 5vw, 3.8rem)",
          fontWeight: 400,
          fontStyle: "italic",
          letterSpacing: "0.05em",
          color: "#ffffff",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(12px)",
          transition: "all 0.9s ease 0.7s",
          whiteSpace: "nowrap",
        }}>café</span>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Jost:wght@300;400&display=swap');
      `}</style>
    </section>
  )
}