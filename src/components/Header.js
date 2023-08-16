import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {

return (
<>
<nav className="navbar relative navbar-expand-lg bg-[#1E4356]  p-0 m-0">
      <div className="container-sm">
        <a href="/" className="flex items-center">
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">MODERNA</span>
        </a>
        <button className="navbar-toggler font-extralight border-none text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon  font-extralight "></span>
        </button>
        <div className=" w-full md:block md:w-auto collapse  navbar-collapse md:navbar-end navbar-center " id="navbarNavDropdown">
          <ul className="navbar-nav flex flex-col font-medium p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white ">
            <li>
              <NavLink to="/" className="block text-left active:text-[#A2CCE3] focus:text-[#A2CCE3] py-2 pl-3 pr-4 text-white hover:text-[#A2CCE3] md:p-0" activeClassName="font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="active:text-[#A2CCE3] text-left focus:text-[#A2CCE3] block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="active:text-[#A2CCE3] text-left focus:text-[#A2CCE3] block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfoilo" className="active:text-[#A2CCE3] text-left focus:text-[#A2CCE3] block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Portfoilo
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="active:text-[#A2CCE3] text-left focus:text-[#A2CCE3] block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="active:text-[#A2CCE3] text-left focus:text-[#A2CCE3] block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="active:text-[#A2CCE3] text-left focus:text-[#A2CCE3] block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</>
)
}

export default Header
