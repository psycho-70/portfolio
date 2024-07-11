// components/Project.js
import React from 'react';

const Project = () => {
  return (
    
     <>
     <h1 className='text-2xl text-center font-bold my-4'>Project</h1>
     <div className="line h-[1px] bg-white w-full"></div>
        <div className=" flex flex-col md:flex-row gap-10  min-h-full bg-slate-800 items-center justify-center">
          <div className="md:w-1/3 mb-6  my-10 flex items-center justify-center ">
            <img src="/pass.png" width={200} height={100} alt="Password Manager" className=" w-[150px] md:w-[200px] md:h-[400px] rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-start text-center text-red-500 font-bold mb-4">Password Manager</h2>
            <p className="text-lg md:text-start text-center mb-4"><strong>Technologies:</strong> MERN (MongoDB, Express.js, React.js, Node.js)</p>
            <p className="md:text-start text-center mb-6">
              Created a secure password manager application that enables users to store and manage their passwords securely.
              Implemented encryption for data security and user authentication for access control.
            </p>
            <a href="https://github.com/psycho-70" target="_blank" className='flex  md:justify-start justify-center  pb-3' rel="noopener noreferrer">
              <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'         
>
                See our other projects
              </button>
            </a>
          </div>
        </div>
        <div className="line h-[1px] bg-white w-full"></div>

     
        </>
  );
};

export default Project;
