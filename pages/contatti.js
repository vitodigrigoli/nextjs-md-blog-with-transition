import Hero from "../components/Hero";
import cover from "../public/contatti-1.jpg";
import Banner from "../components/Banner";
import Form from "../components/Form";
import {useState} from "react";
import Head from "next/head";


const HeroText = {
	title: 'I nostri <span class="orange">Contatti</span>',
	text: "Se vuoi saperne di più sulla nostra storia, la nostra realtà e i nostri obiettivi, non esitare a contattarci!"
}

const bannerText = {
	title: "Lorem ipsum dolor sit amet [25]",
	text: "Vestibulum porttitor nisl eget nulla vulputate, a maximus dolor ultricies. Cras ut nulla nec turpis porttitor dictum. Ut id dictum erat. [250]"
}



export default function Contatti(){



	return(
		<>
			<Head>
				<title>Contatti</title>
				<meta name="description" content="Se vuoi saperne di più sulla nostra storia, la nostra realtà e i nostri obiettivi, non esitare a contattarci!"/>
				<meta property="og:title"              content="I nostri Contatti" />
				<meta property="og:description"        content="Se vuoi saperne di più sulla nostra storia, la nostra realtà e i nostri obiettivi, non esitare a contattarci!" />
				<meta property="og:image"              content={cover} />
				<script type="text/javascript">{`
					var _iub = _iub || [];
					_iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"enableCcpa":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"perPurposeConsent":true,"siteId":2645131,"whitelabel":false,"cookiePolicyId":65568793,"lang":"it", "banner":{"acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#3b7480","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","backgroundOverlay":true,"closeButtonDisplay":false,"customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#dadadaB5","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-center","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#3b7480","rejectButtonDisplay":true,"textColor":"#000000"}};
				`}
				</script>
				<script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"/>
				<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charSet="UTF-8" />
			</Head>
			<Hero title={HeroText.title} text={HeroText.text} media={cover} />
			<Form />
		</>
	)
}