import Categorycard from './Category-card'
import { CategorygridType } from '@/types/category'

const Categorygrid = ({title , AllItem} : CategorygridType) => {
  return (
    <div className='pt-5 pb-10' >
        <h1 className='text-4xl font-bold pb-5 text-orange font-bricolage'>{title}</h1>
         <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {
            AllItem.map((item , idx)=> (
              <Categorycard key={idx} item={item}/>
            ))
          }
        </div>
    </div>
  )
}

export default Categorygrid