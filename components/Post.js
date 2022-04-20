import Link from 'next/link'
import Image from 'next/image'
import Button from "./Button";

export default function Post({img, alt_img, link, title, text, isRevers}) {

return(
	<div className={`post container ${isRevers? 'post--reverse' : ''} `} >
		<div className="post__image">
			<div className="wrapper">
				<Image src={img} alt={alt_img}  width="100%" height="70%" layout="responsive" objectFit="cover"/>
			</div>

		</div>
		<div className="post__text">
			<div className="wrapper">
				<Link href={link}><a>
					<h2 dangerouslySetInnerHTML={ {__html: title}}/>
					<p className="dash dash--blue">{text}</p>
				</a></Link>
				<Button text="Scopri di più" link={link} isLight/>
			</div>
		</div>
	</div>
)
}