import React from 'react'
import Math from './Assests/math.png';
import Forest from './Assests/forest.png';
import WebDev from './Assests/web_dev.png';

const Posts = () => {
    return (
        <div name='posts' className='w-full bg-[#5CDB95] pb-16'>
            <div className='pb-8 flex flex-col justify-center items-center w-full mx-auto max-w-[1000px]'>
                <h1 className='text-4xl font-semibold border-b-4 border-[#05386B]'>Posts</h1>
            </div>
            <section className='flex justify-center items-center pb-8'>
                <div className='grid md:grid-cols-3 gap-8'>
                    {/* Card-01-Begin */}
                    <div className='hover:scale-105 duration-500 shadow-lg max-w-[300px] w-full'>
                        <a href='/'>
                            <img src={Math} className='rounded-t-lg' />
                            <div className='bg-[#05386B] py-2 h-[250px] rounded-b-lg'>
                                <span className='text-[#EDF5E1] ml-2 font-bold'>Math</span>
                                <p className='text-[#EDF5E1] ml-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi velit quis officia. Nobis dicta dignissimos consequatur nam similique ducimus eveniet vel illum laborum aliquid earum sapiente, sint labore eius? Magnam, quae error.
                                </p>
                            </div>
                        </a>
                    </div>
                    {/* card-01-ends */}

                    {/* card-02-begins */}
                    <div className='hover:scale-105 duration-500 shadow-lg max-w-[300px] w-full'>
                        <a href='/'>
                            <img src={Forest} className='rounded-t-lg h-[200px]' />
                            <div className='bg-[#05386B] py-2 h-[250px] rounded-b-lg'>
                                <span className='text-[#EDF5E1] ml-2 font-bold'>Adventure</span>
                                <p className='text-[#EDF5E1] ml-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi velit quis officia. Nobis dicta dignissimos consequatur nam similique ducimus eveniet vel illum laborum aliquid earum sapiente, sint labore eius? Magnam, quae error.
                                </p>
                            </div>
                        </a>
                    </div>
                    {/* card-02-ends */}

                    {/* card-03-begin */}
                    <div className='hover:scale-105 duration-500 shadow-lg max-w-[300px] w-full'>
                        <a href='/'>
                            <img src={WebDev} className='rounded-t-lg h-[200px]' />
                            <div className='bg-[#05386B] py-2 h-[250px] rounded-b-lg'>
                                <span className='text-[#EDF5E1] ml-2 font-bold'>Light Raipur</span>
                                <p className='text-[#EDF5E1] ml-2'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi velit quis officia. Nobis dicta dignissimos consequatur nam similique ducimus eveniet vel illum laborum aliquid earum sapiente, sint labore eius? Magnam, quae error.
                                </p>
                            </div>
                        </a>
                    </div>
                    {/* card-03-ends */}
                </div>
            </section>
        </div>
    )
}

export default Posts
