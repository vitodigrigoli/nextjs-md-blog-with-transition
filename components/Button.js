import Link from 'next/link'

export default function Button({text, link, isLight}){
	return(
		<Link href={link}>
			<a className={`button ${isLight? 'button--light' : ''}`}>{text}</a>
		</Link>
	)
}