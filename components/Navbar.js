import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo-arca.png'
import {useEffect, useState} from "react";
import { useMediaQuery } from 'react-responsive'

export default function Navbar(){

	const [isOpen, setIsOpen] = useState( false )

	const toggleMenu = () =>{
		setIsOpen( !isOpen )
	}


	return(
		<nav className='navbar'>
			<div className="container">
					<div className="navbar__icon">
						<div className={`navbar__icon__bars ${isOpen ? 'navbar__icon__bars--active' : ''}`} onClick={toggleMenu}><span id="bar-1"/><span id="bar-2"/></div>

					</div>
				<div className='navbar__logo'>
					<Image src={logo}	alt="logo arca"/>
				</div>
				<div className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`} >
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