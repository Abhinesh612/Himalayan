import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, 
        FaTimesCircle,
        FaInstagram,
        FaGithub,
        FaLinkedin 
                    } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navMobileSat = () => setNav(!nav);
    // ------------------------------------
    const checkId = document.getElementById("home-spot");
	console.log(checkId);	
    return (
        <div className='z-20 fixed top-0 h-[80px] w-full flex justify-between items-center bg-[#5CDB95] text-[#EDF5E1] shadow-xl'>
            <div className='ml-4 bg-[#05386B] px-4 py-3 rounded-md'>
                <span className='text-md font-bold block'>Abhinesh</span>
                {/* <span className='text-[12px]'>ops! I'm here.</span> */}
            </div>
            {/* Desktop Navbar */}

            
                <ul className='hidden md:flex items-center'>
                    <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link to='about' smooth={true} duration={500}>About</Link></li>
                    <li><Link to='posts' smooth={true} duration={500} offset={-100}>Posts</Link></li>
                    <li><Link to='contacts' smooth={true} duration={500}>Contacts</Link></li>
                </ul>
            

            {/* mobile-collapse-btn */}

            <div id='collapse-btn' onClick={navMobileSat} className='md:hidden mr-4 z-10'>
                { nav? <FaTimesCircle /> : <FaBars /> }
            </div>

            {/* Mobile Menu */}

            <div className={
                nav? 'absolute top-0 right-0 bg-[#5CDB95] flex flex-col justify-center items-center w-full h-screen shadow-xl' : 'hidden' 
            }>
                <ul>
                    <li className='py-4'><Link to='home' smooth={true} duration={500} onClick={navMobileSat}>Home</Link></li>
                    <li className='py-4'><Link to='about' smooth={true} duration={500} onClick={navMobileSat}>About</Link></li>
                    <li className='py-4'><Link to='posts' smooth={true} duration={500} onClick={navMobileSat} offset={-100}>Posts</Link></li>
                    <li className='py-4'><Link to='contacts' smooth={true} duration={500} onClick={navMobileSat}>Contacts</Link></li>
                </ul>
            </div>

            {/* side pop-up icons */}
            
            <div className='hidden xl:flex fixed flex-col left-0 top-[40%]'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-pink-500'>
                        <a href='/' className='flex justify-between items-center w-[150px]'>Instagram <FaInstagram size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-green-600'>
                        <a href='/' className='flex justify-between items-center w-[150px]'>Github <FaGithub size={30} /></a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-cyan-400'>
                        <a href='/' className='flex justify-between items-center w-[150px]'>LinkedIn <FaLinkedin size={30} /></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
