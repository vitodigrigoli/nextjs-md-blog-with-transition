import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo-arca.png'

export default function Navbar(){
	return(
		<nav className='navbar'>
			<div className="container">
				<div className='navbar__logo'>
					<Image src={logo}	alt="logo arca"/>
				</div>
				<div className='navbar__menu'>
					<ul>
						<li><Link href="/"><a>Homepage</a></Link></li>
						<li><Link href="/progetti"><a>Progetti</a></Link></li>
						<li><Link href="/teatro"><a>Teatro</a></Link></li>
						<li><Link href="/sport"><a >Sport</a ></Link></li>
						<li><Link href="/festival"><a>Festival</a></Link></li>
						<li><Link href="/contatti"><a>Contatti</a></Link></li>
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