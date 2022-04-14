import image from "../public/img-slider.jpg";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {useEffect, useRef,  Children } from "react";
import Button from "./Button";
import {type} from "os";



gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 3})


export default function VerticalSlider({title, text, link, withButton, data}){

	let col_up = useRef(null)
	let col_down = useRef(null)
	let trigger = useRef(null)
	const media = Children.toArray(data)

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
	}, [media])

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
						{
							media.slice( 0, 3 ).map( ( media, i ) => {
								return(
									<div className="v-slider__images__img" key={i}>
										<Image src={media} alt="" width="100%" height="100%" layout="responsive" objectFit="cover"/>
									</div>
								)
							} )
						}
					</div>

					<div className="col" id="col-up" ref={el => {col_up = el}}>
						{
							media.slice( 3, 5 ).map( ( media, i ) => {
								return(
									<div className="v-slider__images__img" key={i}>
										<Image src={media} alt=""  width="100%" height="150%" layout="responsive" objectFit="cover"/>
									</div>
								)
							} )
						}
					</div>

				</div>
			</div>

		</section>
	)
}