import { useState, useEffect } from "react"
import products from "../data/products"

function ProductCard({ product, addToCart }) {
  const [hovered, setHovered] = useState(false)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", cursor: "pointer",
        background: "#0d0804",
        border: `1px solid ${hovered ? "rgba(214,178,142,0.35)" : "rgba(214,178,142,0.08)"}`,
        transition: "border-color 0.4s ease, transform 0.4s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hovered ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.0, 0.0, 0.2, 1)",
            filter: hovered ? "brightness(0.75)" : "brightness(0.9)",
          }}
        />
        <span style={{
          position: "absolute", top: "1rem", left: "1rem",
          fontFamily: "'Jost', sans-serif",
          fontSize: "0.6rem", letterSpacing: "0.25em",
          textTransform: "uppercase", color: "#d6b28e",
          background: "rgba(13,8,4,0.85)", padding: "0.3rem 0.7rem",
        }}>{product.category}</span>
      </div>

      <div style={{
        padding: "1.4rem 1.4rem 1.8rem",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.35rem", fontWeight: 400,
              color: "#f8e9d0", margin: 0, letterSpacing: "2px",
            }}>{product.name}</h3>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem", color: "#d6b28e",
              letterSpacing: "1px", flexShrink: 0, marginLeft: "1rem",
            }}>${product.price.toFixed(2)}</span>
          </div>

          <p style={{
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            fontSize: "0.8rem", color: "rgba(248,233,208,0.4)",
            margin: "0 0 1.4rem", lineHeight: 1.7,
          }}>{product.description}</p>
        </div>

        <div>
          <div style={{
            height: "1px",
            background: hovered ? "rgba(214,178,142,0.3)" : "rgba(214,178,142,0.08)",
            marginBottom: "1.2rem",
            transition: "background 0.4s ease",
          }} />

          <button onClick={handleAdd} style={{
            background: "none", border: "none", padding: 0,
            fontFamily: "'Jost', sans-serif", fontWeight: 400,
            fontSize: "0.7rem", letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: added ? "#d6b28e" : hovered ? "#f8e9d0" : "rgba(248,233,208,0.3)",
            cursor: "pointer", transition: "color 0.3s ease",
            display: "flex", alignItems: "center", gap: "0.5rem",
          }}>
            <span style={{
              display: "inline-block", width: "16px", height: "1px",
              background: added ? "#d6b28e" : hovered ? "#f8e9d0" : "rgba(248,233,208,0.3)",
              transition: "background 0.3s ease",
            }} />
            {added ? "Added" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products({ category, addToCart }) {
  const [isMobile, setIsMobile] = useState(false)
  const filtered = category === "all" ? products : products.filter(p => p.category === category)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  return (
    <section id="products" style={{ background: "#080604", padding: "7rem 3rem" }}>
      <div style={{ textAlign: "center", marginBottom: "5rem" }}>
        <p style={{
          fontFamily: "'Jost', sans-serif", fontSize: "0.65rem",
          letterSpacing: "0.35em", textTransform: "uppercase",
          color: "#d6b28e", marginBottom: "1rem",
        }}>Handcrafted Daily</p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          fontWeight: 400, color: "#f8e9d0",
          margin: "0 0 1.5rem", letterSpacing: "2px",
        }}>Our Menu</h2>
        <div style={{
          width: "40px", height: "1px",
          background: "rgba(214,178,142,0.4)", margin: "0 auto",
        }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        gap: "1px",
        alignItems: "stretch",
        maxWidth: "1200px", margin: "0 auto",
        background: "rgba(214,178,142,0.08)",
        border: "1px solid rgba(214,178,142,0.08)",
      }}>
        {filtered.map(product => (
          <div key={product.id} style={{ background: "#080604", display: "flex" }}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Jost:wght@300;400&display=swap');
      `}</style>
    </section>
  )
}