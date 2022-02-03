import styles from "./../../styles/SkillsList.module.sass";

export default function SkillsList(props) {
  return (
    <div className={styles.List}>
      {props.children.map((child) => (
        <SkillItem {...child.props} key={child.id} /> //Iterate over children, making each a SkillItem
      ))}
    </div>
  );
}

function SkillItem(props) {
  return (
    <div className={styles.Item}>
      {props.src}
      <span className={styles.Title}>{props.alt}</span> - {props.children}
    </div>
  );
}
