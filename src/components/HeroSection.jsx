import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
  return (
    <section className = "h-screen bg-white flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">
        {/* left section */}
        <div className=" text-black z-40 xl:mb-0 mb-[20%]">
            <motion.h1 
            initial = {{ opacity: 0, y: 80 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 1.3}}
            className = "text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-3">
                Hi, I'm Max 
            </motion.h1>

            <motion.p
            initial = {{ opacity: 0, y: 80 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 1.3}}
            className = "text-2xl md:text-3xl lg:text-4xl font-bold z-10 mb-6">
                An Intern Software Engineer 
            </motion.p>


            <motion.p 
            initial = {{ opacity: 0, y: 80 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 1.8 }}
            className = "text-black text-xl, md:text-1xl lg:text-2xl max-w-2xl">
                I build exceptional digital experiences that are fast, accessible, and visually appealing.
            </motion.p>
            
        </div>


        <Spline 
        className = "absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
        scene="https://prod.spline.design/dGpVRv-yGDa1KgKy/scene.splinecode" />
        

    </section>
  )
}

export default HeroSection