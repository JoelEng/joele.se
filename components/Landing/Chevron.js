import styles from './../../styles/Chevron.module.sass'

export default function Chevron(props) {
  console.log(props.chevronDest)
  return (
    <div className={styles.ChevronContainer}>
      <ChevronDown onClick={props.chevronDest} style={{ cursor: "pointer" }} />
    </div>
  )
}

const ChevronDown = (props) => (
  <svg {...props} width="calc(4vw + 60px)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
)