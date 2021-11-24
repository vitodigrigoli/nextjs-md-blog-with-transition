import Button from  './Button'

export default function Banner({title, text, withButton}){
	return(
		<section className="banner">
			<div className="container">
				<div className="banner__text">
					<h2>{title}</h2>
					<p>{text}</p>
				</div>
			</div>
			{
				withButton &&
				<div className="banner__cta">
					<Button text="Call to action" link="/" isLight/>
				</div>
			}
		</section>
	)
}