import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Laptop } from "./Laptop";
import { GridHelper } from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { FloatingLaptop } from "./FloatingLaptop";
import { ScrollLaptop } from "./ScrollLaptop";

export default function App() {


 

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      


      {/* HERO */}
      <section className="h-screen flex items-center justify-between px-20">

        {/* TEXT */}
        <div className="w-1/2">
          <h1 className="text-6xl font-bold">
            Hi, I'm Max
          </h1>

          <p className="text-xl mt-4 text-gray-600">
            Software developer building modern web and 3D experiences.
          </p>
        </div>

        {/* 3D CANVAS */}
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


       {/* NORMAL WEBSITE BELOW */}
      <section className="min-h-screen px-20 py-20">
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="max-w-2xl text-lg text-gray-700">
          I'm a software developer passionate about building clean user
          interfaces, interactive web experiences, and scalable applications.
        </p>
      </section>

      
    </div>
  );
}