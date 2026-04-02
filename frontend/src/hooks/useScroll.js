import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  /*
  Q1. Why not normal variable instead of useState ? -> Normal variable do not trigger UI upate (re-render), with useState: React Detects change, Re-renders component, Updates UI.
  interview style -> useState is used because it triggers re-render when data changes, unlike normal variables which do not update the UI 
  
  */

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    /**
     *  Q2. What happpens if we remove useEffect ? -> 
        Without useEffect, the scroll event listener would be added on every render, leading to multiple listeners and potential memory leaks. useEffect ensures the 
        listener is added once and cleaned up properly.
        interview style -> useEffect is used to add the scroll event listener only once when the component mounts, and to clean it up when the component unmounts. 
        Without useEffect, we would end up adding multiple event listeners on every render, which can cause performance issues and memory leaks. 
     */

    return () => 
      window.removeEventListener("scroll", handleScroll);
    }, []);

    /*
    Q3. Why cleanup function ? 
    The cleanup function in useEffect is crucial for preventing memory leaks and ensuring that event listeners are removed when the component unmounts.
    In this case, the cleanup function removes the scroll event listener that was added when the component mounted. 
    If we didn't include this cleanup function, the event listener would remain active even after the component is unmounted, 
    leading to potential memory leaks and unintended behavior as it would still try to update state on an unmounted component.
    */

  return scrollY;
};

export default useScroll;


