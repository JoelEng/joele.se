import Timeline from './package/index'
import styles from './../../styles/TimelineInstance.module.sass'
import LayerButton from './../LayerButton'
import FadeInSection from '../FadeIn'
import styled from 'styled-components'

const InnerDiv = styled.div`
  background: var(--primary-4);
  border-radius: 20px;
  overflow: auto;
`

export default function TimelineInstance() {
  return (
    <Timeline lineColor="var(--text)" lineStyle="dashed" lineWidth={8} className={styles.TimelineItemContent}>
      <Timeline.Right icon={WeKnowITIcon} title={title("2021 - current")} >
        <FadeInSection>
          <InnerDiv>
            <h1 className={styles.TimelineItemTitleTest} >Developer, We Know IT</h1>
            <p className={styles.TimelineBody}>As developer at a consulting company my work has consisted of various smaller tasks along with some larger projects, all of which have broadened my understanding of React and Wordpress. I have, for the first time, programmed in a work environment utilizing agile development. My time with frontend development at WeKnowIT has complemented my previous proficiency in backend development.</p>
          </InnerDiv>
        </FadeInSection>
      </Timeline.Right>
      <Timeline.Left icon={SchoolIcon} title={title("2019 - current (2024)")} style={{ background: "none" }} >
        <FadeInSection>
          <LayerButton style={{ position: "relative", padding: "0" }} offset="5px" borderRadius="20px" background="var(--primary-2)" pointerEvents="none">
          <h1 className={styles.TimelineItemTitleTest} >MSc in Computer Science, Lund University</h1>
          <p className={styles.TimelineBody}>This is the rest of the stuff, but it&apos;s much longer than the other rest of the stuff</p>
          </LayerButton>
        </FadeInSection>
      </Timeline.Left>
      <Timeline.Right icon={PostnordIcon} title={title("Summer 2018 & 2019")} >
        <FadeInSection>
          <InnerDiv>
            <h1 className={styles.TimelineItemTitleTest} >Mailman, Postnord</h1>
            <p className={styles.TimelineBody}>This is the rest of the stuff</p>
          </InnerDiv>
        </FadeInSection>
      </Timeline.Right>
      <Timeline.Right icon={SVTIcon} title={title("2017 - 2019")} >
        <FadeInSection>
          <InnerDiv>
            <h1 className={styles.TimelineItemTitleTest} >Transcriber, Sveriges Television</h1>
            <p className={styles.TimelineBody}>I worked for the swedish national television show “Född 2010” (Born 2010). This was an excellent opportunity to gain real work experience and to discipline myself to do things on time and in a satisfactory manner. I kept myself busy with work and school, yet managed to plan well and allocate time for both.</p>
          </InnerDiv>
        </FadeInSection>
      </Timeline.Right>
      <Timeline.Left icon={SchoolIcon} title={title("2016 - 2019")} >
        <FadeInSection>
          <InnerDiv>
            <h1 className={styles.TimelineItemTitleTest} >Natural Science Program, Nacka Gymnasium</h1>
            <p className={styles.TimelineBody}>This is the rest of the stuff</p>
          </InnerDiv>
        </FadeInSection>
      </Timeline.Left>
    </Timeline>
  )
}

const title = title => (
  <h1 className={styles.TimelineTitle}>
    {title}
  </h1>
)

const SchoolIcon = (
  <svg viewBox="0 0 20 20" fill="var(--background)" style={{ margin: "16%" }}>
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
  </svg>
)

const WeKnowITIcon = (
  <svg viewBox="0 0 20 20" fill="var(--background)" style={{ margin: "20%", marginTop: "19%" }}>
    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
  </svg>
)

const PostnordIcon = (
  <svg fill="none" viewBox="0 0 24 24" stroke="var(--background)" style={{ margin: "20%", marginTop: "19%" }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
  </svg>
)

const SVTIcon = (
  <svg fill="none" viewBox="0 0 24 24" stroke="var(--background)" style={{ margin: "20%", marginTop: "19%" }}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>
)