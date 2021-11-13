import {
  AnimatePresence,
  domAnimation, LazyMotion,
  m
} from "framer-motion"
import type { AppProps } from "next/app"
import "normalize.css"
import { useState } from "react"
import AnimSwitcher from "../components/AnimSwitcher"
import Navbar from "../components/Navbar"
import { animations } from "../lib/animations"
import "../styles/globals.css"


function MyApp({ Component, pageProps, router }: AppProps) {
  const startIndex = 2;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(true);

  console.log('exit before ',exitBefore)
  return (
    <div className="app-wrap">
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
