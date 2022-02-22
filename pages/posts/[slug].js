import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import Hero from "../../components/Hero";
import {useEffect} from "react";
import Gallery from "../../components/Gallery";
import Image from 'next/image'
import cover from "../../public/referal.jpg";


const style={
	position: 'relative',
	width: "300px",
	height: "150px",
	border: '1px solid red'

}
export default function PostPage({
																	 frontmatter: { title, date, cover_image, excerpt, gallery },
																	 slug,
																	 content,
																 }) {
	let el = {}
	let g = []
	gallery.map( (image, key) => {
		el.original = image
		el.thumbnail = image
		g.push(el)
	})

	return (

		<>
			<Hero title={title} text={excerpt} media={cover_image} />
			<main className="article container">
				<article className="article__content">
					<div dangerouslySetInnerHTML={{ __html: marked(content) }}/>

				</article>

				<aside className="article__sidebar">
					Sidebar
				</aside>
			</main>
			<Gallery images={g}/>

		</>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'))

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('posts', slug + '.md'),
		'utf-8'
	)

	const { data: frontmatter, content } = matter(markdownWithMeta)

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	}
}