import Hero from "../components/Hero";
import Post from "../components/Post";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import cover from "../public/insieme-per-integrazione/integrazione-4.jpg"
import Head from "next/head";
import cover_1 from "../public/festival/festival-1.jpg";

const HeroText = {
	title: 'I nostri <span class="orange">Progetti</span>',
	text: "L’ARCA non si ferma mai! Tanti sono i progetti che abbiamo realizzato nel corso degli anni e tantissimi sono quelli che pensiamo e mettiamo su ogni anno. Tutto ciò, però, sarebbe impossibile senza il contributo di volontari, enti e privati. Aiutaci oggi stesso a realizzare il nostro sogno!"
}

export default function Progetti({posts}){
	return(
		<>
			<Head>
				<title>Progetti</title>
				<meta name="description" content="L’ARCA non si ferma mai! Tanti sono i progetti che abbiamo realizzato nel corso degli anni e tantissimi sono quelli che pensiamo e mettiamo su ogni anno."/>
				<meta property="og:title"              content="I nostri Progetti" />
				<meta property="og:description"        content="L’ARCA non si ferma mai! Tanti sono i progetti che abbiamo realizzato nel corso degli anni e tantissimi sono quelli che pensiamo e mettiamo su ogni anno." />
				<meta property="og:image"              content={cover} />
				<script type="text/javascript">{`
					var _iub = _iub || [];
					_iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"enableCcpa":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"perPurposeConsent":true,"siteId":2645131,"whitelabel":false,"cookiePolicyId":65568793,"lang":"it", "banner":{"acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#3b7480","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","backgroundOverlay":true,"closeButtonDisplay":false,"customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#dadadaB5","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-center","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#3b7480","rejectButtonDisplay":true,"textColor":"#000000"}};
				`}
				</script>
				<script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"/>
				<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async/>
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
	}).filter( (post) => post.frontmatter.category==='progetti' )

	return {
		props: {
			posts: posts.sort(sortByDate),
		},
	}
}