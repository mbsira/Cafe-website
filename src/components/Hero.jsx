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

      <span style={{
        position: "absolute", bottom: "14rem", left: "2.5rem",
        zIndex: 3,
        fontFamily: "'Jost', sans-serif",
        fontSize: "clamp(3.8rem, 2vw, 1.4rem)",
        fontWeight: 300, letterSpacing: "0.08em",
        color: "#ffffff",
        opacity: loaded ? 1 : 0,
        letterSpacing: 1,
        transform: loaded ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.9s ease 0.5s",
      }}>cozy cup</span>

      {/* Bottom-right — italic word */}
      <span style={{
        position: "absolute", bottom: "14rem", right: "45%",
        zIndex: 3,
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(3.8rem, 2vw, 1.4rem)",
        fontWeight: 400, fontStyle: "italic",
        letterSpacing: "0.05em",
        color: "#ffffff",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(12px)",
        transition: "all 0.9s ease 0.7s",
      }}>café</span>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Jost:wght@300;400&display=swap');
      `}</style>
    </section>
  )
}