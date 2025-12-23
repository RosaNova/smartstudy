import React, { useState , useEffect } from 'react'
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { RegisterUser } from '@/api/Auth';
import { UserRegisterForm} from '@/types/user';
import { Link } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LoaderCircleIcon } from "lucide-react"
import { SpokeSpinner } from '@/components/ui/spinner';
import { cn } from "clsx-for-tailwind";
import SocialAuthentication from '@/components/auth/SocialAuthentication';

const RegisterPage = () => {
  const [User , setUser] = useState<UserRegisterForm>({username:"", email:"",password : "",confirmPassword:""});
  const [openEye , setOpenEye] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<Partial<UserRegisterForm>>({});
  const navigate = useNavigate(); 

   useEffect(() => {
    const newErrors: Partial<UserRegisterForm> = {};

    if (!User.username.trim()){
       newErrors.username = "Username is required.";
    }

    if (!User.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(User.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!User.password) {
      newErrors.password = "Password is required.";
    } else if (User.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (!User.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (User.confirmPassword !== User.password) {
      newErrors.confirmPassword = "Re-type your password exactly to confirm.";
    }

    setErrors(newErrors);
  }, [User]);

   const handlechange = (e : React.ChangeEvent<HTMLInputElement>)=>{
      const {name , value} = e.target;
      setUser((prev)=> ({...prev ,[name]:value}));
   }
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

       
  // Final validation before submit
  const newErrors: Partial<UserRegisterForm> = {};

  if (!User.username.trim()) newErrors.username = "Username is required.";
  if (!User.email.trim()) newErrors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(User.email))
    newErrors.email = "Invalid email format.";
  if (!User.password) newErrors.password = "Password is required.";
  else if (User.password.length < 8)
    newErrors.password = "Password must be at least 8 characters.";
  if (!User.confirmPassword)
    newErrors.confirmPassword = "Confirm Password is required.";
  else if (User.confirmPassword !== User.password)
    newErrors.confirmPassword = "Passwords do not match.";

 
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors as UserRegisterForm);
    return;
  }

      if (!User) {
        console.error("User data is missing");
       return;
    }
    setIsLoading(true);
    
    try {
           const { confirmPassword, ...payload } = User;

      const data = await RegisterUser(payload);
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
      <div className='w-full  flex justify-center bg-orange items-center relative'>
        {
      isLoading ? ( 
        <div className='absolute flex justify-center items-center flex-col '>
          <SpokeSpinner size='xl' />
          <h1 className='font-bricolage'>We’re glad you’re here — please wait a moment...</h1>
      </div>
    ):(
      <>
     {/* Form Login */}
       <div className='form-container  p-10 bg-orange/80 w-[900px]'>
         <div className="form-header w-full pb-5 flex justify-between items-start ">
            <Link to="/" className="logo text-3xl text-center font-bold font-righteous">StudyVerse</Link>
            <Link className='text-end underline font-poppins text-white' to={"/login"}>Have Account? <br />Sign in</Link>
         </div>
         <h1 className="form-title text-black pb-5 md:text-7xl text-6xl lg:text-9xl text-center font-extrabold font-poppins">Sign up</h1>
         <p className='text-center font-bricolage text-black  pb-10'>A simple start to a journey of learning.</p>
         <div className='flex justify-center flex-col lg:flex-row w-full items-center lg:items-start  lg:gap-x-10'>
         <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-full lg:w-[50%] gap-2 '>
              
            <label className="label text-white text-md font-bricolage">Username:*</label>
            <input required onChange={handlechange} value={User.username} type="text" name='username' className={cn("input border font-bricolage w-full text-orange bg-white placeholder:text-orange border-gray-300")} placeholder="Username" />
             <p className='text-white h-5'>{errors.username}</p>

            <label className="label text-white text-md font-bricolage">Email Address:*</label>
            <input required onChange={handlechange} value={User.email} type="email" name='email' className={cn("input border font-bricolage w-full text-orange bg-white placeholder:text-orange border-gray-300")} placeholder="Email Address" />
              <p className='text-white h-5'>{errors.email}</p>


            <label className="label text-white text-md font-bricolage">Password:*</label>
              <div className='relative w-full'>
              <input required type = {openEye ? "password" : "text"} value={User.password} name='password' onChange={handlechange} className={cn("input text-orange font-bricolage w-full border bg-white placeholder:text-orange")} placeholder="Password" />
               {
                openEye ?  <FaRegEye onClick={()=> setOpenEye(false)} className='absolute right-5 top-2 cursor-pointer z-3 text-red-400 text-xl' />
                : <FaRegEyeSlash onClick={()=> setOpenEye(true)} className='absolute right-5 top-2 cursor-pointer z-3 text-red-400 text-xl'  />
               }
              </div>
               <p className='text-white h-5'>{errors.password}</p>


              <label className="label text-white text-md font-bricolage">Confirm Password:*</label>
              <div className='relative w-full'>
              <input required type = {openEye ? "password" : "text"} value={User.confirmPassword} name="confirmPassword" onChange={handlechange} className={cn("input text-orange font-bricolage w-full border bg-white placeholder:text-orange border-gray-300")} placeholder="Confirm Password" />
               {
                openEye ?  <FaRegEye onClick={()=> setOpenEye(false)} className='absolute right-5 top-2 cursor-pointer z-3 text-red-400 text-xl' />
                : <FaRegEyeSlash onClick={()=> setOpenEye(true)} className='absolute right-5 top-2 cursor-pointer z-3 text-red-400 text-xl'  />
               }
              </div>
                <p className='text-white h-5 pb-10'>{errors.confirmPassword}</p>
               <button type="submit" className="font-bricolage w-full py-3 px-2 bg-black  text-white rounded-md text-md font-medium">Sign up</button>
             </form>
         <div className='w-1 lg:block h-[450px] hidden bg-white'></div>
            <p className='lg:hidden text-md font-bricolage text-center pb-2 pt-5'>or sign up with</p>
           <SocialAuthentication/>
         </div>
       </div>
       </>
        )}
 </div>
  )
}

export default RegisterPage;