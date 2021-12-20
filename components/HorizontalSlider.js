import {useEffect} from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSlider({title, slides}){

	useEffect( () => {
		let sections = gsap.utils.toArray(".panel");

		gsap.to(sections, {
			xPercent: -100 * (sections.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: ".container2",
				pin: true,
				scrub: 0,
				snap: 1 / (sections.length - 1),
				// base vertical scrolling on how wide the container is so it feels more natural.
				end: "+=2400",
			}

		});
	})

	return(
		<div className="container2">
			<div className="description panel blue">

				<div className="panel__text">
					<h2>{title}</h2>
					<p>Scroll vertically to scrub the horizontal animation. It also dynamically snaps to the sections in an
						organic way based on the velocity.</p>
					<div className="scroll-down">Scorri per scoprire di più
						<div className="arrow"/>
					</div>
				</div>
			</div>

			{
				slides.map( (slide, i) => {
					return(
						<section className="panel red" key={i}>
							<div className="panel__text">
								<h3>{slide.title}</h3>
								<p>{slide.text}</p>
							</div>

						</section>
					)
				})
			}
		</div>
	)
}




/*
export default function HorizontalSlider({title, slides}){
	let el = useRef(null);
	let tr = useRef(null)

	useEffect(() => {

		let q = gsap.utils.selector(el)
		const tl2 = gsap.timeline()
		tl2.add("h-start")
			.to(q(".h-slider__slide"), {
			xPercent: -100 * (slides.length - 1),
			ease: "none",
			scrollTrigger: {
				trigger: el,
				start: "top center",
				scrub: true,
				markers: true,
				end: () => "+=" + "4000"
			}

		}, "h-start")
	}, [slides.length]);

	return(
		<section className="h-slider" ref={tr}>
			<div className="h-slider__container">
				<h2>{title}</h2>
				<div className="wrapper" ref={e =>{ el = e}}>
					{
						slides.map( (slide, i)  => {
							return(
								<div className="h-slider__slide" key={i} >
									<h3>{slide.title}</h3>
									<p>{slide.text}</p>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}
*/
