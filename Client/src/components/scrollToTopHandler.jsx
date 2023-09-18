import React from 'react'
import { useEffect } from "react";
import { useLocation, useNavigationType } from 'react-router-dom';

function ScrollToTopHandler({ children }) {
    const location = useLocation();
    const navType = useNavigationType();
    useEffect(() => {
        if (navType !== "POP") {
            window.scrollTo({ top: 0, behavior: 'smooth' }, 0);
        }
      }, [navType, location]);
  return (
    <>
       {children} 
    </>
  )
}

export default ScrollToTopHandler