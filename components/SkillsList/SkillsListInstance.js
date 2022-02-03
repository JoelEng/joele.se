import SkillsList from './SkillsList'
import { CSSLogo, GitLogo, SVGWavesTop, SVGWavesBottom, JavaLogo, RustLogo, HaskellLogo, ReactLogo, JavaScriptLogo, HTMLLogo } from "./../SVGs"

const SkillsListInstance = () => (
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
)

export default SkillsListInstance