import Hero from "../components/Hero";
import cover from "../public/referal.jpg";
import Banner from "../components/Banner";
import Focuses from "../components/Focuses";
import Gallery from "../components/Gallery";


const HeroText = {
	title: 'I nostri <span class="orange">Festival</span> [25]',
	text: "I Festival sono i momenti dove amiamo metterci in gioco in prima persona, tutti insieme come una comunità. Tramite le attività che proponiamo, interagiamo con gli altri, in maniera autonoma e consapevole. Solo così può esserci una vera crescita e un vero inserimento sociale."
}

const bannerText = {
	title: "Lorem ipsum dolor sit amet [25]",
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const focuses = {
	title: 'Lorem ipsum dolor sit amet [25]',
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

const galleryText = {
	title: 'Lorem ipsum dolor sit amet [25]',
	images: [
		{
			original: cover.src,
			thumbnail: cover.src,
		},
		{
			original: cover.src,
			thumbnail: cover.src,
		},
		{
			original: cover.src,
			thumbnail: cover.src,
		},
		{
			original: cover.src,
			thumbnail: cover.src,
		},
		{
			original: cover.src,
			thumbnail: cover.src,
		},
		{
			original: cover.src,
			thumbnail: cover.src,
		},
		{
			original: cover.src,
			thumbnail: cover.src,
		},
		{
			original: cover.src,
			thumbnail: cover.src,
		},
	]
}



export default function Festival(){
	return(
		<>
			<Hero title={HeroText.title} text={HeroText.text} media={cover} />
			<Banner title={bannerText.title} text={bannerText.text} withButton />
			<Focuses title={focuses.title}  focuses={focuses.list}/>
			<Gallery title={galleryText.title} images={galleryText.images} />
		</>
	)
}