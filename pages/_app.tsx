import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion"
import type { AppProps } from "next/app"
import "normalize.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import { animations } from "../lib/animations"
import "../styles/globals.css"

const bannerText = {
    title: "Il tuo sostegno è importante",
    text: "Acquista i prodotti Kammarata su Sicani Solidale Shop. Il ricavato sarà devoluto alla costruzione del centro diurno “La casa di Stefy” dove i nostri ragazzi potranno passare il tempo impegnati in diverse attività di gruppo. Abbiamo fatto molto, ma con il tuo aiuto possiamo fare di più.",
    link: "https://www.sicanisolidaleshop.com/"
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const anim_type = 2;
  const animation = animations[anim_type];
  const exitBefore = true;

  console.log('exit before ',exitBefore)
  return (
    <div>
      <div className="ui-wrap">
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
