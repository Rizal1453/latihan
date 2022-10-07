import React from 'react'
import logo3 from "../assets/Frame.png";
import logo4 from "../assets/logo4.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";


const Navbar = () => {
  const [toggle, setToggle] = React.useState(false)
  return (
    <nav className='w-full flex no-underline li-none justify-between items-center py-6 '>    
        <img src={logo4}  alt="" />
      
        <ul className='sm:flex hidden justify-end flex-1' >
          <li className='mr-10'>
            <a href="">Product</a>
          </li>
          <li className='mr-10'>
            <a href="">Customers</a>
          </li>
          <li className='mr-10'>
            <a href="">Pricing</a>
          </li>
          <li className='mr-10'>
            <a href="">Resources</a>
          </li>
          <li className='mr-10'>
            <a href="" className='px-4 py-2 border-2 rounded-md'>Sign In</a>
          </li>
          <li className='mr-14 '>
            <a href="" className=' px-4 py-2 rounded-md text-white bg-[#02897A]'>Sign up</a>
          </li>
          <li>
           <img src={logo3} alt="" />
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img className='w-[28px] h-[28px] object-contain ' onClick={()=>setToggle((prev)=>!prev)} src={toggle?close:menu} alt="" />
          <div className={`${toggle?"flex ":"hidden"} p-6 absolute bg-green-600 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
              <ul className='list-none flex flex-col justify-end items-center flex-1'>
                <li>
                  <a href="">Product</a>
                </li>
                <li>
                  <a href="">Customers</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Resources</a>
                </li>
              </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar