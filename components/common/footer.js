'use client';
import Image from 'next/image';
import { NavLinksList } from '@/lib/navLinksList';
import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n';
import React,{ useEffect, useState } from 'react';
import { MdHealthAndSafety,MdSwitchAccount } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaGithub,FaTelegramPlane,FaYoutube } from "react-icons/fa";
import { BiSolidBookAlt } from "react-icons/bi";

import { FooterList } from '@/lib/footerList';

export default function Footer() {
	const pathname = usePathname();
	const [langName, setLangName] = useState(defaultLocale);
	const [linkList, setLinkList] = useState("");

	useEffect(() => {
		const fetchLinksList = async () => {
			if (pathname === '/') {
				setLangName(defaultLocale);
			} else {
				setLangName(pathname.split('/')[1]);
			}
			setLinkList(FooterList[`LINK_${langName.toUpperCase()}`] || "");
		};
		fetchLinksList();
	}, [pathname, langName]);

	return (
		<footer className='w-full px-5 py-10 bg-[#202020] text-[#f7f7f7] '>
			<div className='max-w-[1024px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-2 text-sm'>
				<div className='flex flex-col items-center md:items-start'>
					<a 
						aria-label='landing page template'
						className='flex items-center mb-3'
						title='landing page template'
						href={`/${langName}`}
					>
						<Image
							width={200}
							height={200}
							src={'logo.png'}
							className='transition-all hover:scale-110 w-6 md:w-10 h-6 md:h-10'
							alt='logo'
						></Image>
						<h2 className='ml-3 font-bold leading-5'>Pizza Chrome</h2>
					</a>
					<div className='flex flex-wrap justify-center gap-x-2 md:gap-x-5 gap-y-1'>
						<a target='_blank' href="https://x.com/pizzatool3">{React.createElement( FaXTwitter,{ className: 'text-base' })}</a>
						<a href="#">{React.createElement( AiOutlineDiscord,{ className: 'text-base' })}</a>
						<a target='_blank' href="https://github.com/PizzaTool">{React.createElement( FaGithub,{ className: 'text-base' })}</a>
						<a target='_blank' href="https://t.me/pizzatool">{React.createElement( FaTelegramPlane,{ className: 'text-base' })}</a>
						<a target='_blank' href="https://www.youtube.com/@pizzaTool3">{React.createElement( FaYoutube,{ className: 'text-base' })}</a>
						<a target='_blank' href="https://docs.pizzachrome.org">{React.createElement( BiSolidBookAlt,{ className: 'text-base' })}</a>
					</div>
				</div>

				<p>
					{linkList}
				</p>
			</div>
		</footer>
	);
}
