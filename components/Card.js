import { useState } from 'react'
import './Card.sass'
import { CSSTransition } from 'react-transition-group';

export default function Card(props) {
    const [hover, setHover] = useState(false);

    return (
        <div className="Card" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <CSSTransition
                classNames="Card-hover"
                in={hover}
                timeout={300}
                unmountOnExit
            >
                <CardOverlay {...props} />
            </CSSTransition>
            <div className="Card-contents">
                <img src={props.imgSrc} alt={props.title} width={props.imgWidth} />
            </div>
        </div>
    )
}

function CardOverlay(props) {
    return (
        <div className="Card-overlay">
            <div className="Overlay-title">
                {props.title}
            </div>
            <div className="Description">
                {props.children}
            </div>
            <div className="Rating-box">
                <p className="Rating">
                    {props.rating}
                </p>
                <p className="Rating10">
                    &nbsp;/ 10
                </p>
            </div>
        </div>
    )
}