import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.sass'
import ColorSwitch from './../components/Landing/ColorSwitch'
import Landing from './../components/Landing/Landing'
import TimelineInstance from "./../components/Timeline/TimelineInstance"
import { SVGWavesTop, SVGWavesBottom } from "./../components/SVGs"
import SkillsListInstance from '../components/SkillsList/SkillsListInstance'
//import Projects from '../components/Projects'

export default function Home() {
  const [theme, setTheme] = useStickyState("sky", "theme")
  //let defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const chevronDest = useRef(null)
  const scrollThere = ref => ref.current.scrollIntoView()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    theme && <div className={styles.App} data-theme={theme} >
      <Head>
        <title>Joel</title>
      </Head>
      <ColorSwitch setTheme={setTheme} />
      
      <Landing chevronDest={() => scrollThere(chevronDest)} />
      {SVGWavesTop}

      <div className={styles.Content} ref={chevronDest}>

        <p className={styles.Title}>School &amp; Work Experience</p>
        <TimelineInstance/>

        {/*
        <p className={styles.Title}>Projects</p>
        <Projects/>
        */}

        <p className={styles.Title}>My Skills</p>
        <SkillsListInstance/>

      </div>
      
      {SVGWavesBottom}
      <div className={styles.PageEnd}>
        <p onClick={scrollToTop} className={styles.ScrollToTop}>
          nowhere to go but up {ArrowUp}
        </p>
      </div>
    </div>
  );
}

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue) {
      setValue(stickyValue);
    } else {
      setValue(defaultValue)
    }
  }, [key, defaultValue]);

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

const ArrowUp = (
  <svg width="24px" viewBox="0 0 512 512" style={{ marginBottom: "-4px" }}>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="88" d="M112 244l144-144 144 144M256 120v292"/>
  </svg>
)