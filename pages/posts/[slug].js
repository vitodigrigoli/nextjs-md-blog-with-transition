import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link'
import Hero from "../../components/Hero";



export default function PostPage({
																	 frontmatter: { title, date, cover_image, excerpt },
																	 slug,
																	 content,
																 }) {
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