import React, { useState , useEffect } from 'react'

import { LoginUser } from '@/api/Auth';
import { UserLogin } from '@/types/user';
import { Link } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LoaderCircleIcon } from "lucide-react"
import { SpokeSpinner } from '@/components/ui/spinner';
import { cn } from "clsx-for-tailwind";
import SocialAuthentication from '@/components/auth/SocialAuthentication';

const LoginPage = () => {
  const [User , setUser] = useState<UserLogin>({email:"",password : ""});
  const [openEye , setOpenEye] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<UserLogin>({email: "",password:""});

  const navigate = useNavigate(); 
    useEffect(() => {
    validate(User);
  }, [User]);

  const validate = (values: UserLogin) => {
    const newErrors: UserLogin= {email: "",password:""};

   // Email validation
    if (!values.email) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Invalid email format.';
    }

    // Password validation
    if (!values.password) {
      newErrors.password = 'Password is required.';
    } else if (values.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    setErrors(newErrors);
  };
   const handlechange = (e : React.ChangeEvent<HTMLInputElement>)=>{
      const {name , value} = e.target;
      setUser((prev)=> ({...prev ,[name]:value}));
   }
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      if (!User) {
        console.error("User data is missing");
       return;
    }
    setIsLoading(true);
    
    try {
      const data = await LoginUser(User);
       const { token, user } = data;
      Cookies.set('token', token, { expires: 7 }); // 7 days
      Cookies.set('user', JSON.stringify(user), { expires: 7 });
      navigate('/', { replace: true });
       
    } catch (error:any) {
      if (error.response) {
      console.error("Server error:", error.response.data);
    } else {
      console.error("Network or unknown error:", error.message || error);
    }
    }finally{
        setIsLoading(false);
    }
  };

  return (
       <div className='w-full md:h-screen flex justify-center  bg-orange '>
        {
      isLoading ? ( 
        <div className='absolute flex justify-center items-center flex-col '>
          <SpokeSpinner size='xl' />
          <h1 className='font-bricolage'>Authenticating your account...</h1>
      </div>
    ):(
     
       <div className='form-container absolute w-full lg:w-[900px]  p-10 bg-orange '>
         <div className="form-header w-full pb-5 flex justify-between items-start ">
            <Link to="/" className="logo text-3xl text-center font-bold font-righteous">StudyVerse</Link>
            <Link className='text-end underline font-poppins text-white' to={"/register"}>No Account? <br />Sign Up</Link>
         </div>
         <h1 className="form-title text-black pb-5 md:text-7xl text-6xl lg:text-9xl text-center font-extrabold font-poppins">Sign in</h1>
         <p className='text-center font-bricolage text-black  pb-10'>Log in to continue your journey.</p>
         <div className='flex justify-center lg:flex-row flex-col w-full items-start gap-x-10'>
         <form onSubmit={handleSubmit} className='flex flex-col  w-full  lg:w-[50%] gap-2 '>
            
            <label className="label text-white text-md font-bricolage">Email Address:*</label>
            <input required onChange={handlechange} value={User.email} type="email" name='email' className={cn("input border font-bricolage w-full text-orange bg-white placeholder:text-orange border-gray-300")} placeholder="Email Address" />
              <p className='text-white h-5'>{errors.email ?  "Email is not correct ! Please check " : ""}</p>
              <label className="label text-white text-md font-bricolage">Password:*</label>
              <div className='relative w-full'>
              <input required type = {openEye ? "password" : "text"} value={User.password} name='password' onChange={handlechange} className="input text-orange font-bricolage w-full border bg-white placeholder:text-orange border-gray-300" placeholder="Password" />
               {
                openEye ?  <FaRegEye onClick={()=> setOpenEye(false)} className='absolute right-5 top-2 cursor-pointer z-3 text-red-400 text-xl' />
                : <FaRegEyeSlash onClick={()=> setOpenEye(true)} className='absolute right-5 top-2 cursor-pointer z-3 text-red-400 text-xl'  />
               }
              </div>
               <p className='text-white h-5'>{errors.password ?  "Password is not through 8 character ! Please check " : ""}</p>
              
               <a className='font-poppins text-white text-end text-md underline pb-10' href="#">Fogot Password?</a>
              <button type="submit" className="font-bricolage w-full py-3 px-2 bg-black  text-white rounded-md text-md font-medium" >Sign in</button>
             </form>
         <div className='w-1 hidden lg:block h-[300px] bg-white'></div>
           {/*  Social Media */}
             <SocialAuthentication/>
         </div>
       </div>
     
        )}
 </div>
  );
}

export default LoginPage