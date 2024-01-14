import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
const StartPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (user) {
        navigate("/account");
      } else {
        navigate("/language");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, user]);

  const zoomInStyle = {
    animation: "zoom-in 3s ease-in-out",
  };

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center bg-[#04A83F] items-center h-screen">
          <img className="h-48" src={logo} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default StartPage;
