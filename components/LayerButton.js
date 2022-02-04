import styles from './../styles/LayerButton.module.sass'

const LayerButton = props => (
  <a href={props.href} download={props.download} className={styles.LayerButton} style={{ borderRadius: props.borderRadius, pointerEvents: props.pointerEvents }} >
    <div className={styles.LayerButtonBackground} />
    <div className={styles.LayerButtonForeground} {...props} />
  </a>
)
export default LayerButton