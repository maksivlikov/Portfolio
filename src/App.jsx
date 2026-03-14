import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import CustomCursor from "./components/CustomCursor"
import About from "./components/About"
import Projects from "./components/Projects"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Contact } from "./components/Contact"

export default function App() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill ())
    }
  }, [])

  return (
    <>
      <Header />
      <HeroSection />
      <CustomCursor />
      <About />
      <Projects />
    </>
  )
}