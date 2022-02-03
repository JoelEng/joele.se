import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.sass'
import ColorSwitch from './../components/Landing/ColorSwitch'
import Landing from './../components/Landing/Landing'
import TimelineInstance from "./../components/Timeline/TimelineInstance"
import SkillsList from "./../components/SkillsList"

import { CSSLogo, GitLogo, SVGWavesTop, SVGWavesBottom, JavaLogo, RustLogo, HaskellLogo, ReactLogo, JavaScriptLogo, HTMLLogo } from "./../components/SVGs"

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
      <ColorSwitch setTheme={setTheme} />
      
      <Landing chevronDest={() => scrollThere(chevronDest)} />
      {SVGWavesTop}

      <div className={styles.Content} ref={chevronDest}>

        <p className={styles.Title} style={{ marginBottom: "20px" }}>School & Work Experience</p>
        <TimelineInstance/>

        <p className={styles.Title}>My Skills</p>
        <SkillsList>
          <div src={GitLogo} alt="Git">
            I have used Git extensively in school and at work. I have learned branch management
            such as proper merging, along with lots of other useful information.
          </div>
          <div src={JavaLogo} alt="Java">
            My primary language of use, and the one I am most proficient in.
            Java has been used throughout my education in everything from concurrent
            programming to large projects.
          </div>
          <div src={RustLogo} alt="Rust">
            In publishing and graphic design, Lorem ipsum is a
            placeholder text demonstrate the visual form of a dasdlkjabs
            dlkjabslkd jbaslkdj balksd laskjbd kajsdb aksj
          </div>
          <div src={HaskellLogo} alt="Haskell">
            In publishing and graphic design, Lorem ipsum is a
            placeholder text demonstrate the visual form of a dasdlkjabs
            dlkjabslkd jbaslkdj balksd laskjbd kajsdb aksj
          </div>
          <div src={ReactLogo} alt="React">
            In publishing and graphic design, Lorem ipsum is a
            placeholder text demonstrate the visual form of a...
            This website uses React!
          </div>
          <div src={JavaScriptLogo} alt="JavaScript">
            In publishing and graphic design, Lorem ipsum is a
            placeholder text demonstrate the visual form of a...
            This website uses JavaScript!
          </div>
          <div src={HTMLLogo} alt="HTML">
            In publishing and graphic design, Lorem ipsum is a
            placeholder text demonstrate the visual form of a...
            This website uses HTML!
          </div>
          <div src={CSSLogo} alt="CSS">
            In publishing and graphic design, Lorem ipsum is a
            placeholder text demonstrate the visual form of a...
            This website uses CSS!
          </div>
        </SkillsList>

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
  }, [key]);

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