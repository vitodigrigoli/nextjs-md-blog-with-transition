import Hero from '../components/Hero'
import Banner from '../components/Banner'
import VerticalSlider from "../components/VerticalSlider";
import Posts from "../components/Posts";
import img from "../public/referal.jpg";
import Footer from "../components/Footer";
import Focuses from "../components/Focuses";

const HeroText = {
	title: 'Lorem ipsum dolor <span class="orange">sit amet</span> [25]',
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const bannerText = {
	title: "Lorem ipsum dolor sit amet [25]",
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const verticalSliderText = {
	title: 'Lorem ipsum dolor <span class="orange">sit amet</span> [25]',
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const postText = {
	title: 'Lorem ipsum dolor <span class="yellow">sit amet</span> [25]',
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const posts = [
	{
		title: 'Lorem ipsum dolor <span class="yellow">sit amet Teatro</span> [25]',
		text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
		img: "./referal.jpg",
		link: "/teatro"
	},

	{
		title: 'Lorem ipsum dolor <span class="yellow">sit amet Sport</span> [25]',
		text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
		link: "/teatro",
		img: "./referal.jpg",
	},

	{
		title: 'Lorem ipsum dolor <span class="yellow">sit amet Festival</span> [25]',
		text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]",
		link: "/teatro",
		img: "./referal.jpg",
	},
];

const focuses = {
	title: 'Lorem ipsum dolor sit amet25]',
	list: [
		{
			title: "Laboratorio #1",
			text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]"
		},
		{
			title: "Laboratorio #2",
			text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]"
		},
		{
			title: "Laboratorio #3",
			text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]"
		},
		{
			title: "Laboratorio #4",
			text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [150]"
		},
	]
}

export default function Index() {
	return (
		<>
			<Hero title={HeroText.title} text={HeroText.text} media={'/loop.mp4'} isVideo />
			<Banner title={bannerText.title} text={bannerText.text} withButton />
			<VerticalSlider title={verticalSliderText.title} text={verticalSliderText.text} withButton />
			<Posts posts={posts}/>
			<Focuses title={focuses.title}  focuses={focuses.list}/>
			<VerticalSlider title={verticalSliderText.title} text={verticalSliderText.text} withButton />
			<Banner title={bannerText.title} text={bannerText.text} withButton />

		</>
	);
}
