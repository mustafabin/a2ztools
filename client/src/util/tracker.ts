import { useState, useEffect } from "react";

type Ref = {
    current: Element|null,
}

// threshold indicates at what percentage of the target's visibility the observer's callback should be executed. 
// To detect when visibility passes the 50% mark, you can use a value of 0.5.
// for callback to run every time visibility passes another 25%,
// you would specify the array [0, 0.25, 0.5, 0.75, 1].
export default (element:Ref, threshold:number|number[] = 0.5) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          element.current && observer.unobserve(element.current);
        }
      },
      {
        threshold,
      }
    );

    element.current && observer.observe(element.current);

    return () => {
      element.current && observer.unobserve(element.current);
    };
  }, []);

  return isVisible;
};