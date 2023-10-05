import { outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/UseAuth";

const PersistHandler = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { auth } = useAuth();
 
  return (
    <div>
        
    </div>
  )
}

export default PersistHandler