import { useState, useEffect } from "react";

type Ref = {
    current: Element|null,
}
export default (element:Ref, rootMargin:string = "0px") => {
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
        rootMargin,
      }
    );

    element.current && observer.observe(element.current);

    return () => {
      element.current && observer.unobserve(element.current);
    };
  }, []);

  return isVisible;
};