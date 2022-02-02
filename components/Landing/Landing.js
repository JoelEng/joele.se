import Image from 'next/image'
import TextLoop from "react-text-loop";
import Chevron from './Chevron';
import profile from './../../public/profile.png'
import styles from './../../styles/Landing.module.sass'

export default function Landing(props) {
    return (
        <div className={styles.Landing}>
            <div className={styles.NameAndProfile}>
                <Image src={profile} alt="Me!" width={220} height={220} />
                <div className={styles.TextBlock}>
                    <p className={styles.Name}>
                        Joel Engström
                    </p>
                    <p className={styles.Text}>
                        Computer scientist and web developer proficient in{" "}
                        <TextLoop interval="1500">
                            <span>Java</span>
                            <span>Git</span>
                            <span>JavaScript</span>
                            <span>React JS</span>
                            <span>Rust</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Haskell</span>
                        </TextLoop>
                    </p>
                </div>
                
            </div>
            <Chevron chevronDest={props.chevronDest} />
        </div>
    )
}