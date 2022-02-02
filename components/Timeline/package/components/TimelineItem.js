import React from 'react';

export const TimelineItemLeft = (props) => {
  const css = {
    borderRightWidth: props.lineWidth,
    borderRightStyle: props.lineStyle,
  }
  return (
    <TimelineItemRight {...props} css={css} side="left" offsetPrefix="-" />
  )
}

export const TimelineItemRight = ({side = "right", ...props }) => {
  if (props.viewWidth < props.smallScreen) {
    const { css, side, offsetPrefix, ...newProps} = props // eslint-disable-line
    return (
      <TimelineItemFull {...newProps}/>
    )
  }

  return (
    <TimelineItemFull {...{ ...props, side }} />
  )
}

export const TimelineItemFull = ({side = "full", lineWidth, lineStyle, css = { borderLeftWidth: lineWidth, borderLeftStyle: lineStyle }, offsetPrefix = "", ...props}) => {
  const offset = lineWidth / 2
  
  css = {
    ...css,
    transform: 'translateX('+offsetPrefix+offset+'px)'
  }
  
  return (
    <TimelineItem {...{ ...props, css, offset, side }} />
  )
}

const TimelineItem = ({ lineColor, bulletColor = lineColor, ...props }) => {
  let bulletTranslate = ""
  if (props.side === "left") {
    bulletTranslate = "translate(calc(50% + "+props.offset+"px), -10%)"
  } else {
    bulletTranslate = "translate(calc(-50% - "+props.offset+"px), -10%)"
  }

  let titleStyle = {}
  if (props.side === "left") {
    titleStyle = {
      transform: "translate(calc(100% + "+props.offset+"px), 0)",
      right: "0"
    }
  } else if (props.side === "right") {
    titleStyle = {
      transform: "translate(calc(-100% - "+props.offset+"px), 0)"
    }
  } else if (props.side === "full") {
    titleStyle = {
      position: "relative"
    }
  }

  return (
    <div className={"Timeline-item-"+props.side} style={{ ...props.css, borderColor: lineColor }} >
      <div className={"Item-bullet-"+props.side} style={{ ...props.bulletStyle, borderRadius: props.bulletRadius, background: bulletColor, transform: bulletTranslate }} >
        {props.icon}
      </div>
      <div className="Timeline-item-title" style={titleStyle} >
        {props.title}
      </div>
      <div className={"Timeline-item-child " + props.className} style={props.style} >
        {props.children}
      </div>
    </div>
  )
}