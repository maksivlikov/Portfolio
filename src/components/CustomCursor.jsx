import { useRef, useEffect } from "react"
import gsap from "gsap"


const CustomCursor = () => {
    
    const cursorRef = useRef(null)
    const cursorOutlineRef = useRef(null)

    // hide cursor if on a small screen
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
    if (isMobile){
        return null
    }

    useEffect(() => {
        const cursor = cursorRef.current
        const cursorOutline = cursorOutlineRef.current

        gsap.set([cursor,cursorOutline], { xPercent: -50, yPercent: -50 });

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });
        const xOutlineTo = gsap.quickTo(cursorOutline, "x", { duration: 0.5, ease: "power.out" });
        const yOutlineTo = gsap.quickTo(cursorOutline, "y", { duration: 0.5, ease: "power.out" });

        const moveCursor = (e) => {
            xTo(e.clientX)
            yTo(e.clientY)
            xOutlineTo(e.clientX)
            yOutlineTo(e.clientY)
        }

        window.addEventListener("mousemove", moveCursor)

        // click animation
        const clickAnimation = () => {
            gsap.to(cursor, { scale: 0.8, duration: 0.15, ease: "power3.out" })
            gsap.to(cursorOutline, { scale: 0.8, duration: 0.15, ease: "power3.out" })
            gsap.to(cursor, { scale: 1, duration: 0.15, delay: 0.15, ease: "power3.out" })
            gsap.to(cursorOutline, { scale: 1, duration: 0.15, delay: 0.15, ease: "power3.out" })
        }

        window.addEventListener("click", clickAnimation)

    }, []);


    return (
        <>
            <div
                ref = {cursorRef}
                className = "fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-999 mix-blend-difference" 
            />
            <div
                ref = {cursorOutlineRef}
                className = "fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white  pointer-events-none z-999 mix-blend-difference opacity-50" 
            />
        </>
    )
}

export default CustomCursor