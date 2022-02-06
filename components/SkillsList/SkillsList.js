import FadeInSection from "../FadeIn";
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
    <FadeInSection>
      <div className={styles.Item}>
        {props.src}
        <p className={styles.Text}>
          <span className={styles.Title}>{props.alt}</span> - {props.children}
        </p>
      </div>
    </FadeInSection>
  );
}
