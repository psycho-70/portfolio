'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5'; // You can use any close icon, here I use react-icons for demonstration

const Home = () => {
    const fullText = ["Furqan Khattak", "Web Developer", "Front End Developer"];
    const items = ["html", "css", "javascript", "node.js", "tailwindcss", "express.js", "next.js", "react"];

    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isRemovingText, setIsRemovingText] = useState(false);

    const [displayedItem, setDisplayedItem] = useState('');
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [isRemovingItem, setIsRemovingItem] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Furqanullahcv.pdf';  // Ensure the PDF is in the public folder
        link.download = 'Furqanullahcv.pdf';
        link.click();
    };

    useEffect(() => {
        let textInterval;
        if (isRemovingText) {
            textInterval = setInterval(() => {
                setDisplayedText((prev) => {
                    if (prev.length > 0) {
                        return prev.slice(0, -1);
                    } else {
                        setIsRemovingText(false);
                        setTextIndex((prevIndex) => (prevIndex + 1) % fullText.length);
                        return '';
                    }
                });
            }, 100);
        } else {
            textInterval = setInterval(() => {
                setDisplayedText((prev) => {
                    if (prev.length < fullText[textIndex].length) {
                        return fullText[textIndex].slice(0, prev.length + 1);
                    } else {
                        setIsRemovingText(true);
                        clearInterval(textInterval);
                    }
                    return prev;
                });
            }, 100);
        }
        return () => clearInterval(textInterval);
    }, [textIndex, isRemovingText, fullText]);

    useEffect(() => {
        let itemInterval;
        if (isRemovingItem) {
            itemInterval = setInterval(() => {
                setDisplayedItem((prev) => {
                    if (prev.length > 0) {
                        return prev.slice(0, -1);
                    } else {
                        setIsRemovingItem(false);
                        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
                        return '';
                    }
                });
            }, 100);
        } else {
            itemInterval = setInterval(() => {
                setDisplayedItem((prev) => {
                    const currentItem = items[currentItemIndex];
                    if (currentItem && prev.length < currentItem.length) {
                        return currentItem.slice(0, prev.length + 1);
                    } else {
                        setIsRemovingItem(true);
                        clearInterval(itemInterval);
                    }
                    return prev;
                });
            }, 100);
        }
        return () => clearInterval(itemInterval);
    }, [currentItemIndex, isRemovingItem, items]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="h-[1px] w-full mt-16 bg-white"></div>
            <section className='md:flex w-full justify-evenly items-center p-5 mx-auto min-h-96 bg-slate-800'>
                <div className='text-center md:w-[50%] p-1 flex flex-col gap-5'>
                    <h1 className='md:text-3xl text-2xl text-start font-bold'>
                        I am {displayedText && displayedText.split(' ').map((word, idx) => (
                            <span key={idx}>
                                <span className='text-red-500 font-bold'> {word} </span>
                            </span>
                        ))}
                    </h1>
                    <h2 className='text-start font-bold text-xl'>
                    Expertise {' '}
                        <span className='text-red-500 font-bold'>
                            {displayedItem}
                            {cursorVisible ? '|' : ' '}
                        </span>
                    </h2>
                    <p className='text-start whitespace-break-spaces leading-relaxed'>
                    Hello! I'm Furqan, a passionate and dedicated website developer with a Bachelor's degree in Software Engineering. With a strong foundation in software engineering principles and hands-on experience in web development, I specialize in creating dynamic and responsive websites that deliver exceptional user experiences.
                    </p>
                    <div className='flex gap-4'>
                        <button
                            type="button"
                            className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                            onClick={handleDownloadCV}
                        >
                            Download CV
                        </button>
                        <a href="https://github.com/psycho-70?tab=repositories" target='_blank'>
                            <button
                                type="button"
                                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                            >
                                Explore Projects
                            </button></a>
                    </div>
                </div>

                <div>
                    <motion.div
                        
                        onClick={handleOpen}
                    >
                        <Image
                            className="profile-pic"
                            src="/profilepic-in-cv.jpg"
                            width={250}
                            height={250}
                            alt="Profile"
                        />
                    </motion.div>
                    <style jsx>{`
    .profile-pic {
        width: auto;
        height: auto;
    }
`}</style>

                    {isOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="relative">
                                <Image
                                    className="profile-pic"
                                    src="/profilepic-in-cv.jpg"
                                    width={400}
                                    height={400}
                                    alt="Profile"
                                />
                                <button
                                    onClick={handleClose}
                                    className="absolute top-0 right-0 m-2 p-2  rounded-full"
                                >
                                    <IoClose size={24} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <div className="h-[1px] w-full bg-white"></div>
        </>
    );
}

export default Home;
