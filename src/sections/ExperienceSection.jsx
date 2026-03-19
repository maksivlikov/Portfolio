import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Market Harborough Building Society",
    role: "Intern Software Engineer",
    date: "Feb 2026 - Present",
    description: "Worked on modern UI systems using React and Tailwind.",
  },
  {
    company: "University of Warwick",
    role: "BEng Computer Systems Engineering",
    date: "Sep 2025 - Present",
    description: "Built internal tools and improved performance.",
  },
  {
    company: "Centre for Integrative Semiconductor Materials, Swansea University",
    role: "Freelancer",
    date: "2022 - 2023",
    description: "Created websites for clients and startups.",
  },
];

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const circleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // TIMELINE PROGRESS + MOVING CIRCLE
    gsap.to(progressRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.to(circleRef.current, {
      top: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // CARDS ANIMATION (FIXED)
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="w-full bg-white py-20 md:py-40 px-4">

      <div class="custom-shape-divider-top-1773910476"> 
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"> 
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            class="shape-fill">
          </path> 
        </svg> 
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-center text-black mb-20">
        Professional Experience
      </h1>

      <div ref={containerRef} className="relative max-w-5xl mx-auto">
        {/* BASE LINE */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-black/20" />

        {/* PROGRESS LINE */}
        <div
          ref={progressRef}
          className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-violet-600 top-0 h-0"
        />

        {/* MOVING CIRCLE */}
        <div
          ref={circleRef}
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-violet-600 rounded-full border-4 border-white shadow-md"
          style={{ top: 0 }}
        />

        {/* CARDS */}
        <div className="flex flex-col gap-24">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* TIMELINE DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-500 rounded-full z-10" />
              <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full z-10" />
              {/* Spacer */}
              <div className="w-full md:w-1/2" />

              {/* CARD */}
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className="w-full md:w-1/2 px-4"
              >
                
                <div className="bg-white border border-black p-6 rounded-2xl shadow-lg">
                  <h2 className="text-xl font-bold text-black">
                    {exp.company} 
                  </h2>
                  <p className="text-violet-600 font-medium">
                    {exp.role}
                  </p>
                  <p className="text-sm text-black/60 mb-2">
                    {exp.date}
                  </p>
                  <p className="text-black">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;