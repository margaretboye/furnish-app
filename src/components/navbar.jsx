import { Link } from "react-router-dom"
import K from "../constant/index"


const Navbar = () => {
  return (
    <div className="flex justify-between px-36 py-10 fixed w-full left-0 top-0">
      <span className="text-[#F74A44]">THE<span className="text-[#B4CBF7]">female</span>.</span>
      <div className="flex gap-x-16">
        {K.NAVLINKS.map(
            (item,index)=> {
              return <Link key={index} to={item.path}>{item.name}</Link>
            }
          )
        }
      </div>
    </div>
  )
}

export default Navbar