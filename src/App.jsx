import Header from "./components/Header"
import HeroSection from "./sections/HeroSection"
import CustomCursor from "./components/CustomCursor"
import AboutSection from "./sections/AboutSection"
import ProjectsSection from "./sections/ProjectsSection"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ContactsSection from "./sections/ContactsSection"
import ExperienceSection from "./sections/ExperienceSection"
import FooterSection from "./sections/FooterSection"

/**
 
TODO:

- change mobile navbar/contact me colors in navbar

  1. change the 3d model
  2. change colors on hero
  3. add wavy transition to about
4. change colors on contact me
  5. change the image of the about page, see if can add floating animation
6. fix projects carousel
7. fix contact me page
8. change images of projects

maybe add c# qualification

*/

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
      <AboutSection />
      {/* <ProjectsSection /> */}
      <ExperienceSection />
      {/* <ContactsSection /> */}
      <FooterSection />

      
      <CustomCursor />  
    </>
  )
}