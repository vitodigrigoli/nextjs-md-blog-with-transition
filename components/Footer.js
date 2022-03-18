import Image from 'next/image'
import logo from '../public/logo-arca.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";


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
				</div>

			<div className="footer__info">
				<h3>Contattaci</h3>
				<p><a href="mailto:info@arcacammarata.org">info@arcacammarata.org</a></p>
				<p>Telefono: <a href="tel:3310002115">331 000 2115</a></p>
				<p>
					<a href="" className="social-icon"><FontAwesomeIcon icon={faFacebook}/></a>
					<a href="" className="social-icon"><FontAwesomeIcon icon={faInstagram}/></a>
				</p>
			</div>
		</div>

			<div className="subfooter container">
				<div className="subfooter__credit">
					<p>Made with <FontAwesomeIcon icon={faHeart}  /> by <a href="https://geforge.it/">GeForGe</a></p>
				</div>
				<div className="subfooter__policy">
					<p><a href="">Privacy</a> - <a href="">Cookie</a></p>
				</div>
			</div>

		</footer>
	)
}