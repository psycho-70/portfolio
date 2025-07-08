import { useState, useRef } from 'react';
import Image from 'next/image';
import { useAppContext } from '@/app/Context/AppContext';

const teamMembers = [
  {
    name: 'M.Asim',
    position: 'Visual Designer',
    image: '/team/asim.jpg',
    expertise: 'Expert in Adobe Photoshop, Illustrator, and UI/UX design principles.',
    color: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-100 to-pink-100',
    darkBgGradient: 'from-purple-900/20 to-pink-900/20',
  },
  {
    name: 'Hussain Khan',
    position: 'Software Engineer',
    image: '/team/hussain.enc',
    expertise: 'Proficient in JavaScript, React, Node.js, and cloud computing.',
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-100 to-cyan-100',
    darkBgGradient: 'from-blue-900/20 to-cyan-900/20',
  },
  {
    name: 'Nasir Khan',
    position: 'Project Manager',
    image: '/team/nasir.enc',
    expertise: 'Skilled in project management, Agile methodologies, and team leadership.',
    color: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-100 to-emerald-100',
    darkBgGradient: 'from-green-900/20 to-emerald-900/20',
  },
  {
    name: 'Salman Khan',
    position: 'Database Administrator',
    image: '/team/salman.jpg',
    expertise: 'Experienced in SQL, NoSQL databases, and database performance optimization.',
    color: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-100 to-red-100',
    darkBgGradient: 'from-orange-900/20 to-red-900/20',
  },
  {
    name: 'Aftab khan',
    position: 'UX Designer',
    image: '/team/aftab.jpg',
    expertise: 'Specialized in user research, wireframing, prototyping, and usability testing.',
    color: 'from-indigo-500 to-purple-500',
    bgGradient: 'from-indigo-100 to-purple-100',
    darkBgGradient: 'from-indigo-900/20 to-purple-900/20',
  },
];

const TeamMemberCard = () => {
  const { darkMode } = useAppContext();
  const containerRef = useRef(null);
  const [visibleExpertiseIndex, setVisibleExpertiseIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleExpertise = (index) => {
    setVisibleExpertiseIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className={`py-16 px-4 transition-all duration-500 `}>
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent`}>
            Meet Our Team
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"></div>
        </div>
        <p className={`text-lg md:text-xl mt-6 max-w-2xl mx-auto ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Passionate professionals dedicated to creating exceptional digital experiences
        </p>
      </div>

      {/* Team Cards Section */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={scrollRight}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            darkMode 
              ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
          }`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar space-x-6 px-12 py-8"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-80 group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                hoveredIndex === index ? 'z-10' : ''
              }`}
              style={{ scrollSnapAlign: 'center' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${
                darkMode
                  ? `bg-gradient-to-br ${member.darkBgGradient} backdrop-blur-sm border border-gray-700/50`
                  : `bg-gradient-to-br ${member.bgGradient} border border-white/50`
              } ${hoveredIndex === index ? 'shadow-3xl' : ''}`}>
                
                {/* Decorative Elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-10 rounded-full transform translate-x-16 -translate-y-16`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${member.color} opacity-10 rounded-full transform -translate-x-12 translate-y-12`}></div>

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative p-1 rounded-full bg-gradient-to-r ${member.color} transition-all duration-300 ${
                      hoveredIndex === index ? 'scale-110' : ''
                    }`}>
                      <Image
                        className="w-32 h-32 object-cover rounded-full bg-white"
                        src={member.image}
                        alt={`${member.name} image`}
                        width={128}
                        height={128}
                      />
                      {/* Online Status Indicator */}
                      <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                    </div>
                  </div>

                  {/* Name & Position */}
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {member.name}
                    </h3>
                    <p className={`text-lg font-medium bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.position}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center space-x-3 mb-6">
                    <a
                      href={`mailto:furqanktk52@gmail.com`}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg ${
                        darkMode
                          ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                          : 'bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600'
                      }`}
                    >
                      Message
                    </a>
                    <button
                      onClick={() => toggleExpertise(index)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r ${member.color} text-white hover:shadow-2xl`}
                    >
                      {visibleExpertiseIndex === index ? 'Hide' : 'Expertise'}
                    </button>
                  </div>

                  {/* Expertise Section */}
                  <div className={`transition-all duration-500 overflow-hidden ${
                    visibleExpertiseIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className={`p-6 rounded-xl border-2 border-dashed ${
                      darkMode 
                        ? 'bg-gray-800/50 border-gray-600 text-gray-300' 
                        : 'bg-white/70 border-gray-300 text-gray-700'
                    }`}>
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.color} mt-2 flex-shrink-0`}></div>
                        <p className="text-sm leading-relaxed">
                          {member.expertise}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="flex justify-center mt-16">
        <div className="flex space-x-2">
          {teamMembers.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                hoveredIndex === index
                  ? `bg-gradient-to-r ${teamMembers[index].color}`
                  : darkMode
                  ? 'bg-gray-600'
                  : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default TeamMemberCard;