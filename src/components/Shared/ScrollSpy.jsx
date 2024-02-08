import React, { useState, useEffect } from "react";

// Sample Code
const ScrollSpy = ({ targetIds }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const id of targetIds) {
        const targetElement = document.getElementById(id);
        if (targetElement) {
          const { offsetTop, offsetHeight } = targetElement;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetIds]);

  return (
    <ul>
      {targetIds.map((id) => (
        <li key={id} className={id === activeId ? "active" : ""}>
          <a href={`#${id}`}>{id}</a>
        </li>
      ))}
    </ul>
  );
};

export default ScrollSpy;
