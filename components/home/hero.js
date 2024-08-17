'use client';
import HeroIcons from './icons';
import Image from 'next/image';
import './cartoon.css';
import { motion } from 'framer-motion';
import { SiGithub } from 'react-icons/si';
import { CgChevronRight } from "react-icons/cg";
import { IoDocumentText } from 'react-icons/io5';

import { useEffect, useState } from 'react';
export default function Hero({ locale, CTALocale }) {
	const [tilt, setTilt] = useState(45);
	const [duration, setDuration] = useState(0.8);
	const [systemInfo, setSystemInfo] = useState('');
	
	const [currentIndex, setCurrentIndex] = useState(0);
	const placeholders = ["Web2", "Web3"];
	const [isShow, setIsShow ] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const maxTilt = 45;
			const scrollY = window.scrollY;
			const tiltValue = Math.max(maxTilt - scrollY / 8, 0);
			setTilt(tiltValue);
			setDuration(0.3);
		};

		window.addEventListener('scroll', handleScroll);
		
		const getSystemInfo = () => {
			const userAgent = window.navigator.platform;
			console.log(userAgent)
			if(userAgent == "Mac68K" || userAgent == "MacPPC" || userAgent == "MacIntel"){
				setSystemInfo("Mac Intel");
			}else if(userAgent == "Linux i686" || userAgent == "Linux armv7l"){
				setSystemInfo("Linux");
			}else if(userAgent == "Win16" || userAgent == "Win32"){
				setSystemInfo("Windows");
			}else{
				setSystemInfo("Windows");
			}
		};
		getSystemInfo();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	
	useEffect(() => {
		const cycleNames = () => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
		};

		const intervalId = setInterval(cycleNames, 2000);

		return () => clearInterval(intervalId);
	}, [placeholders.length]);
	
	const handleClick = () => {
		setIsShow(!isShow)
	}
	
	const handleNavClick = (type) => {
		if(type == 1){  //windows
			window.open('https://github.com/PizzaTool/pizzachromewebsite/releases/')
		}else if(type == 2){  //Linux
			window.open('https://github.com/PizzaTool/pizzachromewebsite/releases/')
		}else if(type == 3){  //Mac Intel
			window.open('https://github.com/PizzaTool/pizzachromewebsite/releases/')
		}else if(type == 4){  //Mac M
			window.open('https://github.com/PizzaTool/pizzachromewebsite/releases/')
		}
	}

	return (
		<>
			<section
				className='relative z-10 flex flex-col items-start md:items-center py-10 md:py-20 overflow-hidden'
				style={{ perspective: '800px' }}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						delay: 0.2,
						duration: 1,
					}}
				>
					<h1 className='w-full mx-auto text-5xl md:text-5xl text-base-content/80 md:text-center font-medium mb-4'>{locale.h2}</h1>
					
					<span className='w-full mx-auto text-4xl text-base-content/80 flex justify-center font-medium mb-4'>
						{locale.h3}
						<span className="manage-placeholder">
							{placeholders.map((placeholder, index) => (
								<span key={index} className={`${index == 0?"face-style":"ebay-style"} ${index === currentIndex ? "manage-visible" : ""}`}>
									{placeholder}
								</span>
							))}
						</span>
					</span>
					<h3 className='w-full mx-auto text-xl text-base-content/80 md:text-center mb-3'>{locale.h4}</h3>
					<div className='w-full mx-auto text-xl text-sm text-base-content/80 md:text-center mb-3'>{locale.h5}</div>
					
					<div className={`relative ${isShow ? 'download-buttonS':'download-button'}` }>
						{systemInfo == "Windows"?<button className='download-link icon-win' onClick={() => handleNavClick(1)}>{locale.btn} {systemInfo}</button>:''}
						{systemInfo == "Mac Intel"?<button className='download-link icon-mac' onClick={() => handleNavClick(3)}>{locale.btn} {systemInfo}</button>:''}
						
						<button className='download-expand flex justify-center items-center' onClick={handleClick}><CgChevronRight className='text-xl' /></button>
						{isShow ? <div className="absolute top-14 left-0 z-50 border-solid border rounded-md border-slate-300 overflow-hidden">
							<button className='select-link w-full icon-mac' onClick={() => handleNavClick(4)}>{locale.btn} Mac M-Series</button>
							{systemInfo == "Mac Intel"?'':<button className='select-link w-full icon-mac' onClick={() => handleNavClick(3)}>{locale.btn} Mac Intel</button>}
							{systemInfo == "Windows"?'':<button className='select-link w-full icon-win' onClick={() => handleNavClick(1)}>{locale.btn} Windows</button>}
							
						</div> : <div></div>
						
						}
					</div>
					
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 100, rotateX: '0deg' }}
					animate={{ opacity: 1, y: 0, rotateX: `${tilt}deg` }}
					transition={{
						delay: duration == 0.8 ? 0.4 : 0,
						duration: duration,
					}}
					className='w-full mt-10'
				>
					<Image
						width={3198}
						height={1870}
						src={'og.png'}
						className='hidden md:flex w-full -mt-10'
						alt='app demo'
					/>
				</motion.div>
			</section>

			<div className='absolute w-[100%] left-[0] top-[10%] md:top-[20%] h-[300px]'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					id='patternId'
					width='100%'
					height='100%'
				>
					<defs>
						<pattern
							id='a'
							patternUnits='userSpaceOnUse'
							width='20'
							height='20'
							patternTransform='scale(3) rotate(0)'
						>
							<rect
								x='0'
								y='0'
								width='100%'
								height='100%'
								fill='hsla(0, 0%, 100%, 0)'
							></rect>
							<path
								d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'
								strokeWidth='0.5'
								className='stroke-base-content/50'
								fill='none'
							></path>
						</pattern>
					</defs>
					<rect
						width='800%'
						height='800%'
						transform='translate(0,0)'
						fill='url(#a)'
					></rect>
				</svg>
				<div className='bg-gradient-to-b from-base-100  from-20% to-transparent absolute inset-0 '></div>
				<div className='bg-gradient-to-l from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
				<div className='bg-gradient-to-r from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
				<div className='bg-gradient-to-t from-base-100  from-1% to-transparent to-30% absolute inset-0'></div>
			</div>
		</>
	);
}
