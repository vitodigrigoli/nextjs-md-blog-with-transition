import Hero from "../components/Hero";
import cover from "../public/referal.jpg";
import Banner from "../components/Banner";
import Focuses from "../components/Focuses";
import Gallery from "../components/Gallery";


const HeroText = {
	title: 'Le nostre attività <span class="orange">sportive</span>',
	text: "Qui a L’ARCA lo sport è di casa. Siamo la prima associazione sportiva per disabili del territorio di Cammarata, San Giovanni Gemini e paesi limitrofi, anche per via della varità di attività che proponiamo a tutti i ragazzi dell’associazione."
}

const bannerText = {
	title: "Muoversi e conoscersi",
	text: "I soggetti con cui spesso ci troviamo a interagire hanno disabilità sul piano sensoriale, fisico e mentale, pertanto, attraverso diversi sport, andiamo a stimolare alcune aree della nuova persona. Lo sport è mettersi in gioco, è statre insieme, è conoscerci ed essere una squadra."
}

const focuses = {
	title: 'Alcune delle attività',
	list: [
		{
			title: "Giochi di squadra",
			text: "Consentono loro di stringere nuove amicizie, promuovendo l’altruismo e la sana competizione tra i ragazzi. Si inizia a comprendere il valore della collaborazione tra pari e si impara a condividere insieme le emozioni."
		},
		{
			title: "Nuoto",
			text: "Uno sport completo che sollecita l’insieme dei muscoli del corpo e che sviluppa la resistenza. Rappresenta, inoltre, un valido aiuto per quei ragazzi che presentano problemi di postura."
		},
		{
			title: "Calcetto",
			text: "Dal punto di vista educativo, il calcetto insegna ai ragazzi a giocare con gli altri rispettando delle regole e condividendo sconfitte e vittorie allo stesso modo."
		},
		{
			title: "Tennis da tavolo",
			text: "Detto anche ping pong, mette alla prova tutti i muscoli del corpo oltre che l'apparato riflesso-cognitivo. Questo sport è molto utile per potenziare soprattutto capacità di concentrazione e memoria dei ragazzi."
		},

	]
}

const gallery = [
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



export default function Sport(){
	return(
		<>
			<Hero title={HeroText.title} text={HeroText.text} media={cover} />
			<Banner title={bannerText.title} text={bannerText.text} />
			<Focuses title={focuses.title}  focuses={focuses.list}/>
			<Gallery images={gallery} />
		</>
	)
}