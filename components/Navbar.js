import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo-arca.png'
import {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive'

export default function Navbar(){

	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
	const [isOpen, setIsOpen] = useState( false )

	const toggleMenu = () =>{
		setIsOpen( !isOpen )
	}

	return(
		<nav className='navbar'>
			<div className="container">
				{isTabletOrMobile &&
					<div className="navbar__icon" onClick={toggleMenu}>
						<div className="navbar__icon__open" >Menu</div>
					</div>
				}

				<div className='navbar__logo'>
					<Image src={logo}	alt="logo arca"/>
				</div>
				<div className={`navbar__menu ${ isTabletOrMobile && "navbar__menu--mobile"} ${ isOpen && "navbar__menu--mobile--open"}`}>
					<ul>
						<li><Link href="/"><a onClick={toggleMenu}>Homepage</a></Link></li>
						<li><Link href="/progetti"><a onClick={toggleMenu}>Progetti</a></Link></li>
						<li><Link href="/teatro"><a onClick={toggleMenu}>Teatro</a></Link></li>
						<li><Link href="/sport"><a onClick={toggleMenu}>Sport</a ></Link></li>
						<li><Link href="/festival"><a onClick={toggleMenu}>Festival</a></Link></li>
						<li><Link href="/contatti"><a onClick={toggleMenu}>Contatti</a></Link></li>
					</ul>
				</div>
				<div className='navbar__cta'>
					<Link href='/'>
						<a className="button">Fai una donazione</a>
					</Link>
				</div>
			</div>
		</nav>
	)
}