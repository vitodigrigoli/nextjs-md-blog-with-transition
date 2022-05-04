import Hero from "../components/Hero";
import Post from "../components/Post";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import cover from "../public/piccolo-principe/piccolo-principe-9.jpg"
import {useEffect} from "react";
import Head from "next/head";
import cover_1 from "../public/festival/festival-1.jpg";

const HeroText = {
	title: 'I nostri <span class="orange">spettacoli</span> teatrali',
	text: "Il Teatro svolge un ruolo fondamentale nella nostra proposta formativa, con grande gioia e partecipazione dei nostri ragazzi e di tutta la comunità. Gli spettacoli sono divenuti ormai dei momenti imprescindibili di crescita umana e sociale."
}

export default function Teatro({posts}){
	useEffect(() => {
		console.log(posts)
	}, [posts])
	return(
		<>
			<Head>
				<title>Teatro</title>
				<meta name="description" content="Il Teatro svolge un ruolo fondamentale nella nostra proposta formativa, con grande gioia e partecipazione dei nostri ragazzi e di tutta la comunità"/>
				<meta property="og:title"              content="I nostri spettacoli teatrali" />
				<meta property="og:description"        content="Il Teatro svolge un ruolo fondamentale nella nostra proposta formativa, con grande gioia e partecipazione dei nostri ragazzi e di tutta la comunità" />
				<meta property="og:image"              content={cover} />
			</Head>
			<Hero title={HeroText.title} text={HeroText.text} media={cover} />
			<div className='posts'>
				{posts.map((post, index) => (
					<Post
						key={index}
						title={post.frontmatter.title}
						text={post.frontmatter.excerpt}
						img={post.frontmatter.cover_image}
						link={`posts/${post.slug}`}
					/>
				))}
			</div>
		</>
	)

}

export async function getStaticProps() {
	// Get files from the posts dir
	const files = fs.readdirSync(path.join('posts'))

	// Get slug and frontmatter from posts
	const posts = files.map((filename) => {
		// Create slug
		const slug = filename.replace('.md', '')

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8'
		)

		const { data: frontmatter } = matter(markdownWithMeta)

		return {
			slug,
			frontmatter,
		}
	}).filter( (post) => post.frontmatter.category==='teatro' )


	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	}
}