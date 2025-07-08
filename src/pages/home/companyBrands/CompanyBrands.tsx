import { motion } from "framer-motion";
import { CompanyLogo } from "../../../localData/home/CompanyLogo";
import { useEffect, useRef, useState } from "react";

const CompanyBrands: React.FC = () => {
  const logos = [...CompanyLogo, ...CompanyLogo, ...CompanyLogo];

  const [inView, setInView] = useState(true);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section ref={containerRef} className="overflow-hidden w-full h-[283px] bg-black flex items-center">
      <div
        className="flex items-center h-[100px] w-full"
        style={{ borderBottom: "0.5px solid rgba(255, 255, 255, 0.5)" }}
      >
        <motion.div
          style={{
            display: "flex",
            height: "100%",
            alignItems: "center",
            willChange: "transform",
            minWidth: '200%'
          }}
          animate={{
            x: inView ? ["0%", "-50%"] : ["0%", "0%"],
          }}
          transition={{
            duration: 13, // Adjust speed
            repeat: Infinity, // Infinite loop
            ease: "linear", // Smooth continuous scrolling
          }}
        >
          {logos.map((item, index) => (
            <motion.div
              className="flex items-center mt-8 w-[270px] h-[270px] "
              key={index}
              style={{
                padding: "0 10px",
              }}
            >
              <div className="w-[270px] h-[270px] mlg:w-[120px] mlg:h-[250px]">
                {item.logo}
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyBrands;
