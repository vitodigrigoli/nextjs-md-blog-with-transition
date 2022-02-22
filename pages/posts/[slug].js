import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import Hero from "../../components/Hero";
import {useEffect} from "react";
import Gallery from "../../components/Gallery";
import { FacebookProvider, Page } from 'react-facebook';

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
					<FacebookProvider appId="841024582960553">
						<Page href="https://www.facebook.com/Associaz%C3%ACone-LArca-1023082317760007" tabs="timeline" width="400" height="470"/>
					</FacebookProvider>
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