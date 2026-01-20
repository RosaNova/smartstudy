import React from 'react'
// import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
// import { auth } from "@/firebase/firebaseConfig";
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const navigate = useNavigate();
  const logout = async ()=>{
     try {
      //   await signOut(auth);

        Cookies.remove("token");
        Cookies.remove("user"); 
        navigate("/login");
     } catch (error) {
        console.error("Logout failed:", error);
     }
  }

  return { logout };
}
