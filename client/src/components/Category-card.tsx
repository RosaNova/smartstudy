import { Link } from "react-router-dom";
import { Item } from "@/types/time";

const Categorycard = ({item} : Item) => {
  return (
        <Link to={item.link} className="group border border-white  w-[200px] overflow-hidden h-[250px] relative flex flex-col items-center rounded-[30px] py-10 bg-orange transition-smooth hover:shadow-hover">
          <div className="w-full h-full rounded-2xl bg-transparent flex flex-col justify-between items-center">
            <div className="iconCard text-8xl">{item.icon}</div>     
             <h1 className="text-center  text-base  bg-transparent rounded-[0px] h-20 flex justify-center items-center px-3 w-[90%] uppercase font-bold leading-tight text-cream font-bricolage md:text-2xl">{item.title}</h1>
         </div>
    </Link>
  )
}

export default Categorycard;