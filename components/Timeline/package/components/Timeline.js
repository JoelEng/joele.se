import React, { useEffect, useState } from "react"
import { TimelineItemLeft, TimelineItemRight } from "./TimelineItem"

export default function Timeline({ children, lineWidth = 8, lineStyle = "solid", lineColor = "gray", smallScreen = 1100, ...props }) {
  let viewWidth = useWindowSize().width
  return (
    <div className="Timeline">
      {React.Children.map(children, child =>
        React.cloneElement(child, {viewWidth, lineWidth, lineStyle, lineColor, smallScreen, ...props, ...child.props})
      )}
    </div>
  )
}
Timeline.Left = TimelineItemLeft
Timeline.Right = TimelineItemRight

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}