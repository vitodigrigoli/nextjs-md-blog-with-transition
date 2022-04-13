import image from "../public/img-slider.jpg";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {useEffect, useRef,} from "react";
import Button from "./Button";


gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 3})


export default function VerticalSlider({title, text, link, withButton}){

	let col_up = useRef(null)
	let col_down = useRef(null)
	let trigger = useRef(null)

	useEffect( () =>{

		const tl = gsap.timeline()

		ScrollTrigger.create({
			animation: tl,
			trigger: trigger,
			start: "top center",
			scrub: 3,
		})

		tl.add("start")
			.to(col_up, {yPercent: -80}, "start")
			.to(col_down, {yPercent: 80}, "start")
	}, [])

	return(
		<section className="v-slider" ref={el => {trigger = el}}>
			<div className="container">
				<div className="v-slider__text">
					<h2 dangerouslySetInnerHTML={ {__html: title}}/>
					<p className='dash dash--yellow'>{text}</p>
					{
						withButton &&	<Button text="Scopri di più" link={link} isWhite/>
					}
				</div>
				<div className="v-slider__images">

					<div className="col" id="col-down" ref={el => {col_down = el}}>
						<div className="v-slider__images__img">
							<Image src={image} alt="prova"/>
						</div>
						<div className="v-slider__images__img">
							<Image src={image} alt="prova"/>
						</div>
						<div className="v-slider__images__img">
							<Image src={image} alt="prova"/>
						</div>
					</div>

					<div className="col" id="col-up" ref={el => {col_up = el}}>
						<div className="v-slider__images__img">
							<Image src={image} alt="prova"/>
						</div>
						<div className="v-slider__images__img">
							<Image src={image} alt="prova"/>
						</div>
						<div className="v-slider__images__img">
							<Image src={image} alt="prova"/>
						</div>
					</div>

				</div>
			</div>

		</section>
	)
}