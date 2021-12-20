import Post from "./Post"
import img from "../public/referal.jpg";

export default function Posts({posts}){



	return(
		<section className="posts">
			{
				posts.map( (post, i) => {
					let isReverse = i % 2 !== 0
						return(
							<div key={i}>
								<Post img={post.img} link={post.link} title={post.title} text={post.text} isRevers={isReverse} />
							</div>
						)
					})
			}
		</section>
	)
}