import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-[#5CDB95]'>
        <div className='h-full flex flex-col justify-center items-center mx-auto max-w-[1000px]'>
            <div className='text-4xl font-semibold'>
                <h1 className='border-b-4 border-[#05386B]'>About</h1>
            </div>
            <div className='px-4 mt-4'>
                <span className='font-semibold'>Hey, everyone!</span>
                <p className='my-2 font-semibold'>
                        I'm Abhinesh Sharma from India. I am a undergraduate student who loves Computer, Mathamatics and History.
                </p>
                <p className=''>
                        During the end of high school, i got interest in geo-politics whoch makes me study history of through out world cause geo-politics are just history repeating itself in form human nature. As Time pass, i deep dive the history ocean.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
