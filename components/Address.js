import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaUniversity, FaHome, FaSchool } from 'react-icons/fa'; // Icons for University, College, and Address
import Image from 'next/image'; // For the university logo

const Address = () => {
  const controls = useAnimation();

  // Scroll animation handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, staggerChildren: 0.2 },
        });
      } else {
        controls.start({
          opacity: 0,
          y: 50,
          transition: { duration: 0.5, staggerChildren: 0.2 },
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className="relative flex flex-wrap justify-around top-4 md:top-16 h-[300px] container w-full">
    {/* University Education Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-col items-center"
    >
      <img 
        src="/kohat.jpeg" 
        alt="University" 
        className="w-12 h-12 object-contain mb-2"
      />
      <h2 className="text-xl fonthead font-bold">Higher Education</h2>
      <p className="text-lg fonthead2">BS Software Engineering</p>
      <p className="text-lg fonthead2">Kohat University of Science and Technology</p>
    </motion.div>
  
    {/* College Education Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-col items-center"
    >
      <img 
        src="/wisdom.jpeg" 
        alt="College" 
        className="w-12 h-12 object-contain mb-2"
      />
      <h2 className="md:text-xl fonthead font-bold">College Education</h2>
      <p className="text-lg fonthead2">FSc in ICS</p>
      <p className="text-lg fonthead2">Wisdom College, Karak</p>
    </motion.div>
  
    {/* Address Section */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="flex flex-col items-center"
    >
      <img 
        src="/map.jpeg" 
        alt="Address" 
        className="w-12 h-12 object-contain mb-2"
      />
      <h2 className="text-xl fonthead font-bold">Address</h2>
      <p className="text-lg fonthead2">District Karak, Village Ambirikalla</p>
    </motion.div>
  </div>
  );
};

export default Address;
