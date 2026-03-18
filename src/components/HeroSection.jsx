import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "./Laptop";
import { GridHelper } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { FloatingLaptop } from "./FloatingLaptop";



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
                Hi, it's Max 
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


        <div className="w-1/2 h-full">
                  <Canvas camera={{ position: [3, 2, 5] }}>
                    
                    <ambientLight intensity={1} />
                    <directionalLight position={[5,5,5]} />
        
                    <FloatingLaptop
                      scale={10}
                      position={[0, 0, 0]}
                      rotation={[0, Math.PI, Math.PI]}
                    />
        
                    <primitive object={new GridHelper(10, 10)} />
        
        
                  </Canvas>
                </div>
        

    </section>
  )
}

export default HeroSection