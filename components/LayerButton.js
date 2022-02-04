import styles from './../styles/LayerButton.module.sass'

const LayerButton = ({children, ...props}) => (
  <a href={props.href} download={props.download} className={styles.LayerButton} style={{ borderRadius: props.borderRadius, pointerEvents: props.pointerEvents }} >
    <div className={styles.LayerButtonBackground} />
    <div className={styles.LayerButtonForeground} {...props}>
      <div>
        {children}
      </div>
    </div>
  </a>
)
export default LayerButton