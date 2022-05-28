import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Popup from "./Popup";

export default function Form(){
	const form = useRef();

	const [email, setEmail] = useState({
		user_name: '',
		user_email: '',
		message: '',
	})

	const [popup, setPopup] = useState({
		isVisible: false,
		text: 'Il tuo messaggio è stato inviato correttamente! Ci faremo sentire al più presto.'
	})

	const toggleVisibility = () => setPopup({
		...popup,
		isVisible: !popup.isVisible
	})

	const handleChange = ( event ) =>{
		event.persist()

		setEmail({
			...email,
			[event.target.name]: event.target.value
		})
	}


	const sendEmail = (e) => {
		e.preventDefault();
		setPopup({
			isVisible: true,
			text: 'Attendere...'
		})
		emailjs.sendForm('service_2euenml', 'template_f1f3n7h', form.current, 'PbXRJyi9zSxWdig6I')
			.then((result) => {

				console.log(result.text);

				setEmail({
					user_name: '',
					user_email: '',
					message: '',

				})

				setPopup({
					isVisible: true,
					text: 'Il tuo messaggio è stato inviato correttamente! Ci faremo sentire al più presto.'
				})
			}, (error) => {
				console.log(error.text);

				setPopup({
					isVisible: true,
					text: 'Stiamo riscontrando problemi ad inviare il tuo messaggio. Riprova più tardi!'
				})
			});
	};

	return(
		<>
			<section className="contact">
				<div className="container">
					<div className="contact__text">
						<div className="wrapper">
							<h2>Lascia le tue informazioni e <span className="orange">scrivici</span> liberamente</h2>
							<p className='dash dash--yellow'>Saremo lieti di metterci in contatto con te il prima possibile.</p>
						</div>
					</div>
					<form action="" className="contact__form" ref={form} onSubmit={sendEmail}>
						<input className="contact__form__input" name="user_name" value={email.user_name} type="text" placeholder={"Il tuo nome"} onChange={handleChange}/>
						<input className="contact__form__input" name="user_email" value={email.user_email}  type="text" placeholder={"La tua email"} onChange={handleChange} />
						<textarea className="contact__form__input contact__form__textarea" type="textarea" rows="7" cols="50" name="message" value={email.message}   placeholder={"Il tuo messaggio"} onChange={handleChange}/>
						<input type="submit" className={"button button--white"} value={"Invia ora"} />
					</form>
				</div>
			</section>
			{ popup.isVisible && <Popup text={popup.text} toggleVisibility={toggleVisibility} />}
		</>


	)
}