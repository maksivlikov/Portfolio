import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Laptop } from "./Laptop";

export function FloatingLaptop(props) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = 0.1 * Math.sin(t) -1;
    // ref.current.rotation.y += 0.005;
  });

  return <Laptop ref={ref} {...props} />;
}