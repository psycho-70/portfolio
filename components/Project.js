import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Tag, X, ZoomIn, Moon, Sun } from 'lucide-react';
import { useAppContext } from '@/app/Context/AppContext'; // Make sure this path is correct

const ProjectShowcase = () => {
  // Use the context for dark mode management
  const { darkMode, toggleDarkMode } = useAppContext();
  
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and Node.js. Features include real-time inventory management, secure payment processing, and advanced search functionality.",
      longDescription: "This comprehensive e-commerce solution provides businesses with everything they need to sell online. Built using modern web technologies, it offers a seamless shopping experience with advanced features like AI-powered product recommendations, real-time chat support, and comprehensive analytics dashboard.",
      category: "Web Development",
      date: "2024-01-15",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "https://github.com/example/ecommerce",
      live: "https://ecommerce-demo.com",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "AI-Powered Dashboard",
      description: "An intelligent analytics dashboard with machine learning capabilities for data visualization and predictive insights. Built with Python, TensorFlow, and React.",
      longDescription: "This cutting-edge dashboard leverages artificial intelligence to provide actionable insights from complex datasets. Features include automated report generation, predictive analytics, and customizable visualizations that help businesses make data-driven decisions.",
      category: "AI/ML",
      date: "2024-02-20",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
      github: "https://github.com/example/ai-dashboard",
      live: "https://ai-dashboard-demo.com",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      description: "A comprehensive fitness tracking app with workout planning, nutrition tracking, and social features. Built with React Native and Firebase.",
      longDescription: "This mobile application helps users achieve their fitness goals through personalized workout plans, nutrition tracking, and community features. The app includes AI-powered form correction, progress tracking, and social challenges to keep users motivated.",
      category: "Mobile Development",
      date: "2024-03-10",
      technologies: ["React Native", "Firebase", "Redux", "Google Fit API"],
      github: "https://github.com/example/fitness-app",
      live: "https://fitness-app-demo.com",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&h=600&fit=crop"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ];

  // Enhanced project navigation with animation
  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedProject((prev) => (prev + 1) % projects.length);
    setSelectedImage(0);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length);
    setSelectedImage(0);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Enhanced modal functions
  const openModal = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) {
        switch (e.key) {
          case 'Escape':
            closeModal();
            break;
          case 'ArrowLeft':
            prevImage();
            break;
          case 'ArrowRight':
            nextImage();
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projects[selectedProject].images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projects[selectedProject].images.length) % projects[selectedProject].images.length);
  };

  // Dynamic theme classes
  const themeClasses = {
    background: darkMode 
      ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900' 
      : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
    text: darkMode ? 'text-white' : 'text-gray-900',
    cardBg: darkMode ? 'bg-white/10' : 'bg-white/80',
    cardBorder: darkMode ? 'border-white/20' : 'border-gray-200',
    headerOverlay: darkMode 
      ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20' 
      : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10',
    modalBg: darkMode ? 'bg-black/90' : 'bg-white/95',
    buttonPrimary: darkMode 
      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
      : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600',
    buttonSecondary: darkMode 
      ? 'bg-white/10 hover:bg-white/20 border-white/20' 
      : 'bg-gray-100 hover:bg-gray-200 border-gray-300',
    gradientText: darkMode 
      ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
      : 'bg-gradient-to-r from-blue-600 to-purple-600',
  };

  const currentProject = projects[selectedProject];

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} transition-all duration-500`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-40">
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className={`absolute inset-0 ${themeClasses.headerOverlay} backdrop-blur-sm`}></div>
        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className={`text-5xl font-bold mb-4 ${themeClasses.gradientText} bg-clip-text text-transparent`}>
              Project Showcase
            </h1>
            <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Discover my latest projects and the technologies that bring them to life
            </p>
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center items-center space-x-4 mb-12">
          <button
            onClick={prevProject}
            disabled={isAnimating}
            className={`p-3 rounded-full ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setSelectedProject(index);
                    setSelectedImage(0);
                  }
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === selectedProject 
                    ? `bg-gradient-to-r ${currentProject.color} w-8` 
                    : `w-3 ${darkMode ? 'bg-white/30 hover:bg-white/50' : 'bg-gray-400 hover:bg-gray-600'}`
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextProject}
            disabled={isAnimating}
            className={`p-3 rounded-full ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Project Details */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${isAnimating ? 'opacity-50 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${currentProject.color} text-white shadow-lg`}>
                  {currentProject.category}
                </span>
                <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(currentProject.date).toLocaleDateString()}
                </div>
              </div>
              
              <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'bg-gradient-to-r from-white to-gray-300' : 'bg-gradient-to-r from-gray-800 to-gray-600'} bg-clip-text text-transparent`}>
                {currentProject.title}
              </h2>
              
              <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {currentProject.longDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h3 className={`text-xl font-semibold mb-4 flex items-center ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                <Tag className="w-5 h-5 mr-2" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a
                href={currentProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-6 py-3 ${themeClasses.buttonPrimary} rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-white`}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center px-6 py-3 ${themeClasses.buttonSecondary} rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border shadow-lg`}
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </a>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className={`aspect-video rounded-2xl overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'} shadow-2xl`}>
                <img
                  src={currentProject.images[selectedImage]}
                  alt={`${currentProject.title} - Image ${selectedImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-black/50 via-transparent to-transparent' : 'bg-gradient-to-t from-white/50 via-transparent to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <button
                  onClick={() => openModal(selectedImage)}
                  className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-black/50 hover:bg-black/70' : 'bg-white/50 hover:bg-white/70'} transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110`}
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {currentProject.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                    index === selectedImage 
                      ? `ring-2 ring-offset-2 ${darkMode ? 'ring-purple-400 ring-offset-gray-900' : 'ring-blue-400 ring-offset-white'} scale-105` 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${currentProject.title} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Screen Image */}
      {isModalOpen && (
        <div className={`fixed inset-0 ${themeClasses.modalBg} z-50 flex items-center justify-center backdrop-blur-sm`}>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 p-2 rounded-full ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10`}
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevImage}
              className={`absolute left-4 p-2 rounded-full ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className={`absolute right-4 p-2 rounded-full ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm transition-all duration-300 hover:scale-110 z-10`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <img
              src={currentProject.images[currentImageIndex]}
              alt={`${currentProject.title} - Full size`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {currentProject.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? `bg-gradient-to-r ${currentProject.color} w-6` 
                      : `w-2 ${darkMode ? 'bg-white/50' : 'bg-gray-400'}`
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

   
    </div>
  );
};

export default ProjectShowcase;