import React from 'react'
import about from "../images/about/about.jpg"
import Testimonies from  '../components/Testimonials';
import Gotop from '../components/Gotop';

function About() {
  return (
    <>
     <Gotop/>
  <div className='bg-[#F3F8FA]'>
<div className='flex flex-col md:flex-row text-left justify-between max-w-screen-xl mx-auto py-4 md:px-3 px-7'>
<h1 className='text-3xl font-light'>About Us</h1>
<p> <a href='/' className='text-[#45BEFF] hover:text-[#3ba1d8] p-1 text-center'>Home</a> / About Us</p>
</div>
</div>


<section className='container text-left font-light text-monospace my-5' style={{ width: "80%" }}>
      <div className="grid md:grid-cols-2 gap-2">
        <div>
          <img className="h-auto max-w-full rounded-none" src={about} alt="" />
        </div>
        <div className="md:pl-4">
          <h1 className='text-2l md:text-2xl mb-2'>Voluptatem dignissimos provident quasi</h1>
          <h1 className='text-2l md:text-2xl mb-2'>corporis voluptates sit assumenda</h1>
          <p className='text-md md:text-md font-light mb-3'><i>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ullam
            <br /> dolor veniam commodi voluptates vitae illo nobis, fuga alias dignissimos!
          </i></p>
          <ul className=' ml-2'>
            <li className='text-monospace text-sm mb-3'><i className='bi bi-check2-circle text-primary'></i>  Ullamco labris nisi ut aliquip ex ea co</li>
            <li className='text-monospace text-sm mb-3'><i className='bi bi-check2-circle text-primary'></i>  Duis aute irure dolor in reprehendent in voluptant velit</li>
            <li className='text-monospace text-sm mb-3'><i className='bi bi-check2-circle text-primary'></i>  Ullamco laboris nisi ut aliquip ex ea commodo consequat .Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur,
              Excepteur sint occeacat cupidatat </li>
          </ul>

          <p className='text-sm md:text-base text-monospace'>Ullamco laboris nisi ut aliquip ex ea commodo consequat .Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur,  Excepteur sint occeacat cupidatat non proident, sunt in
            clpa qui officia deserunt mollit anim id est laborum</p>
        </div>
      </div>
    </section>
     <section className='justify-content-center  align-items-center d-flex '  style={{ backgroundColor:"#F3F8FA" }}>
        <div className='container py-20   row  grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0'>
          <div className=' col'><h1 className='text-5xl text-[#68A4C4]'>232</h1> <p className='text-sm font-weigth-light'>Clients</p></div>
          <div className=' col'><h1 className='text-5xl text-[#68A4C4]'>521</h1> <p className='text-sm font-weigth-light'>Projects</p></div>
          <div className='col '><h1 className='text-5xl text-[#68A4C4]'>1463</h1><p className='text-sm font-weigth-light'>Hours Of Support</p></div>
          <div className='col '><h1 className='text-5xl text-[#68A4C4]'>15</h1> <p className='text-sm font-weigth-light'>Hard workers</p></div>
        </div>
      </section>
      <section className='container py-5' style={{width:"80%"}}>
        <h1 className='fs-3 text-monospace pb-3'>Our Skills</h1>
        <p className='text-sm text-monospace font-weight-light pb-4'>Magnam dolores commodi suscipit. Necessitabtibus eius consequatur ex 
        aliquid fuga eum quidem. Sit sint consectetue velit. Quisquam quos quisquam cupiditate.
           Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        <div className="w-full bg-gray-200  h-7 mb-4 rounded-lg dark:bg-gray-700">
          <div className="bg-green-600 h-7 rounded-lg text-white flex justify-between  dark:bg-green-500 text-left pl-2" style={{ width: '100%', }}>HTML    <span className='md:mr-5 mr-0'>100%</span></div>
        </div>
        <div className="w-full bg-gray-200  h-7 mb-4 rounded dark:bg-gray-700">
          <div className="bg-[#0DCAF0] h-7 text-white rounded-lg flex justify-between text-left pl-2" style={{ width: '90%', }}>CSS <span className='md:mr-5 mr-0'>90%</span></div>
        </div>
        <div className="w-full bg-gray-200  h-7 mb-4 rounded dark:bg-gray-700">
          <div className="bg-[#FFC107] h-7  text-white flex justify-between rounded-lg text-left pl-2" style={{ width: '75%', }}>JAVASCRIPT <span className='md:mr-5 mr-0'>75%</span></div>
        </div>
        <div className="w-full bg-gray-200  h-7 mb-4 rounded dark:bg-gray-700">
          <div className="bg-red-600 h-7  text-white rounded-lg flex justify-between gap-2 md:gap-0 dark:bg-red-500 text-left pl-2" style={{ width: '60%', }}>PHOTOSHOP <span className='md:mr-5 mr-0'>55%</span></div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container py-5" style={{width:'80%'}}>
          <div className="section-title text-sm ">
            <h2 className='fs-3 text-monospace pb-3'>Testimonials</h2>
            <p>Magnam dolores commodi suscipit. Necessitabtibus eius consequatur ex 
        aliquid fuga eum quidem. Sit sint consectetue velit. Quisquam quos quisquam cupiditate.
           Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem 
           ea. Quia fugiat sit in iste officiis</p>
          </div>
            <Testimonies />
        </div>
      </section>
    </>
  )
}

export default About
