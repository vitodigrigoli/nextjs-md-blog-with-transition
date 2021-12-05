import Post from "./Post"
import img from "../public/referal.jpg";

export default function Posts(){

	const posts = [
		{
			title: 'Lorem ipsum dolor <span class="yellow">sit amet Teatro</span> [25]',
			text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
			img: img,
			link: "/teatro"
		},

		{
			title: 'Lorem ipsum dolor <span class="yellow">sit amet Sport</span> [25]',
			text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
			link: "/teatro",
			img: img,
		},

		{
			title: 'Lorem ipsum dolor <span class="yellow">sit amet Festival</span> [25]',
			text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
			link: "/teatro",
			img: img,
		},
	];

	return(
		<section className="posts">
			{
				posts.map( (post, i) => {
					let isReverse = i % 2 === 0
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