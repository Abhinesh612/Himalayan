import React from 'react';
import Background from './Assests/wave.svg';
import Bottumwave from './Assests/waveBottum.svg';
const Home = () => {
	return (
		<div id='home-spot' name='home' className='bg-center bg-no-repeat h-screen w-full bg-[#5CDB95] bg-cover' style={{ backgroundImage: `url(${Background})`}}>
			<div className='w-full h-full'>
				<div className='text-[#EDF5E1] font-Zcool ml-[50px] md:ml-[150px] h-full mx-auto flex flex-col justify-center'>
					<h1 className='text-5xl md:text-7xl lg:text-9xl font-bold'>ABHINESH</h1>
					<h2 className='text-2xl md:text-3xl lg:text-4xl'>HIMALAYAN RANGER</h2>
				</div>
			</div>
		</div>
	)
}

export default Home
