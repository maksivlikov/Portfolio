import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FloatingLaptop } from "./FloatingLaptop";
import { TiLocation } from "react-icons/ti";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-0 min-h-screen bg-white flex flex-col-reverse lg:flex-row items-center justify-between lg:justify-center lg:px-24 px-10 gap-10 relative overflow-hidden">

        {/* left section */}
        <div className="text-black z-40 lg:mb-0 ">
            <motion.h1 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 1.3}}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-0"
            >
            Hi, I'm Max 
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 1.3}}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-2"
            >
            Intern Software Engineer 
            </motion.p>

            <motion.p 
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 40, damping: 25, duration: 1.5, delay: 1.8 }}
            className="flex items-center text-xl md:text-1xl lg:text-2xl max-w-2xl"
            >
            <TiLocation className = "text-bold"/> England
            </motion.p>
        </div>

        {/* model */}
        <div className="w-full lg:w-1/2 lg:h-[450px] sm:h-[300px] sm:w-[300px] ">
            <Canvas camera={{ position: [3, 2, 5] }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5,5,5]} />

            <FloatingLaptop
                scale={14}
                position={[0, 0, 0]}
                rotation={[0, Math.PI, Math.PI]}
            />

            {/* <primitive object={new GridHelper(10, 10)} /> */}
            <OrbitControls enableZoom = {false} />
            </Canvas>
        </div>

    </section>
  )
}

export default HeroSection