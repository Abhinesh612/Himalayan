import React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaLinkedin
} from 'react-icons/fa';
const Contacts = () => {
    return (
        <div name='contacts' className='h-[30vh] w-full bg-[#5CDB95]'>
            <div  className='h-full w-full flex flex-col justify-center items-center'>
                <span className='text-4xl font-semibold border-b-4 border-[#05386B]'>Contacts</span>
                <div className='h-full w-full flex justify-evenly items-center'>
                    <div className='flex flex-col items-center text-[#EDF5E1] text-lg font-semibold'>
                        <a href="https://github.com/Abhinesh612" target='_blank'>Github</a>
                        <a href="https://github.com/Abhinesh612" target='_blank'><FaGithub /></a>
                    </div>
                    <div className='flex flex-col items-center text-[#EDF5E1] text-lg font-semibold'>
                        <a href="https://github.com/Abhinesh612" target='_blank'>Instagram</a>
                        <a href="https://github.com/Abhinesh612" target='_blank'><FaInstagram /></a>
                    </div>
                    <div className='flex flex-col items-center text-[#EDF5E1] text-lg font-semibold'>
                        <a href="https://github.com/Abhinesh612" target='_blank'>LinkedIn</a>
                        <a href="https://github.com/Abhinesh612" target='_blank'><FaLinkedin /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
