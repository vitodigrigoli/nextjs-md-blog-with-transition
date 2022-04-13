import Link from 'next/link'

export default function Button({text, link, isLight, isWhite}){
	return(
		<Link href={link}>
			<a className={`button ${isLight? 'button--light' : ''} ${isWhite? 'button--white' : ''} `}>{text}</a>
		</Link>
	)
}