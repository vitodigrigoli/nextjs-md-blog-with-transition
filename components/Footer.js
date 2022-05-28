import Image from 'next/image'
import logo from '../public/logo-arca.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";



export default function Footer(){
	return(
		<footer className="footer" id={"contatti"}>
			<div className="container">
				<div className="footer__logo">
					<Image src={logo}	alt="logo arca"/>
				</div>

				<div className="footer__info">
					<h3>Dove trovarci</h3>
					<p>Via Maria S.S. Cacciapensieri, 75</p>
					<p>Cammarata (AG)</p>
				</div>

				<div className="footer__info">
					<h3>Sostienici</h3>
					<p>5 X MILLE - C.F. 93037270845</p>
					<p>IT19C 08952 82860 000000 500234</p>
					<p><Link href="https://gofund.me/27ba76e1"><a>Scopri la raccolta fondi</a></Link></p>
				</div>

			<div className="footer__info">
				<h3>Contattaci</h3>
				<p><a href="mailto:info@arcacammarata.org">info@arcacammarata.org</a></p>
				<p>Telefono: <a href="tel:3282160181">328 216 0181</a></p>
				<p>
					<a href="https://www.facebook.com/Associaz%C3%ACone-LArca-1023082317760007" className="social-icon"><FontAwesomeIcon icon={faFacebook}/></a>
					<a href="https://www.instagram.com/associazionelarca/" className="social-icon"><FontAwesomeIcon icon={faInstagram}/></a>
				</p>
			</div>
		</div>

			<div className="subfooter container">
				<div className="subfooter__credit">
					<p>Made with <FontAwesomeIcon icon={faHeart}  /> by <a href="https://geforge.it/">GeForGe</a></p>
				</div>
				<div className="subfooter__policy">
					<p><a href="https://www.iubenda.com/privacy-policy/65568793">Privacy</a> - <a href="https://www.iubenda.com/privacy-policy/65568793/cookie-policy">Cookie</a></p>
				</div>
			</div>

		</footer>
	)
}