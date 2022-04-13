import Button from  './Button'

export default function Banner({title, text, link, withButton}){
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
					<Button text="Aiutaci ora" link={link} isLight />
				</div>
			}
		</section>
	)
}