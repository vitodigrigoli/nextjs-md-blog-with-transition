export default function Focuses({title, focuses}){
	return(
		<section className={`focuses`}>
			<h2>{title}</h2>
			<div className="container">
				{
					focuses.map( (focus, key) => {
						return(
							<div key={key} className="focus">
								<h3 className={`text-fade`}>{focus.title}</h3>
								<p className="dash dash--blue">{focus.text}</p>
							</div>
							)
				})}
			</div>
		</section>
	)
}