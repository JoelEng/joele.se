import styles from './../styles/LayerButton.module.sass'

const LayerButton = ({children, background, fontFamily, ...props}) => (
  <a href={props.href} download={props.download} className={styles.LayerButton} style={{ borderRadius: props.borderRadius, pointerEvents: props.pointerEvents }} >
    <div className={styles.LayerButtonBackground} style={{ background: background }} />
    <div className={styles.LayerButtonForeground}/>
    <div className={styles.ButtonChild} {...props} >
      {children}
    </div>
  </a>
)
export default LayerButton