import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


const About = () => {

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
        y: -200, 
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
        y: -300, 
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
                opacity: Math.random()*0.4 + 0.2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            >
            </div>
          ))}

        </div>

        <div className = "container mx-auto px-4 h-full flex flex-col items-center justify-center">
            <h1 
            ref = {titleRef}
            className = "text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0">
                About Me
            </h1>
        </div>

        <div 
        ref = {introRef}
        className = "absolute lg:bottom-[-20rem] md:bottom-[-10rem] bottom-[-20rem] left-0 w-full flex md:flex-row flex-col justify-between lg:px-24 px-5 items-center opacity-0">
          <h3 className = "text-sm md:text-2xl font-bold text-white z-50 lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:-mt-[40rem] -mt-[32rem]">
            I am a passionate software developer with a strong background in web development and a keen interest in creating innovative solutions. With experience in various programming languages and frameworks, I enjoy tackling complex problems and continuously learning new technologies to enhance my skills. My goal is to contribute to impactful projects and collaborate with like-minded individuals to drive positive change through technology.
          </h3>

          <img src = "/images/person.png" alt = "profile-img" className = "lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten"/>

        </div>

    </section>
  )
}

export default About