import React from 'react';
import Main from './Main'

const Header: React.FC = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-[#3f0f1a] via-[#3f0f1a] to-[#050116] w-full">
                <div className="p-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="absolute text-[3rem] top-[rem] left-[10.25rem] text-lg text-brown font-outfit font-semibold">
                        <span>Kal</span>
                        <span className="text-white">Tech</span>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 font-semibold ml-auto">
                        <a href="#" className="text-white text-lg no-underline font-poppins mt-2 md:mt-0">
                            Home
                        </a>
                        <a href="#" className="text-white text-lg no-underline font-poppins mt-2 md:mt-0">
                            About Us
                        </a>
                        <a href="#" className="text-white text-lg no-underline font-poppins mt-2 md:mt-0">
                            Contact Us
                        </a>
                    </div>
                </div>

                <div className='container'>
                    <h1 className='main-haeading'>
                        Transforming your ideas into innovative solutions
                    </h1>
                    <p className='main-para mb-5'>A full stack venture studio that provides end-to-end technical and marketing solutions specializing in startups to help them scale and optimise</p>

                    <button className='btn-danger main-btn'>Got in Touch</button>

                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='main-box1'>
                                <div className='flex flex-column gap-1 justify-content-center align-items-center'>
                                    <h4>30+</h4>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='main-box1'>
                                <div className='flex flex-column gap-1 justify-content-center align-items-center'>
                                    <h4>30+</h4>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='main-box1'>
                                <div className='flex flex-column gap-1 justify-content-center align-items-center'>
                                    <h4>30+</h4>
                                    <p>Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Main />


        </>
    );
};

export default Header;
