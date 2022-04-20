import Hero from "../components/Hero";
import cover from "../public/contatti-1.jpg";
import Banner from "../components/Banner";
import Form from "../components/Form";
import {useState} from "react";


const HeroText = {
	title: 'I nostri <span class="orange">Contatti</span>',
	text: "Se vuoi saperne di più sulla nostra storia, la nostra realtà e i nostri obiettivi, non esitare a contattarci!"
}

const bannerText = {
	title: "Lorem ipsum dolor sit amet [25]",
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const formText = {
	title: "Lorem ipsum dolor sit amet [25]",
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}



export default function Contatti(){

	const [email, setEmail] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleSubmit = ( event ) =>{
		event.preventDefault()

		console.log("il messaggio è stato inviato correttamente")
		console.table(email)

		setEmail({
			name: '',
			email: '',
			message: '',
		})
	}

	const handleChange = ( event ) =>{
		event.persist()

		setEmail({
			...email,
			[event.target.name]: event.target.value
		})
	}


	return(
		<>
			<Hero title={HeroText.title} text={HeroText.text} media={cover} />
			<Form title={formText.title} data={email} handleChange={handleChange} handleSubmit={handleSubmit}/>
		</>
	)
}