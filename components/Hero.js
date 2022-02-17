import Image from 'next/image'

export default function Hero({title, text, isVideo, media }){

	return(
		<header className="hero">
			<div className="container">
				<div className="hero__text">
					<h1 dangerouslySetInnerHTML={ {__html: title}}/>
					<p className="dash dash--yellow">{text}</p>
				</div>
			</div>

			<div className="hero__bg">
				{
					isVideo
					?
						<video id="video-bg" preload="auto" loop="loop" muted autoPlay>
							<source src={media} type="video/mp4"/>
						</video>
					: <Image src={media} alt="" layout='fill' objectFit="cover"/>
				}
			</div>
		</header>
	)
}