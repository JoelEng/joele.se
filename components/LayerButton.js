import styles from './../styles/LayerButton.module.sass'
import styled from 'styled-components'

const LayerButtonBackground = styled.div`
  background: var(--background);
`

const LayerButtonForeground = styled.div`
  box-sizing: border-box;
  background: none;
  color: var(--text);
  border: 3px solid var(--text);
`

const OffsetButton = styled.a`
  &:not(:hover) {
    ${LayerButtonForeground} {
      transform: translate(-${props => props.offset}, -${props => props.offset})
    }
    ${LayerButtonBackground} {
      transform: translate(${props => props.offset}, ${props => props.offset})
    }
  }
`

const LayerButton = ({children, background, fontFamily, outerStyle, ...props}) => (
  <OffsetButton href={props.href} offset={props.offset} download={props.download} className={styles.LayerButton} style={{ borderRadius: props.borderRadius, pointerEvents: props.pointerEvents, ...outerStyle }} >
    <LayerButtonBackground className={styles.LayerButtonBackground} style={{ background: background }} />
    <LayerButtonForeground className={styles.LayerButtonForeground}/>
    <div className={styles.ButtonChild} {...props} >
      {children}
    </div>
  </OffsetButton>
)
export default LayerButton