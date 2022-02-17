import Link from 'next/link'
import Image from 'next/image'
import Button from "./Button";

export default function Post({img, alt_img, link, title, text, isRevers}) {

return(
	<div className={`post container ${isRevers? 'post--reverse' : ''} `} >
		<div className="post__image">
			<img src={img} alt={alt_img}/>
		</div>
		<div className="post__text">
			<div className="wrapper">
				<h2 dangerouslySetInnerHTML={ {__html: title}}/>
				<p className="dash dash--blue">{text}</p>
				<Button text="Scopri di più" link={link} isLight/>
			</div>
		</div>
	</div>
)
}