import Link from 'next/link'
import Image from 'next/image'
import Button from "./Button";

export default function Panel({img, alt_img, link, text_link, title, text, isRevers}) {

	return(
		<div className={`panel ${isRevers? 'panel--reverse' : ''} `} >
			<div className="container">
				<div className="panel__text">
					<div className="wrapper">
						<h2 dangerouslySetInnerHTML={ {__html: title}}/>
						<div dangerouslySetInnerHTML={ {__html: text}}/>
						<Button text={text_link} link={link} isLight/>
					</div>
				</div>
				<div className="panel__image">
					<Image src={img} alt={alt_img} layout="fill" objectFit="contain"/>
				</div>
			</div>

		</div>
	)
}