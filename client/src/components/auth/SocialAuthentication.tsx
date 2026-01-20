import React from 'react'
// import { signInWithPopup} from "firebase/auth";
// import { auth , googleProvider , facebookProvider } from '@/firebase/firebaseConfig';
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import SocialLogin from '../../data/social_login.json';

const iconMap = {
  FaGoogle: FaGoogle,
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram
};

const SocialAuthentication = () => {
  const handleSocialLogin = async (providerName: String)=>{
     try {
      let provider;
      // switch(providerName){
      //    case "Facebook":{
      //       provider = facebookProvider;
      //     break;
      //    }
      //    case "Google":{
      //       provider = googleProvider;
      //     break;
      //    }
      //    default : {
      //     alert("Provider not implement yet!");
      //     return;
      //    }
      // }

      // const result = await signInWithPopup(auth, provider);
      // const user = result.user;
     
     } catch (error : any) {
      console.error("❌ Social login failed:", error.message);
     }
  }
  return (
   <div className="Social w-full md:w-full lg:w-[50%] pt-7">
              <ul className='flex flex-col gap-2'>
               {
                 SocialLogin.map((social, index) => {
                    const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                    return (
                      <li key={index} className='group'>
                        <button onClick={()=> handleSocialLogin(social.type)} className={`flex items-center cursor-pointer justify-center px-10 w-full h-[50px] bg-white  group-hover:border border-white group-hover:bg-transparent hover:text-white duration-200 rounded-md text-orange font-poppins gap-4`} >
                          {IconComponent ? <IconComponent className='text-2xl' /> : null}
                          {social.name}
                        </button>
                      </li>
                    )
                 })
               }
              </ul>
            </div>
  )
}

export default SocialAuthentication;
