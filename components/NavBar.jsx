
import Image from "next/image"
import Link from "next/link"
import NavLogo from "../public/openai.png"
import React, {useState, useEffect} from "react"

const NavBar = () =>{

 const [nav, setNav] = useState(false);
 const [shadow, setShadow] = useState(false);

 const handleNav = ()=>{
  setNav(!nav);
 };

  useEffect(()=>{
   const handleShadow =()=>{
      if (window.scrollY >= 90) {
        setShadow(true)
      }else{
        setShadow(false)
      }
   }
   window.addEventListener('scroll', handleShadow)
  },[])

    return (
      <div id="navbar" className='fixed w-full h-20 z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/' className=" flex items-center">
        <Image
              src={NavLogo}
              alt='/'
              width={50}
              className='cursor-pointer'
            />
            <p className=" text-2xl font-semibold uppercase ml-4">Dall-e <span className=" text-indigo-600 pl-1">2.0</span></p>
        </Link>
      </div>
      </div>
    )
  }

export default NavBar