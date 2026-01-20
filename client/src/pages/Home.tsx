import Categorygrid from '@/components/Category-grid';
import Searchbar from '@/components/Search-bar';
import AllCategory from '@/data/AllCategory.json';
import { AiTwotoneSetting } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { TbLogout2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";
import { useLogout } from '@/hooks/useLogout';
import Footer from '@/components/Footer';
import WidgetDemo from '@/components/clock-02';

const HomePage = () => {
   const {logout} = useLogout();
  return (
    <div className="fruid-container w-full pb-20 bg-cream ">
        <div className="home-container pt-15  w-[80%] mx-auto">
          <div className="logo relative   flex w-full justify-between items-start pb-3">
             <div className='leftsection'>
                <h1 className='text-6xl pb-5  font-[1000] font-righteous text-orange'>StudyVerse</h1>
                <p className="tagline text-orange">Organize your study. Manage your ideas. Boost productivity.</p>
            </div>
             <WidgetDemo/>
          </div>      
           <div className='pb-10'>
                  <ul className='flex gap-4 jus items-center'>
                     <li><button type='button' className='tooltip group cursor-pointer'><AiTwotoneSetting size={25} className='text-orange' />
                      <div className="dropdown group-hover:visible invisible absolute z-[1000] w-[200px]  top-8 left-[-20px]  bg-orange rounded-[15px] p-2 ">
                            <ul className='flex flex-col gap-3 w-full'>
                              <li className='hover:bg-cream w-full hover:text-orange px-3 py-2 duration-200 rounded-[10px]' ><button className='flex w-full cursor-pointer font-bricolage items-center justify-between' type='button'><CgProfile className='text-3xl'/>My Profile</button></li>                         
                              <li className='hover:bg-cream w-full hover:text-orange px-3 py-2 duration-200 rounded-[10px]' ><button className='flex w-full cursor-pointer font-bricolage items-center justify-between' type='button'><VscFeedback className='text-3xl' /> Feedback</button></li>
                              <li className='hover:bg-cream w-full hover:text-red-700 px-3 py-2 duration-200 rounded-[10px]' ><button className='flex w-full cursor-pointer  font-bricolage items-center justify-between' onClick={logout} type='button'><TbLogout2 className='text-3xl' /> Logout</button></li>
                            </ul>
                        </div>
                     </button></li>
                     <li><button type='button' className='tooltip group cursor-pointer' data-tip="Profile"><FaRegUser size={22}  className='text-orange' />
                        <div className="dropdown group-hover:visible invisible absolute z-[1000] w-[200px]  top-8 left-[-20px]  bg-orange rounded-[15px] p-2 ">
                            <ul className='flex flex-col gap-3 w-full'>
                              <li className='hover:bg-cream w-full hover:text-orange px-3 py-2 duration-200 rounded-[10px]' ><Link to="/profileinformation" className='flex w-full cursor-pointer font-bricolage items-center justify-between'><CgProfile className='text-3xl'/>My Profile</Link></li>                         
                              <li className='hover:bg-cream w-full hover:text-orange px-3 py-2 duration-200 rounded-[10px]' ><button className='flex w-full cursor-pointer font-bricolage items-center justify-between' type='button'><VscFeedback className='text-3xl' /> Feedback</button></li>
                              <li className='hover:bg-cream w-full hover:text-red-700 px-3 py-2 duration-200 rounded-[10px]' ><button className='flex w-full cursor-pointer  font-bricolage items-center justify-between' onClick={logout} type='button'><TbLogout2 className='text-3xl' /> Logout</button></li>
                            </ul>
                        </div>
                     </button></li>
                     <li><button className='tooltip' data-tip="AI Assistant"><FaRegMessage size={20}  className='text-orange' /></button></li>
                   </ul>
               </div>
               <Searchbar/>
              <Categorygrid title={"Time Management⏰"} AllItem={AllCategory.TimeManagement}  />
              <Categorygrid title={"Idea Management💡"} AllItem={AllCategory.IdeaManagement}  />
              <Categorygrid title={"Study Resources📚"} AllItem={AllCategory.StudyResource}  />
              <Categorygrid title={"Collaboration Tools🤝"} AllItem={AllCategory['Collaboration Tools']}  />
              <Categorygrid title={"Career & Skills💼"} AllItem={AllCategory['Career & Skills']}  />
              
         </div> 
          {/* Footer section   */}
         <Footer/>
    </div>
  )
}

export default HomePage;