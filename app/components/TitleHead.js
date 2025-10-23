import { MoveRight } from 'lucide-react'

const TitleHead = ({item = "About us"}) => {
  return (
    <div className=" inline-flex">
      <div className="flex items-center">
        <div className="w-10 h-10 lg:w-12 lg:h-12  rounded-full bg-brand-cyan"></div>

        <MoveRight className="w-10 h-10 lg:w-17 lg:h-17 -translate-x-3 lg:-translate-x-6 " strokeWidth={1}/>
<h3 className='text-xl lg:text-2xl font-semibold -translate-x-2 lg:-translate-x-5'>{item}</h3>
      </div>
    </div>
  )
}

export default TitleHead
