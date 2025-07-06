'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import StarIcon from '@mui/icons-material/Star';
import CodeIcon from '@mui/icons-material/Code';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BrushIcon from '@mui/icons-material/Brush';
import { useAppContext } from '@/app/Context/AppContext';

const ExperienceMetrics = () => {
  const { darkMode } = useAppContext();
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const [countersVisible, setCountersVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    awards: 0,
    lines: 0,
    frameworks: 0,
    satisfaction: 0,
    designs: 0
  });

  const targetValues = {
    experience: 2,
    projects: 7,
    clients: 8,
    awards: 5,
    lines: 50,
    frameworks: 12,
    satisfaction: 98,
    designs: 15
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('experience-metrics');
      if (element && !hasAnimated) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.75 && elementBottom > 0) {
          triggerAnimations();
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const triggerAnimations = () => {
    setHasAnimated(true);
    controls.start("visible");
    startCounting();
  };

  const startCounting = () => {
    setCountersVisible(true);
    const duration = 2500;
    const interval = 30;
    
    Object.keys(targetValues).forEach(key => {
      const target = targetValues[key];
      const step = target / (duration / interval);
      let current = 0;
      
      const counterInterval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(counterInterval);
        }
        
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, interval);
    });
  };

  const metrics = [
    {
      icon: <HourglassTopIcon sx={{ fontSize: 50 }} />,
      value: counters.experience,
      label: "Years Experience",
      description: "Professional Journey",
      gradient: darkMode ? 'from-cyan-400 via-blue-500 to-purple-600' : 'from-blue-400 via-purple-500 to-pink-600',
      shadowColor: 'shadow-cyan-500/50',
      borderGradient: 'from-cyan-400 to-purple-600',
      key: 'experience',
      direction: 'left',
      particles: 8
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 50 }} />,
      value: counters.projects,
      label: "Projects",
      description: "Completed Successfully",
      gradient: darkMode ? 'from-orange-400 via-red-500 to-pink-600' : 'from-red-400 via-pink-500 to-purple-600',
      shadowColor: 'shadow-orange-500/50',
      borderGradient: 'from-orange-400 to-pink-600',
      key: 'projects',
      direction: 'bottom',
      particles: 10
    },
    {
      icon: <EmojiEmotionsIcon sx={{ fontSize: 50 }} />,
      value: counters.clients,
      label: "Happy Clients",
      description: "Satisfied Customers",
      gradient: darkMode ? 'from-green-400 via-emerald-500 to-teal-600' : 'from-emerald-400 via-green-500 to-cyan-600',
      shadowColor: 'shadow-green-500/50',
      borderGradient: 'from-green-400 to-teal-600',
      key: 'clients',
      direction: 'top',
      particles: 12
    },
    {
      icon: <EmojiEventsIcon sx={{ fontSize: 50 }} />,
      value: counters.awards,
      label: "Awards",
      description: "Recognition Earned",
      gradient: darkMode ? 'from-yellow-400 via-orange-500 to-red-600' : 'from-amber-400 via-orange-500 to-red-600',
      shadowColor: 'shadow-yellow-500/50',
      borderGradient: 'from-yellow-400 to-red-600',
      key: 'awards',
      direction: 'right',
      particles: 15
    },
    {
      icon: <CodeIcon sx={{ fontSize: 50 }} />,
      value: counters.lines,
      label: "K+ Lines of Code",
      description: "Clean & Efficient",
      gradient: darkMode ? 'from-purple-400 via-pink-500 to-red-600' : 'from-violet-400 via-purple-500 to-pink-600',
      shadowColor: 'shadow-purple-500/50',
      borderGradient: 'from-purple-400 to-red-600',
      key: 'lines',
      direction: 'left',
      particles: 9
    },
    {
      icon: <StarIcon sx={{ fontSize: 50 }} />,
      value: counters.frameworks,
      label: "Frameworks",
      description: "Mastered Technologies",
      gradient: darkMode ? 'from-indigo-400 via-purple-500 to-pink-600' : 'from-blue-400 via-indigo-500 to-purple-600',
      shadowColor: 'shadow-indigo-500/50',
      borderGradient: 'from-indigo-400 to-pink-600',
      key: 'frameworks',
      direction: 'bottom',
      particles: 11
    },
    {
      icon: <ThumbUpIcon sx={{ fontSize: 50 }} />,
      value: counters.satisfaction,
      label: "% Satisfaction",
      description: "Client Feedback",
      gradient: darkMode ? 'from-teal-400 via-cyan-500 to-blue-600' : 'from-cyan-400 via-teal-500 to-blue-600',
      shadowColor: 'shadow-teal-500/50',
      borderGradient: 'from-teal-400 to-blue-600',
      key: 'satisfaction',
      direction: 'top',
      particles: 13
    },
    {
      icon: <BrushIcon sx={{ fontSize: 50 }} />,
      value: counters.designs,
      label: "UI Designs",
      description: "Creative Solutions",
      gradient: darkMode ? 'from-rose-400 via-pink-500 to-purple-600' : 'from-pink-400 via-rose-500 to-red-600',
      shadowColor: 'shadow-rose-500/50',
      borderGradient: 'from-rose-400 to-purple-600',
      key: 'designs',
      direction: 'right',
      particles: 14
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const getDirectionalVariants = (direction) => {
    switch(direction) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -150, rotateY: -90 },
          visible: { 
            opacity: 1, 
            x: 0,
            rotateY: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 150, rotateY: 90 },
          visible: { 
            opacity: 1, 
            x: 0,
            rotateY: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }
        };
      case 'top':
        return {
          hidden: { opacity: 0, y: -150, rotateX: -90 },
          visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }
        };
      case 'bottom':
        return {
          hidden: { opacity: 0, y: 150, rotateX: 90 },
          visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            transition: { duration: 0.8, ease: "easeOut" }
          }
        };
      default:
        return {
          hidden: { opacity: 0, scale: 0.5 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8 }
          }
        };
    }
  };

  const FloatingParticles = ({ count, index }) => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div id="experience-metrics" className={`py-20 w-full mx-auto relative overflow-hidden `}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 left-10 w-96 h-96 ${darkMode ? 'bg-purple-600' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse`}></div>
        <div className={`absolute bottom-10 right-10 w-96 h-96 ${darkMode ? 'bg-pink-600' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700`}></div>
        <div className={`absolute top-1/2 left-1/2 w-96 h-96 ${darkMode ? 'bg-cyan-600' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000`}></div>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="px-4 max-w-[1500px] mx-auto relative z-10"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-transparent bg-clip-text">
              My Journey
            </span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Transforming ideas into digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={getDirectionalVariants(metric.direction)}
              custom={index}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.08,
                  rotateY: hoveredIndex === index ? 5 : 0,
                  rotateX: hoveredIndex === index ? 5 : 0
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative overflow-hidden rounded-3xl p-8 h-80 flex flex-col items-center justify-center
                  ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'}
                  backdrop-blur-xl border-2 border-transparent
                  ${hoveredIndex === index ? `bg-gradient-to-r ${metric.gradient}` : ''}
                  ${hoveredIndex === index ? `shadow-2xl ${metric.shadowColor}` : 'shadow-xl'}
                  transition-all duration-500 ease-out
                  before:absolute before:inset-0 before:rounded-3xl
                  before:bg-gradient-to-r before:${metric.borderGradient}
                  before:opacity-0 before:transition-opacity before:duration-500
                  hover:before:opacity-100 before:blur-sm before:-z-10
                `}
                style={{
                  background: hoveredIndex === index ? undefined : (darkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.9)'),
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Floating Particles */}
                <FloatingParticles count={metric.particles} index={index} />

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>

                {/* Icon */}
                <motion.div 
                  className={`mb-6 p-4 rounded-full ${hoveredIndex === index ? 'text-white' : ''} transition-colors duration-300`}
                  style={{
                    background: hoveredIndex === index ? 'rgba(255, 255, 255, 0.2)' : undefined,
                    color: hoveredIndex === index ? 'white' : undefined,
                    backdropFilter: hoveredIndex === index ? 'blur(10px)' : undefined
                  }}
                  animate={{
                    rotate: hoveredIndex === index ? [0, 360] : 0,
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1
                  }}
                  transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 0.5 }
                  }}
                >
                  {metric.icon}
                </motion.div>

                {/* Counter */}
                <motion.div
                  className="text-center mb-4"
                  animate={countersVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div 
                    className={`font-bold text-5xl mb-2 ${hoveredIndex === index ? 'text-white' : (darkMode ? 'text-white' : 'text-gray-800')}`}
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {metric.value}
                    {metric.key === 'lines' || metric.key === 'satisfaction' ? '' : '+'}
                    {metric.key === 'satisfaction' ? '%' : ''}
                    {metric.key === 'lines' ? 'K+' : ''}
                  </motion.div>
                </motion.div>

                {/* Label */}
                <div className="text-center">
                  <div className={`text-lg font-semibold mb-1 ${hoveredIndex === index ? 'text-white' : (darkMode ? 'text-white' : 'text-gray-800')}`}>
                    {metric.label}
                  </div>
                  <div className={`text-sm ${hoveredIndex === index ? 'text-white/80' : (darkMode ? 'text-gray-400' : 'text-gray-500')}`}>
                    {metric.description}
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
                  <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
                  <div className="absolute right-0 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className={`inline-block px-6 py-3 rounded-full ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-xl border border-white/20`}>
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              ✨ Powered by passion and dedication ✨
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExperienceMetrics;