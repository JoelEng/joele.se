import styles from "./../styles/SkillsList.module.sass";

export default function SkillsList(props) {
  return (
    <>
      <div className={styles.SkillsList}>
        {props.children.map((child) => (
          <SkillItem {...child.props} key={child.id} /> //Iterate over children, making each a SkillItem
        ))}
      </div>
    </>
    
  );
}

function SkillItem(props) {
  return (
    <div className={styles.SkillItem} >
      <p className={styles.SkillItemText} style={{ textAlign: "justify", lineHeight: "1.4" }}>
        {props.src}
        <span className={styles.SkillTitle}>{props.alt}</span> - {props.children}
      </p>
    </div>
  );
}
