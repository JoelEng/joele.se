import { useState, useRef, useEffect } from "react";

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => setVisible(entry.isIntersecting));
  }, {
    rootMargin: "100000px 0px 0px 0px",
  });
  useEffect(() => {
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
