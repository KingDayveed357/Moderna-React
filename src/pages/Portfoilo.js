import React from 'react'
// import "../styles/Portfolio.css";

import pf1 from "../images/portfoilo/portfolio-1.jpg"
import pf2 from "../images/portfoilo/portfolio-2.jpg"
import pf3 from "../images/portfoilo/portfolio-3.jpg"
import pf4 from "../images/portfoilo/portfolio-4.jpg"
import pf5 from "../images/portfoilo/portfolio-5.jpg"
import pf6 from "../images/portfoilo/portfolio-6.jpg"
import pf7 from "../images/portfoilo/portfolio-7.jpg"
import pf8 from "../images/portfoilo/portfolio-8.jpg"
import pf9 from "../images/portfoilo/portfolio-9.jpg"
import Gotop from '../components/Gotop'

function Portfoilo() {
  return (
    <>
    <Gotop/>
    <div className='bg-[#F3F8FA]'>
    <div className='flex flex-col md:flex-row text-left justify-between max-w-screen-xl mx-auto py-4 md:px-3 px-7'>
     <h1 className='text-3xl font-light'>Our Portfoilo</h1>
      <p> <a href='/' className='text-[#45BEFF] hover:text-[#3ba1d8] p-1 text-center'>Home</a> / Our Portfoilo</p>
    </div>
    </div>


      <div className="flex justify-center items-center mb-10 mt-6 text-[15px]  md:flex md:justify-center md:mb-10 md:mt-6">

        <p className="ml-12 pl-2 pr-2 text-[#68A4C4] cursor-pointer border-[#68A4C4] border-b-[3px]" >
          All
        </p>
        <p className="ml-12 hover:text-[#68A4C4] cursor-pointer hover:border-[#68A4C4] hover:border-b-[3px] ease-in-out duration-200">
          App
        </p>
        <p className="ml-12 hover:text-[#68A4C4] cursor-pointer hover:border-[#68A4C4] hover:border-b-[3px] ease-in-out duration-200">
          Card
        </p>
        <p className="ml-12 hover:text-[#68A4C4] cursor-pointer hover:border-[#68A4C4] hover:border-b-[3px] ease-in-out duration-200">
          Web
        </p>
      </div>

      <div className="grid gap-8 pl-10 pr-10 mb-10  md:grid md:grid-cols-3 md:gap-8 md:mb-20 md:pl-20 md:pr-20">
        <div>
          <img className="rounded-md hover:bg-sky-700" src={pf1} alt="" />
        </div>
        <div>
          <img className="rounded-md" src={pf2} alt="" />
        </div>
        <div>
          <img className="rounded-md" src={pf3} alt="" />
        </div>
        <div>
          <img className="rounded-md" src={pf4} alt="" />
        </div>
        <div>
          <img className="rounded-md" src={pf5} alt="" />
        </div>
        <div>
          <img className="rounded-md" src={pf6} alt="" />
        </div>
        <div>
          <img className="rounded-md" src={pf7} alt="" />
        </div>
        <div>
          <img className="rounded-md" src={pf8} alt="" />
        </div>
        <div>
          <img className="rounded-md" src={pf9} alt="" />
        </div>
      </div>

    </>
  )
}

export default Portfoilo;
