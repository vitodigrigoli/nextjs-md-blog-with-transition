import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion"
import type { AppProps } from "next/app"
import "normalize.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import { animations } from "../lib/animations"
import "../styles/globals.css"
import CookieConsent from "react-cookie-consent";
import Script from 'next/script'




const bannerText = {
    title: "Il tuo sostegno è importante",
    text: "Acquista i prodotti Kammarata su Sicani Solidale Shop. Il ricavato sarà devoluto alla costruzione del centro diurno “La casa di Stefy” dove i nostri ragazzi potranno passare il tempo impegnati in diverse attività di gruppo. Abbiamo fatto molto, ma con il tuo aiuto possiamo fare di più.",
    link: "https://www.sicanisolidaleshop.com/"
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const anim_type = 2;
  const animation = animations[anim_type];
  const exitBefore = true;

  return (
    <div>
      <div className="ui-wrap">
          <Script
              src="//cdn.iubenda.com/cs/ccpa/stub.js"
              strategy="beforeInteractive"
          />

        <Script
            id={'iubenda'}
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                  __html: `
                        var _iub = _iub || [];
_iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"ccpaApplies":true,"consentOnContinuedBrowsing":false,"enableCcpa":true,"floatingPreferencesButtonDisplay":"bottom-right","invalidateConsentWithoutLog":true,"perPurposeConsent":true,"siteId":2645131,"whitelabel":false,"cookiePolicyId":65568793,"lang":"it", "banner":{ "acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#3b7480","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","backgroundOverlay":true,"closeButtonDisplay":false,"customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#dadadaB5","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"float-bottom-center","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#3b7480","rejectButtonDisplay":true,"textColor":"#000000" }};
          `,}}
        />

          <Script
              src="//cdn.iubenda.com/cs/ccpa/stub.js"
              strategy="afterInteractive"
          />

          <Script
              src="//cdn.iubenda.com/cs/iubenda_cs.js"
              strategy="afterInteractive"
              charSet="UTF-8"
              async
          />

        <Navbar />
      </div>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={exitBefore} >
          <m.div
            key={router.route.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >

            <Component {...pageProps} />
              <Banner title={bannerText.title} text={bannerText.text} link={bannerText.link} withButton />
              <Footer/>
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
export default MyApp;
