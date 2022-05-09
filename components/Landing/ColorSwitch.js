import { useState } from "react"
import styles from "../../styles/ColorSwitch.module.sass"
import LayerButton from "../LayerButton"

export default function ColorSwitch({ setTheme }) {
  const [isVisible, setIsVisible] = useState(true)
  function handleClick() {
    setIsVisible(!isVisible)
  }

  return (
    <>
      {PaletteButton(handleClick)}
      <div className={styles.ColorSwitchOverlay} onClick={handleClick} style={{ opacity: !isVisible ? "0" : "1", visibility: isVisible ? "visible" : "hidden" }}>
        <LayerButton borderRadius=".5rem" offset="4px" background="var(--primary-4)" outerStyle={{position: "fixed", right: "0", margin: "1rem"}} className={styles.ColorSwitchPopup} onClick={(e) => e.stopPropagation()}>
          {ColorButton("sky", "#add3d6", "#435b79", setTheme)}
          {ColorButton("garden", "#b7d6ad", "#437978", setTheme)}
          {ColorButton("space", "#191C23", "#f5f8ff", setTheme)}
          {/*ColorButton("hacker", "#191C23", "#20c20e", setTheme)*/}
          {/*ColorButton("purple", "#e0aaff", "#7b2cbf", setTheme)*/}
          {ColorButton("new-pink", "#ffb7ef", "#854ca7", setTheme)}
          {ColorButton("ocean", "#5e60ce", "#72efdd", setTheme)}
          {/*ColorButton("new-sky", "#b8ecf0", "#435b79", setTheme)*/}
          {/*ColorButton("new-garden", "#baeec0", "#437978", setTheme)*/}
          {/*ColorButton("ice", "#b6ccfe", "#5973b6", setTheme)*/}
          {/*ColorButton("gates", "#e78b60", "#383fa8", setTheme)*/}
        </LayerButton>
      </div>
    </>
  )
}

export const ColorButton = (name, color, textColor, setTheme) => (
  <div className={styles.ColorButton} style={{ backgroundColor: color }} onClick={() => setTheme(name)}>
    <div className={styles.ButtonTextColor} style={{ backgroundColor: textColor }} />
  </div>
)

const PaletteButton = handleClick => (
  <svg width={40} className={styles.ColorIcon} viewBox="0 0 24 24" fill="currentColor" onClick={handleClick}>
    <rect width="24" height="24" opacity="0"/>
    <path d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zm-12.7 9.66a1.5 1.5 0 1 1 .4-2.08 1.49 1.49 0 0 1-.4 2.08zM8.3 9.25a1.5 1.5 0 1 1-.55-2 1.5 1.5 0 0 1 .55 2zM11 7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 7zm5.75.8a1.5 1.5 0 1 1 .55-2 1.5 1.5 0 0 1-.55 2z"/>
  </svg>
)