import Hero from '../components/Hero'
import Banner from '../components/Banner'
import VerticalSlider from "../components/VerticalSlider";
import Posts from "../components/Posts";
import img from "../public/referal.jpg";
import Footer from "../components/Footer";
import Focuses from "../components/Focuses";

const HeroText = {
	title: 'Al fianco delle <span class="orange">diversità</span>',
	text: "Da più di 18 anni aiutiamo ragazzi e adulti con disabilità mentali, relazionali e fisiche a perseguire percorsi di autonomia individuale e integrazione sociale, grazie a laboratori, attività culturali, didattiche e formative. Perché la diversità è una ricchezza per tutti!"
}

const bannerText_1 = {
	title: "Una grande rete solidale",
	text: "Qui a L’ARCA si cresce ogni giorno tutti insieme! Non solo i ragazzi ma anche le loro famiglie, lo staff e i volontari imparano, un’attività alla volta, cosa vuol dire integrazione, crescita e consapevolezza individuale in un contesto sociale."
}

const bannerText_2 = {
	title: "La diversità è un dono da scoprire",
	text: "Qui a L’ARCA, ognuno dei ragazzi sa di poter trovare un luogo sicuro e confertovele dove poter avviare un percorso di crescità interiore e sociale, per divenire una persona autonoma e che si sappia relazionare con gli altri e il mondo esterno. La diversità va capita e ascoltata."
}

const verticalSliderText_1 = {
	title: 'Imparare <span class="orange">divertendosi</span>',
	text: "Ogni attività e laboratorio viene accuratamente pensato per mettere alla prova e sviluppare le capacità dei nostri ragazzi. Dall’artigianato al teatro, dalla musica alla cucina, qui a L’ARCA non ci si annoia mai!"
}

const verticalSliderText_2 = {
	title: '<span class="orange">Zimbardo-Luczo</span> Fund',
	text: "ZL Fund è da sempre uno strumento essenziale per lo sviluppo e la valorizzazione socio-culturale delle risorse umane ed è grazie al loro continuo supporto che abbiamo potuto realizzare nel corso degli anni tante attività per tutti i nostri ragazzi, aiutandoli a farli divenire ciò che sono oggi."
}

const postText = {
	title: 'Lorem ipsum dolor <span class="yellow">sit amet</span> [25]',
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}

const posts = [
	{
		title: 'Esprimersi con il <span class="yellow">teatro</span>',
		text: "Il teatro svolge un ruolo molto importante nella nostra proposta di sensibilizzazione e crescita individuale. Il palcoscenico diventa infatti un luogo magico dove, tramite la messa in scena, ci si mette in gioco e si prende coscienza di se stessi.",
		img: "./referal.jpg",
		link: "/teatro"
	},

	{
		title: 'Mens sana in corpore <span class="yellow">sano</span>',
		text: "La consapevolezza del proprio corpo e del movimento svolge un ruolo fondamentale nel percorso che intraprendiamo con i ragazzi. Tramite lo sport, a L’ARCA impariamo a relazionarci e a interagire con l’altro in maniera sana e costruttiva.",
		link: "/sport",
		img: "./referal.jpg",
	},

	{
		title: 'Insieme come una <span class="yellow">comunità</span>',
		text: "Durante le manifestazioni e i festival in cui ci esibiamo e prendiamo parte in maniera attiva, coinvolgiamo anche i famigliari e le persone vicine ai ragazzi in modo da poter educare e sensibilizzare sempre più persone, tramite momenti di svago e socialità.",
		link: "/festival",
		img: "./referal.jpg",
	},
];

const focuses = {
	title: 'I nostri laboratori',
	list: [
		{
			title: "Laboratorio Artistico",
			text: "Nei laboratori artistici viene sviluppata la creatività e la manualità. Più che il risultato finale qui conta il percorso mentale, di inventiva personale e di creazione."
		},
		{
			title: "Laboratorio Teatrale",
			text: "Un momento di educazione alla socialità e all’aggregazione dove sperimentare il proprio corpo e la forza espressiva di esso, in relazione con gli altri e lo spazio."
		},
		{
			title: "Laboratorio Motorio – Espressivo",
			text: "Il fine di questo laboratorio è quello di sviluppare la sensibilità musicale unitamente allo sviluppo di attività motorie tramite canti, balli e performance."
		},
		{
			title: "Laboratorio di Cucina",
			text: "Attraverso la collaborazione si imparano nuove metodologie volte all’autonomia anche in ambito domestico, il tutto in un clima sereno e confortevole."
		},
		{
			title: "Laboratorio Sportivo",
			text: "Tramite sessioni di allenamento e tornei, aiutiamo a riscoprire la dimensione del proprio corpo anche a soggetti con disabilità sensoriali o psico-motorie."
		},
	]
}

export default function Index() {
	return (
		<>
			<Hero title={HeroText.title} text={HeroText.text} media={'/loop.mp4'} isVideo />
			<Banner title={bannerText_1.title} text={bannerText_1.text} />
			<VerticalSlider title={verticalSliderText_1.title} text={verticalSliderText_1.text} withButton />
			<Posts posts={posts}/>
			<Focuses title={focuses.title}  focuses={focuses.list}/>
			<VerticalSlider title={verticalSliderText_2.title} text={verticalSliderText_2.text} withButton />
			<Banner title={bannerText_2.title} text={bannerText_2.text} withButton />
		</>
	);
}
