import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Exterior from "./components/Exterior"
import Products from "./components/Products"
import Location from "./components/Location"
import Footer from "./components/Footer"
import VideoSection from "./components/VideoSection"
import Lenis from "lenis"
const lenis = new Lenis()
requestAnimationFrame(function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
})

export default function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [category, setCategory] = useState("all")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active")
      })
    }, { threshold: 0.1 })
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  function checkout() {
    if (cart.length === 0) return alert("Your cart is empty!")
    const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0)
    alert(`Thank you for your order! Total: $${total.toFixed(2)}`)
    setCart([])
    setCartOpen(false)
  }

  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <div>
      <Navbar totalItems={totalItems} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Exterior />
      <VideoSection /> 
      <Products category={category} addToCart={addToCart} />
      <Location />
      <Footer />
    </div>
  )
}