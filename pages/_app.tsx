import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion"
import type { AppProps } from "next/app"
import "normalize.css"
import Navbar from "../components/Navbar"
import { animations } from "../lib/animations"
import "../styles/globals.css"


function MyApp({ Component, pageProps, router }: AppProps) {
  const anim_type = 2;
  const animation = animations[anim_type];
  const exitBefore = false;

  console.log('exit before ',exitBefore)
  return (
    <div>
      <div className="ui-wrap">
        <Navbar />
      </div>
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={!exitBefore} >
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
          </m.div>
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
export default MyApp;
