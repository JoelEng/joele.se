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
      Although never a part of my education or work, I have learned Rust during my free-time,
      for example using it to complete a large part of Advent of Code 2021.
    </div>
    <div src={HaskellLogo} alt="Haskell">
      In my opinion the most enjoyable language to write, and the most beautiful.
      The course that introduced me to it is my all time favourite so far,
      and I have a deep love for the language itself.
    </div>
    <div src={ReactLogo} alt="React">
      I learned React when applying to my first frontend job and have used it more than a lot since then,
      for everything big and small.
      This website uses React!
    </div>
    <div src={JavaScriptLogo} alt="JavaScript">
      With my experience in the largely similiar Java, paired with all the time spent during work-hours,
      JavaScript is likely one of the languages I have become best at.
    </div>
    <div src={HTMLLogo} alt="HTML">
      When designing a website, I often spend a long time thinking about the logic of the HTML
      and how to make it great in the simplest way possible.
    </div>
    <div src={CSSLogo} alt="CSS">
      I love tinkering in CSS to get a website to look just perfect. I am well-versed in many different
      implementations of CSS, such as Sass and Styled Components. 
    </div>
  </SkillsList>
)

export default SkillsListInstance