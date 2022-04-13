import Image from "next/image";
import cover from '/public/referal.jpg'

export default function Form( {handleChange, handleSubmit, title, data} ){

	return(
		<section className="contact">
			<div className="container">
				<div className="contact__text">
					<div className="wrapper">
						<h2>Lascia le tue informazioni e <span className="orange">scrivici</span> liberamente</h2>
						<p className='dash dash--yellow'>Saremo lieti di metterci in contatto con te il prima possibile.</p>
					</div>
				</div>
				<form action="" className="contact__form" onSubmit={handleSubmit}>
					<input className="contact__form__input" name="name" value={data.name} type="text" placeholder={"Il tuo nome"} onChange={handleChange}/>
					<input className="contact__form__input" name="email" value={data.email}  type="text" placeholder={"La tua email"} onChange={handleChange} />
					<textarea className="contact__form__input contact__form__textarea" rows="7" cols="50" name="message" value={data.message}  type="textarea" placeholder={"Il tuo messaggio"} onChange={handleChange}/>
					<input type="submit" className={"button button--white"} value={"Invia ora"} />
				</form>
			</div>

		</section>

	)
}