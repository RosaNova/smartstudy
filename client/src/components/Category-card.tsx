import { Link } from "react-router-dom";
import { Item } from "@/types/time";

const Categorycard = ({item} : Item) => {
  return (
        <Link to={item.link} className="w-[200px] overflow-hidden h-[250px] relative flex flex-col items-center rounded-[30px] bg-orange transition-smooth hover:shadow-hover">
          <div className="w-full h-full  py-3 rounded-2xl bg-transparent flex flex-col justify-between items-center">
            <div className="iconCard text-3xl bg-cream/50 rounded-2xl p-3 mt-5">{item.icon}</div>     
              <h1 className="text-center bg-cream/50 rounded-2xl p-2 break-words text-base  shadow-sm h-20 flex justify-center items-center px-3 w-[90%]  font-bold leading-tight text-orange font-bricolage md:text-xl">{item.title}</h1>
         </div>
    </Link>
  )
}

export default Categorycard;