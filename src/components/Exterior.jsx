import { useState, useEffect, useRef } from "react"

export default function Exterior() {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="exterior" ref={ref} style={{
      background: "#faf9f7", minHeight: "100vh",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "6rem 2rem", overflow: "hidden",
    }}>

      {/* Top heading */}
      <div style={{
        textAlign: "center", marginBottom: "-2rem",
        position: "relative", zIndex: 2,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.9s ease 0.1s"
      }}>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(4rem, 10vw, 9rem)",
          fontWeight: 400, lineHeight: 1,
          margin: 0, color: "#1a1008",
          letterSpacing: "2px",
        }}>
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>the </em>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400, fontStyle: "normal",
            letterSpacing: "2px"
          }}>ONLY</span>
        </h1>
      </div>

      {/* Middle row — left text + image + right text */}
      <div style={{
        display: "flex", alignItems: "center",
        justifyContent: "center", position: "relative",
        zIndex: 3, width: "100%", maxWidth: "1100px",
      }}>

        {/* LEFT text — slides out on hover */}
        <div style={{
          flex: 1, textAlign: "right", paddingRight: "2rem",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(60px)",
          transition: "all 0.8s cubic-bezier(0.0, 0.0, 0.2, 1)",
          pointerEvents: "none",
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic", fontWeight: 400,
            fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
            color: "#1a1008", lineHeight: 1.8,
            letterSpacing: "2px", margin: 0,
          }}>
            Trained in Milan<br />
            15 years of craft<br />
            Every cup, a story
          </p>
        </div>

        {/* Chef image */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: "clamp(200px, 26vw, 320px)",
            flexShrink: 0, cursor: "pointer",
            transform: hovered ? "scale(0.94)" : "scale(1)",
           transition: "all 0.8s cubic-bezier(0.0, 0.0, 0.2, 1)",
            opacity: visible ? 1 : 0,
          }}
          className="chef-img-wrap"
        >
          <img
            src="https://images.pexels.com/photos/20631762/pexels-photo-20631762.jpeg"
            alt="Chef"
            style={{
              width: "100%", aspectRatio: "3/4",
              objectFit: "cover", objectPosition: "top",
              display: "block",
            }}
          />
        </div>

        {/* RIGHT text — slides out on hover */}
        <div style={{
          flex: 1, textAlign: "left", paddingLeft: "2rem",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(-60px)",
          transition: "all 0.8s cubic-bezier(0.0, 0.0, 0.2, 1)",
          pointerEvents: "none",
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)",
            color: "#1a1008", lineHeight: 1.8,
            letterSpacing: "2px", margin: 0,
            textTransform: "uppercase",
          }}>
            Head Chef<br />
            Marco Rossi<br />
            Cozy Cup Café
          </p>
        </div>
      </div>

      {/* Bottom quote */}
      <div style={{
        textAlign: "center", marginTop: "-1.5rem",
        position: "relative", zIndex: 2,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.9s ease 0.5s"
      }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
          fontWeight: 400, letterSpacing: "2px",
          textTransform: "uppercase", color: "#1a1008",
          lineHeight: 1.5, margin: 0,
        }}>
          THING THAT{" "}
          <em style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic", fontWeight: 400,
            textTransform: "none",
            fontSize: "1.15em"
          }}>matters</em>
          <br />
          ABOUT FOOD IS HOW IT
          <br />
          <em style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic", fontWeight: 400,
            textTransform: "none",
            fontSize: "1.15em"
          }}>brings</em>{" "}
          PEOPLE TOGETHER
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;1,400&family=Jost:wght@300;400;500&display=swap');
        .chef-img-wrap {
          opacity: 0;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.9s ease 0.3s !important;
        }
        .chef-img-wrap.show { opacity: 1 !important; }
      `}</style>
    </section>
  )
}