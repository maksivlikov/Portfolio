import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// TODO : REMOVE CIRCLES FOR MOBILE
gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Market Harborough Building Society",
    role: "Intern Software Engineer",
    date: "Feb 2026 - Present",
    description: "Full-stack web developer specialising in React, TailwindCSS and TypeScript on the frontend, with Convex powering the backend. Work within a small, agile team to develop and optimise business web applications, taking responsibility for feature implementation, performance improvements, and collaborative problem-solving.",
  },
  {
    company: "University of Warwick",
    role: "BEng Computer Systems Engineering",
    date: "Sep 2025 - Present",
    description: "Relevant modules include Programming for Computer Scientists, Design of Data Structures, Computer Security and more. Built 3+ courseworks in Java, utilising advanced algorithms, such as DFS, BFS and more.",
  },
  {
    company: "Centre for Integrative Semiconductor Materials, Swansea University",
    role: "Work Experience",
    date: "November 2023",
    description: "Gained hands-on experience in semiconductor research, focusing on photovoltaic device characterisation and data analysis. Developed Python scripts to process experimental data and contributed to presentations and team discussions. Built strong analytical, problem-solving, and professional communication skills in a real research environment.",
  },
  {
    company: "Coleg Cambria",
    role: "A-levels",
    date: "Sep 2023 - Sep 2025",
    description: "5 A-levels with A* or A including Further Mathematics, Computer Science and Physics",
  },
];


const highlightText = (text) => {
  const keywords = ["Python", "React", "TailwindCSS", "TypeScript", "Convex", "Java", "Computer Science"];

  return text.split(new RegExp(`(${keywords.join("|")})`, "gi")).map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="text-violet-600 font-semibold border-b-2 border-violet-600">
        {part}
      </span>
    ) : (
      part
    )
  );
};


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
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="w-full bg-white py-20 md:py-40 px-4">

      <div className="custom-shape-divider-top-1773959378">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
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
          className="absolute left-1/2 -translate-x-1/2 w-[2px] bg-violet-600 top-0 h-0 "
        />

        {/* MOVING CIRCLE */}
        <div
          ref={circleRef}
          className="absolute z-[9] left-1/2 -translate-x-1/2 w-4 h-4 bg-violet-600 rounded-full border-4 border-white shadow-md"
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
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 md:mt-1 bg-white border-gray-500 border-2 rounded-full z-[1]" />
              
              
              {/* Spacer */}
              <div className="w-full md:w-1/2" />

              {/* CARD */}
              <div
                ref={(el) => (cardsRef.current[i] = el)}
                className="w-full md:w-1/2 px-4 z-[20]"
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
                  <p className="text-black">{highlightText(exp.description)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      
      </div>

      
          <div className="custom-shape-divider-bottom-1773959207">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
            </svg>
          </div>
    </section>
  );
};

export default ExperienceSection;