import styled from 'styled-components'
import FadeInSection from './FadeIn'
import LayerButton from './LayerButton'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3rem;
`

const Project = styled(props => (
  <FadeInSection>
    <LayerButton borderRadius="20px" offset="5px" background={props.background} className={props.className}>
      {props.children}
    </LayerButton>
  </FadeInSection>
))`
  width: 12rem;
  height: 12rem;
  position: relative;
  color: var(--text-body);
`

export default function Projects() {
  return (
    <ProjectsContainer>
      <Project background="pink">
        Nolblads
      </Project>
      <Project background="#f4a261">
        Enspecta
      </Project>
      <Project background="#90be6d">
        Enspectas intranät
      </Project>
      <Project background="var(--primary)">
        This website
      </Project>
    </ProjectsContainer>
  )
}