


export default function Popup( {text, toggleVisibility} ){
	return(

			<div className='popup'>
				<div className="popup__text container">
					<h2>{text}</h2>
					<button className="button" onClick={toggleVisibility}>Chiudi</button>
				</div>

			</div>


	)
}