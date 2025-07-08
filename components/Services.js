"use client";
import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from '@/app/Context/AppContext';

const Services = () => {
    const { darkMode } = useAppContext();
    const [selectedService, setSelectedService] = useState(null);

    const handleReadMore = (service) => {
        setSelectedService(service);
    };

    const handleClose = () => {
        setSelectedService(null);
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(" ") + "...";
    };

    const services = [
        {
            title: 'Design',
            icon: '🎨',
            gradient: 'from-purple-500 to-pink-500',
            description: 'As a designer, I specialize in creating visually appealing and user-friendly designs. Whether you need a brand new website layout, UI/UX improvements, or custom graphics, I can help bring your ideas to life.',
            servicesList: [
                'Website design',
                'User interface (UI) design',
                'User experience (UX) design',
                'Logo and branding design'
            ]
        },
        {
            title: 'Front-End Development',
            icon: '💻',
            gradient: 'from-blue-500 to-cyan-500',
            description: 'I excel in front-end development, ensuring that your website not only looks great but also functions seamlessly across all devices and browsers. From responsive design to interactive elements, I implement the latest technologies to enhance user experience.',
            servicesList: [
                'HTML5, CSS3, JavaScript',
                'Responsive web design',
                'Front-end frameworks (e.g., Bootstrap, Tailwind CSS)',
                'Cross-browser compatibility'
            ]
        },
        {
            title: 'Back-End Development',
            icon: '⚙️',
            gradient: 'from-green-500 to-teal-500',
            description: 'As a back-end developer, I specialize in building robust server-side applications and databases. I create scalable solutions that handle complex logic and ensure your website or web application operates efficiently.',
            servicesList: [
                'Server-side programming (e.g., PHP, Python, Node.js)',
                'Database design and management (e.g., MySQL, PostgreSQL, MongoDB)',
                'API integration and development',
                'Content management systems (CMS) customization'
            ]
        },
        {
            title: 'SEO (Search Engine Optimization)',
            icon: '🚀',
            gradient: 'from-orange-500 to-red-500',
            description: 'I offer SEO services to help your website rank higher in search engine results, driving organic traffic and increasing visibility. From keyword research to on-page optimization and SEO audits, I optimize your site for maximum performance.',
            servicesList: [
                'Keyword analysis and strategy',
                'On-page SEO (meta tags, content optimization)',
                'Off-page SEO (backlink building, local SEO)',
                'SEO audits and reporting'
            ]
        },
        {
            title: 'Database Expertise',
            icon: '🗄️',
            gradient: 'from-indigo-500 to-purple-500',
            description: 'As a database expert, I design and manage databases to store, organize, and retrieve your data efficiently. Whether you need a relational database for structured data or a NoSQL database for flexibility, I provide tailored solutions to meet your needs.',
            servicesList: [
                'Database design and architecture',
                'Database optimization and tuning',
                'Data migration and integration',
                'Data security and backup solutions'
            ]
        }
    ];

    return (
        <div className={`transition-all duration-700 
          `}>
            <Head>
                <title>My Services</title>
                <meta name="description" content="Services offered by Designer and Developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute top-32 left-20 w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse ${
                    darkMode ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-blue-400 to-purple-400'
                }`}></div>
                <div className={`absolute bottom-32 right-20 w-80 h-80 rounded-full opacity-20 blur-3xl animate-pulse delay-1000 ${
                    darkMode ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-pink-400 to-purple-400'
                }`}></div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse delay-2000 ${
                    darkMode ? 'bg-gradient-to-r from-green-500 to-teal-500' : 'bg-gradient-to-r from-orange-400 to-red-400'
                }`}></div>
            </div>

            {/* Floating geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute opacity-30 animate-float ${
                            darkMode ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-blue-400 to-purple-400'
                        }`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 15 + 8}px`,
                            height: `${Math.random() * 15 + 8}px`,
                            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 10 + 15}s`
                        }}
                    />
                ))}
            </div>

            {/* Header Section */}
            <div className="relative z-10 pt-20 pb-12">
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            Our Services
                        </span>
                    </h1>
                    <p className={`text-xl md:text-2xl mb-8 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                        Transforming ideas into digital masterpieces
                    </p>
                    <div className="flex justify-center">
                        <div className={`h-1 w-32 rounded-full ${
                            darkMode 
                                ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                                : 'bg-gradient-to-r from-blue-400 to-purple-400'
                        }`}></div>
                    </div>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="relative z-10 container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                            whileHover={{ 
                                scale: 1.05,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className={`group relative overflow-hidden rounded-3xl backdrop-blur-sm border transition-all duration-500 ${
                                darkMode 
                                    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 hover:border-white/40' 
                                    : 'bg-gradient-to-br from-white/70 to-white/90 border-white/40 hover:border-white/60'
                            } shadow-2xl hover:shadow-3xl`}
                        >
                            {/* Gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            
                            {/* Content */}
                            <div className="relative z-10 p-8">
                                {/* Icon */}
                                <div className="text-center mb-6">
                                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                        <span className="text-3xl">{service.icon}</span>
                                    </div>
                                </div>
                                
                                {/* Title */}
                                <h2 className={`text-2xl font-bold text-center mb-4 ${
                                    darkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    {service.title}
                                </h2>
                                
                                {/* Description */}
                                <p className={`text-center mb-6 leading-relaxed ${
                                    darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    {truncateText(service.description, 25)}
                                </p>
                                
                                {/* Skills preview */}
                                <div className="flex flex-wrap gap-2 justify-center mb-6">
                                    {service.servicesList.slice(0, 2).map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className={`px-3 py-1 text-xs rounded-full ${
                                                darkMode 
                                                    ? 'bg-gray-700 text-gray-300' 
                                                    : 'bg-gray-200 text-gray-700'
                                            }`}
                                        >
                                            {skill.length > 20 ? skill.substring(0, 20) + '...' : skill}
                                        </span>
                                    ))}
                                    {service.servicesList.length > 2 && (
                                        <span className={`px-3 py-1 text-xs rounded-full ${
                                            darkMode 
                                                ? 'bg-gray-700 text-gray-300' 
                                                : 'bg-gray-200 text-gray-700'
                                        }`}>
                                            +{service.servicesList.length - 2} more
                                        </span>
                                    )}
                                </div>
                                
                                {/* Button */}
                                <div className="text-center">
                                    <button
                                        onClick={() => handleReadMore(service)}
                                        className={`px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${service.gradient} shadow-lg hover:shadow-xl`}
                                    >
                                        Explore More ✨
                                    </button>
                                </div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-4 right-4 opacity-20">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                            </div>
                            <div className="absolute bottom-4 left-4 opacity-20">
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for selected service */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 flex justify-center items-center z-50 bg-black/70 backdrop-blur-sm"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`relative rounded-3xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto ${
                                darkMode 
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                            }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className={`p-8 border-b ${
                                darkMode ? 'border-gray-700' : 'border-gray-200'
                            }`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                                            services.find(s => s.title === selectedService.title)?.gradient
                                        } flex items-center justify-center shadow-lg`}>
                                            <span className="text-2xl">
                                                {services.find(s => s.title === selectedService.title)?.icon}
                                            </span>
                                        </div>
                                        <div>
                                            <h2 className={`text-3xl font-bold ${
                                                darkMode ? 'text-white' : 'text-gray-800'
                                            }`}>
                                                {selectedService.title}
                                            </h2>
                                            <p className={`text-sm ${
                                                darkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                                Professional Service
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleClose}
                                        className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                                            darkMode 
                                                ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                                                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                                        }`}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            
                            {/* Modal Content */}
                            <div className="p-8">
                                <p className={`text-lg leading-relaxed mb-8 ${
                                    darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                    {selectedService.description}
                                </p>
                                
                                <h3 className={`text-2xl font-bold mb-6 ${
                                    darkMode ? 'text-white' : 'text-gray-800'
                                }`}>
                                    What's Included? 🎯
                                </h3>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {selectedService.servicesList.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`flex items-center p-4 rounded-xl ${
                                                darkMode 
                                                    ? 'bg-gray-700/50 border border-gray-600' 
                                                    : 'bg-gray-100 border border-gray-200'
                                            }`}
                                        >
                                            <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${
                                                services.find(s => s.title === selectedService.title)?.gradient
                                            }`}></div>
                                            <span className={`${
                                                darkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleClose}
                                        className={`px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 bg-gradient-to-r ${
                                            services.find(s => s.title === selectedService.title)?.gradient
                                        } shadow-lg hover:shadow-xl`}
                                    >
                                        Got It! 👍
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    25% { transform: translateY(-20px) rotate(90deg); }
                    50% { transform: translateY(-10px) rotate(180deg); }
                    75% { transform: translateY(-30px) rotate(270deg); }
                }
                
                .animate-float {
                    animation: float linear infinite;
                }
                
                .shadow-3xl {
                    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </div>
    );
};

export default Services;