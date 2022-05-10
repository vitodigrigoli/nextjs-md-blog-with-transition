import Hero from "../components/Hero";
import cover from "../public/referal.jpg";
import Banner from "../components/Banner";
import Focuses from "../components/Focuses";
import Gallery from "../components/Gallery";
import cover_1 from "../public/festival/festival-1.jpg";
import cover_3 from "../public/festival/festival-3.jpg";
import cover_4 from "../public/festival/festival-4.jpg";
import cover_5 from "../public/festival/festival-5.jpg";
import cover_6 from "../public/festival/festival-6.jpg";
import cover_7 from "../public/festival/festival-7.jpg";
import cover_8 from "../public/festival/festival-8.jpg";
import cover_9 from "../public/festival/festival-9.jpg";
import cover_10 from "../public/festival/festival-10.jpg";
import Head from "next/head";



const HeroText = {
	title: 'I nostri <span class="orange">Festival</span>',
	text: "I Festival sono i momenti dove amiamo metterci in gioco in prima persona, tutti insieme come una comunità."
}

const bannerText = {
	title: "L'integrazione è fondamentale",
	text: "Tramite le attività che proponiamo, interagiamo con gli altri, in maniera autonoma e consapevole. Solo così può esserci una vera crescita e un vero inserimento sociale."
}

const focuses = {
	title: 'Finalità dei festival',
	list: [
		{
			title: "Coordinazione motoria",
			text: "Migliorare la capacità di coordinazione dinamica generale, unitamente a quella senso-percettiva, visiva e uditiva relativamente all'organizzazione del movimento."
		},
		{
			title: "Trasmettere emozioni",
			text: "Potenziare la capacità di espressione artistica (di ballo, musicale, canora) scoprendo e valorizzando le tradizioni popolari."
		},
		{
			title: "Divertirsi insieme",
			text: "Garantire momenti di svago e sano divertimento coinvolgendo anche i familiari nell'esperienza artistica."
		},
		{
			title: "Integrazione",
			text: "Aiutare a stimolare il raggiungimento delle autonomie in un clima di solidarietà e integrazione fra disabili e normodotati."
		},
	]
}

const gallery = [
	{
		original: cover_1.src,
		thumbnail: cover_1.src,
	},

	{
		original: cover_3.src,
		thumbnail: cover_3.src,
	},

	{
		original: cover_4.src,
		thumbnail: cover_4.src,
	},

	{
		original: cover_5.src,
		thumbnail: cover_5.src,
	},
	{
		original: cover_6.src,
		thumbnail: cover_6.src,
	},
	{
		original: cover_7.src,
		thumbnail: cover_7.src,
	},
	{
		original: cover_8.src,
		thumbnail: cover_8.src,
	},
	{
		original: cover_9.src,
		thumbnail: cover_9.src,
	},
	{
		original: cover_10.src,
		thumbnail: cover_10.src,
	},
]



export default function Festival(){
	return(
		<>
			<Head>
				<title>Festival</title>
				<meta name="description" content="I Festival sono i momenti dove amiamo metterci in gioco in prima persona, tutti insieme come una comunità."/>
				<meta property="og:title"              content="I nostri Festival" />
				<meta property="og:description"        content="I Festival sono i momenti dove amiamo metterci in gioco in prima persona, tutti insieme come una comunità." />
				<meta property="og:image"              content={cover_1} />
				<script type="text/javascript">{`
					var _iub = _iub || [];
					_iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"enableCcpa":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"perPurposeConsent":true,"siteId":2645131,"whitelabel":false,"cookiePolicyId":65568793,"lang":"it", "banner":{"acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#3b7480","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","backgroundOverlay":true,"closeButtonDisplay":false,"customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#dadadaB5","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-center","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#3b7480","rejectButtonDisplay":true,"textColor":"#000000"}};
				`}
				</script>
				<script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"/>
				<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" async/>
			</Head>
			<Hero title={HeroText.title} text={HeroText.text} media={cover_6.src} />
			<Banner title={bannerText.title} text={bannerText.text} />
			<Focuses title={focuses.title}  focuses={focuses.list}/>
			<Gallery images={gallery} />
		</>
	)
}