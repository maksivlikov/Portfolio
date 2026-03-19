import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


// FIX SCALING ISSUE

const AboutSection = () => {

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(introRef.current,
      {y: 100, opacity: 0, filter: "blur(10px)"},
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        filter: "blur(0px)", 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        }
      }
    );

    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}px`,
        y: `${direction * (-50 - index * 20)}px`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        }

      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };


  });

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };


  return (
    <section
    ref = {sectionRef}
    className = "h-screen relative overflow-hidden bg-black">

        {/* Background elements */}
        <div className = "absolute inset-0 overflow-hidden">

          {[...Array(10)].map((_, index) => (
            <div
              ref = {addToStars}
              key={`star-${index}`}
              className="absolute rounded-full"
              style = {{ 
                width: `${10+ index *3}px`,
                height: `${10+ index *3}px`,
                backgroundColor: "white",
                opacity: Math.random()*0.4 + 0.1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
            </div>
          ))}

        </div>
        <div className="sm:-translate-y-10  relative z-30 min-h-screen flex flex-col items-center justify-center gap-4 px-6 lg:px-24 text-center">

          <div className = "container mx-auto px-4 h-full flex flex-col items-center justify-center">
              <h1 
              ref = {titleRef}
              className = "text-4xl md:text-6xl font-bold text-center text-white opacity-0">
                  About Me
              </h1>
          </div>

          <div
            ref={introRef}
            className="w-full flex justify-center px-6 lg:px-24 mt-4 lg:mt-24"
          >
            <h3 className="text-sm sm:text-lg md:text-2xl font-medium text-white max-w-2xl text-center ">
              I'm an Intern Software Engineer based in Coventry, UK, building full-stack applications with JavaScript, Python, Java, and C#. I also study Computer Science and Engineering at the University of Warwick. 
            </h3>
          </div>
        </div>


    </section>
  )
}

export default AboutSection