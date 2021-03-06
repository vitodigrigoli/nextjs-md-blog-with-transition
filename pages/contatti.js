import Hero from "../components/Hero";
import cover from "../public/contatti-1.jpg";
import Banner from "../components/Banner";
import Form from "../components/Form";
import {useState} from "react";
import Head from "next/head";


const HeroText = {
	title: 'I nostri <span class="orange">Contatti</span>',
	text: "Se vuoi saperne di più sulla nostra storia, la nostra realtà e i nostri obiettivi, non esitare a contattarci!"
}

const bannerText = {
	title: "Lorem ipsum dolor sit amet [25]",
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}



export default function Contatti(){



	return(
		<>
			<Head>
				<title>Contatti</title>
				<meta name="description" content="Se vuoi saperne di più sulla nostra storia, la nostra realtà e i nostri obiettivi, non esitare a contattarci!"/>
				<meta property="og:title"              content="I nostri Contatti" />
				<meta property="og:description"        content="Se vuoi saperne di più sulla nostra storia, la nostra realtà e i nostri obiettivi, non esitare a contattarci!" />
				<meta property="og:image"              content={cover} />
			</Head>
			<Hero title={HeroText.title} text={HeroText.text} media={cover} />
			<Form />
		</>
	)
}