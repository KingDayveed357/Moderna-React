import React, { useState } from 'react';
import bg from "../images/hero-bg.jpg";
import bgvid from "../images/why-us.jpg";
import { NavLink } from 'react-router-dom';
import feature1 from "../images/features-1.svg";
import feature2 from "../images/features-2.svg";
import feature3 from "../images/features-3.svg";
import feature4 from "../images/features-4.svg";

import "../style.css";
import Gotop from '../components/Gotop';
import Footer from '../components/Footer';

const carouselData = [
  {
    heading: "Welcome to Moderna",
    text: `Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. 
    Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.` ,
    backgroundImg: `url(${bg})`,
  },
  {
    heading: `Lorem ipsum dolor sit amet.`,
    text: `Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
     Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.` , 
    backgroundImg: `url(${bg})`,
  },
  {
    heading: "Sequi ea ut et est quaerat",
    text: `Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut.
     Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.` , 
    backgroundImg: `url(${bg})`,
  },
 
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <>    

<Gotop/>
  <div className="hero-container">
   <header className="navigation-header  container ">
  <nav className='navbar  navbar-expand-lg flex justify-between'>
  <div className="container-sm">
        <a href="/" className="flex items-center">
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">MODERNA</span>
        </a>
        <button className="navbar-toggler font-extralight text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon font-extralight "></span>
        </button>
        <div className=" w-full md:block md:w-auto  collapse navbar-collapse md:navbar-end navbar-center " id="navbarNavDropdown">
          <ul className="navbar-nav flex flex-col font-medium p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white ">
            <li>
              <NavLink to="/" className="block py-2 pl-3 pr-4 active:text-[#A2CCE3] focus:text-[#A2CCE3] text-white hover:text-[#A2CCE3] md:p-0" activeClassName="font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="block py-2 pl-3 pr-4 active:text-[#A2CCE3] focus:text-[#A2CCE3]  md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="block py-2 pl-3 pr-4 active:text-[#A2CCE3] focus:text-[#A2CCE3] md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfoilo" className="block py-2 pl-3 active:text-[#A2CCE3] focus:text-[#A2CCE3] pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Portfoilo
              </NavLink>
            </li>
            <li>
              <NavLink to="/team" className="block py-2 pl-3 pr-4 md:border-0 active:text-[#A2CCE3] focus:text-[#A2CCE3] md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="active:text-[#A2CCE3] focus:text-[#A2CCE3] block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Blog
              </NavLink>
            </li>
         

            <li>
              <NavLink to="/contact" className="block py-2 pl-3 active:text-[#A2CCE3] focus:text-[#A2CCE3] pr-4 md:border-0 md:p-0 hover:text-[#A2CCE3]" activeClassName="font-semibold">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  </nav>
    </header>

    <div className="hero-carousel relative  " >
       <div className="carousel-content  carousel-fade"  style={{ backgroundImage: carouselData[activeSlide].backgroundImg, height: "fit-content", borderBottomColor: "#D1E3ED", borderBottomRadius: "5rem", borderBottomLeftRadius: "20%", borderBottomRightRadius: "40%", borderBottomWidth: "30px" }}  >
      <div className="hero-overlay bg-opacity-60 "  style={{ borderBottomColor: "#D1E3ED",  borderBottomLeftRadius: "20%", borderBottomRightRadius: "40%",  }}>
        <div className='max-w-screen-lg  mx-auto flex flex-col justify-center text-center items-center py-20  md:py-40 text-white'>
        <div className='flex flex-row md:gap-12 gap-6 '>
         <button onClick={prevSlide}>
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         </button>
         <div className='flex flex-col' data-aos="fade-up" data-aos-delay="100"  data-bs-interval="5000">
        <h1 className="animate__animated animate__fadeInDown mb-5 md:text-5xl text-2xl mt-10 md:mt-0"  data-aos="fade-up" data-aos-delay="200"> {carouselData[activeSlide].heading}</h1>
         <p className="animate__animated animate__fadeInUp mb-5">{carouselData[activeSlide].text}</p>
         <button className='animate__animated animate__fadeInUp max-w-screen-sm mx-auto rounded-full p-2 px-4 hover:bg-[#68A4C4] border-1 border-[#68A4C4] '>Read More</button>
         </div>
      <button onClick={nextSlide}><span className="carousel-control-next-icon" aria-hidden="true"></span></button>
      </div>
         </div>
      </div>
      </div>
     </div>
     </div>

     <section>
      <div className='container'>
        <div className="row max-w-screen-xl mx-auto md:flex-row md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex flex-col justify-center items-center text-center gap-4 py-16 ">
          <div className="card rounded-none shadow-lg md:shadow-2xl   hover:border hover:border-[#FF689B]" data-aos="fade-up"  data-aos-duration="3000" style={{width: "20rem", height: "20rem"}}>
            <div className="card-body">
              <div className='bg-[#FCEEF3] rounded-full p-3 px-3 max-w-screen-xl mx-auto mb-2'>
         <i class="bi bi-dribbble text-3xl text-[#FF689B]"></i>
         </div>
             <h5 className=" font-bold text-center text-xl">Lorem Ipsum</h5>
            <p className="card-text" data-aos="fade-up"  data-aos-duration="3000">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
         </div>
          </div>
          
         
          <div className="card rounded-none shadow-lg md:shadow-2xl  hover:border hover:border-[#3FCDC7]" style={{width: "20rem", height: "20rem"}}>
            <div className="card-body">
              <div className='bg-[#E6FDFC] rounded-full p-3 px-3 max-w-screen-xl mx-auto mb-2'>
         <i class="bi bi-file-earmark-text text-3xl text-[#3FCDC7]"></i>
         </div>
             <h5 className="font-bold text-xl ">Sed ut perspiciatis</h5>
            <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
         </div>
          </div>
          
         
          <div className="card rounded-none shadow-lg md:shadow-2xl  hover:border hover:border-[#41CF2E]" data-aos="zoom-in" data-aos-duration="3000" style={{width: "20rem", height: "20rem"}}>
            <div className="card-body">
              <div className='bg-[#EAFDE7] rounded-full p-3 px-3 max-w-screen-xl mx-auto mb-2'>
         <i class="bi bi-speedometer2 text-3xl text-[#41CF2E]"></i>
         </div>
             <h5 className="font-bold text-xl">Magni Dolores</h5>
            <p className="card-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
         </div>
          </div>
         
         
          <div className="card rounded-none shadow-lg md:shadow-2xl  hover:border hover:border-[#2282FF]" style={{width: "20rem", height: "20rem"}}>
            <div className="card-body">
              <div className='bg-[#E1EEFF] rounded-full p-3 px-3 max-w-screen-xl mx-auto mb-2'>
         <i class="bi bi-globe text-3xl text-[#2282FF]"></i>
         </div>
             <h5 className="font-bold text-xl">Nemo Enim</h5>
            <p className="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
         </div>
          </div>
          </div>
        
      </div>
     </section>


   <section className='bg-light'>
    <div className="container max-w-screen-xl ">
      <div className="my-5 py-5 ">
        <div className='row bg-white md:shadow-2xl shadow-lg '>
        <div className="col-md-6 p-3">
          <img src={bgvid} alt="" className='' srcset="" />
        </div>
        <div className="col-md-6 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center p-5 gap-20">
    <div className='flex gap-4'>
      <div className='w-32 hover:bg-[#68A4C4] h-20 p-2 bg-[#F3F8FA] rounded-lg'><i className='bi bi-fingerprint text-5xl text-[#68A8CE] hover:text-white'></i></div>
  <div className="flex flex-col text-left">
  
  <h1 className='font-bold text-xl'>LOREM IPSUM</h1>
  <p className='mt-2'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
  </div>
  </div>
  <div className='flex gap-4'>
      <div className=' hover:bg-[#68A4C4] w-32  h-20 p-2 bg-[#F3F8FA] rounded-lg'><i className='bi bi-gift text-5xl  text-[#68A8CE] hover:text-white'></i></div>
  <div className="flex flex-col text-left">
  
  <h1 className='font-bold text-xl'>LOREM IPSUM</h1>
  <p className='mt-2'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
  </div>
  </div>
  </div>
        </div>
      </div>
    </div>
    </div>
   </section>


   <section className='max-w-screen-xl mx-auto py-8 px-6 md:py-16 flex flex-col gap-8'>
  <div className='flex flex-col gap-2'>
  <h1 className="text-3xl">Features</h1>
  <p className='leading-7'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
  </div>

  <div className='container mt-16 '>
   <div className="row">
    <div className="col-md-5">
    <div className='' ><img src={feature1} alt="" className='' /></div>
    </div>
    <div className="col-md-7 text-left flex flex-col justify-center">
    <h1 className='text-2xl text-bold mt-5 md:mt-0'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
    <p className='italic mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className='w-[100%] flex flex-col mt-4 gap-3'>
      <p><i className='bi bi-check text-[#68A4C4]'></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p><i className='bi bi-check text-[#68A4C4]'></i> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
    </div>
    </div>
   </div>
  </div>

  <div className='container md:mt-16 mt-7'>
   <div className="row">
    <div className="col-md-7 text-left flex flex-col justify-center">
    <h1 className='text-2xl text-bold'>Corporis temporibus maiores provident</h1>
    <p className='italic mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className=' flex flex-col mt-4 gap-3'>
    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </div>
    </div>
    <div className="col-md-5">
    <div className='' ><img src={feature2} alt="" className='' /></div>
    </div>
   </div>
  </div>

  
  <div className='container mt-20 '>
   <div className="row">
    <div className="col-md-5">
    <div className='' ><img src={feature3} alt="" className='' /></div>
    </div>
    <div className="col-md-7 text-left flex flex-col justify-center">
    <h1 className='text-2xl text-bold'>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h1>
    <p className='italic mt-3'>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
    <div className='w-[100%] flex flex-col mt-4 gap-3'>
      <p><i className='bi bi-check text-[#68A4C4]'></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p><i className='bi bi-check text-[#68A4C4]'></i> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
      <p><i className='bi bi-check text-[#68A4C4]'></i> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
    </div>
    </div>
   </div>
  </div>

  <div className='container md:mt-16 mt-7'>
   <div className="row">
    <div className="col-md-7 text-left flex flex-col justify-center">
    <h1 className='text-2xl text-bold'>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h1>
    <p className='italic mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className=' flex flex-col mt-4 gap-3'>
    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
    </div>
    </div>
    <div className="col-md-5">
    <div className='' ><img src={feature4} alt="" className='' /></div>
    </div>
   </div>
  </div>
 
</section>
<Footer/>
     </>

  );
};

export default Home;
