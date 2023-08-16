import React from 'react';
import bgvid from "../images/why-us.jpg";
import service1 from "../images//services/service-details-1.jpg";
import service2 from "../images//services/service-details-2.jpg";
import service3 from "../images//services/service-details-3.jpg";
import service4 from "../images//services/service-details-4.jpg";
import Gotop from '../components/Gotop';

function Services() {
  return (
<>
<Gotop/>
    <div className='bg-[#F3F8FA]'>
    <div className='flex flex-col md:flex-row text-left justify-between max-w-screen-xl mx-auto py-4 md:px-3 px-7'>
     <h1 className='text-3xl font-light'>Our Services</h1>
      <p> <a href='/' className='text-[#45BEFF] hover:text-[#3ba1d8] p-1 text-center'>Home</a> / Our Services</p>
    </div>
    </div>


    <section>
      <div className='container'>
        <div className="row max-w-screen-xl mx-auto md:flex-row md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex flex-col justify-center items-center text-center gap-3 py-16 ">
          <div className="card rounded-none shadow-lg md:shadow-2xl  hover:border hover:border-[#FF689B]" style={{width: "20rem", height: "20rem"}}>
            <div className="card-body">
              <div className='bg-[#FCEEF3] rounded-full p-3 px-3 max-w-screen-xl mx-auto mb-2'>
         <i class="bi bi-dribbble text-3xl text-[#FF689B]"></i>
         </div>
             <h5 className=" font-bold text-center text-xl">Lorem Ipsum</h5>
            <p className="card-text">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
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
          
         
          <div className="card rounded-none shadow-lg md:shadow-2xl  hover:border hover:border-[#41CF2E]" style={{width: "20rem", height: "20rem"}}>
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



   <section className='mb-20'>
    <div className="container-lg">
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
   <div className=''>
        <img src={service1} className='relative hover:animate-bounce  w-full transition ease-in-out duration-300 delay-150 hover:delay-300 '  alt="" />
        <div className="card ml-8 mr-8 md:mr-0 mb-6 md:mb-0 rounded-none border-t-4  border-b-white border-l-white border-r-white drop-shadow-xl shadow-sm border-t-white hover:border-t-[#68A4C4] py-4 p-5" style={{top: "-50px", }}>
        <h5 class="text-2xl font-bold hover:text-[#68A4C4] text-[#1E4356] text-center ">Our Misson</h5>
        <p class="md:text-lg text-sm text-left mt-3">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <p className='mt-3 text-left text-sm hover:text-[#68A4C4]'><i className='bi bi-arrow-right'></i> READ MORE</p>
        </div>
  </div>
  </div>
  <div class="col">
   <div className=''>
        <img src={service2} className='relative w-full hover:animate-bounce transition duration-300 delay-150 hover:delay-300'  alt="" />
        <div className="card ml-8 mr-8 md:mr-0 mb-6 md:mb-0 rounded-none border-t-4 border-b-white border-l-white border-r-white drop-shadow-xl shadow-sm border-t-white hover:border-t-[#68A4C4] py-4 p-5" style={{top: "-50px", }}>
        <h5 class="text-2xl font-bold hover:text-[#68A4C4] text-[#1E4356] text-center ">Our Plan</h5>
        <p class="md:text-lg text-sm text-left mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
        <p className='mt-3 text-left text-sm hover:text-[#68A4C4]'><i className='bi bi-arrow-right'></i> READ MORE</p>
        </div>
  </div>
  </div>
  <div class="col">
   <div className=''>
        <img src={service3} className='relative w-full hover:animate-bounce transition duration-300 delay-150 hover:delay-300'  alt="" />
        <div className="card ml-8 mr-8 md:mr-0 mb-6 md:mb-0 rounded-none border-t-4 border-b-white border-l-white border-r-white drop-shadow-xl shadow-sm border-t-white hover:border-t-[#68A4C4] py-4 p-5" style={{top: "-50px", }}>
        <h5 class="text-2xl font-bold hover:text-[#68A4C4] text-[#1E4356] text-center ">Our Vision</h5>
        <p class="md:text-lg text-sm text-left mt-3">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
        <p className='mt-3 text-left text-sm hover:text-[#68A4C4]'><i className='bi bi-arrow-right'></i> READ MORE</p>
        </div>
  </div>
  </div>
  <div class="col">
   <div className=''>
        <img src={service4} className='relative w-full hover:animate-bounce transition duration-300 delay-150 hover:delay-300'  alt="" />
        <div className="card ml-8 mr-8 md:mr-0 mb-6 md:mb-0 rounded-none border-t-4 border-b-white border-l-white border-r-white drop-shadow-xl shadow-sm border-t-white hover:border-t-[#68A4C4] py-4 p-5" style={{top: "-50px", }}>
        <h5 class="text-2xl font-bold hover:text-[#68A4C4] text-[#1E4356] text-center ">Our Care</h5>
        <p class="md:text-lg text-sm text-left mt-3">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut</p>
        <p className='mt-3 text-left text-sm hover:text-[#68A4C4]'><i className='bi bi-arrow-right'></i> READ MORE</p>
        </div>
  </div>
  </div>
</div>
    </div>
   </section>

  <section className='bg-light'>
    <div className='container-lg py-12'>
      <div className='flex flex-col'>
        <h1 className=' text-3xl font-semibold'>Pricing</h1>
       
        <p className='py-4'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>
   
    <div className="flex flex-col md:flex-row " style={{gap:"-50rem"}}>
  <div className="col py-4 ">
    <div className="card h-100 rounded-none border-none shadow-xl drop-shadow-xl">
      <div className="card-body">
        <h5 className="text-3xl font-light">Free</h5>
        <h6 className='text-5xl text-[#68A4C4] '>$0 </h6><span className='text-[#BABABA] text-lg'>per month</span>
      <div className='max-w-screen-xl flex flex-col gap-2'>  <h6 className="text-left md:ml-5 ml-0 text-[#A39999]"><i className='bi bi-check text-xl  text-[#68A4C4]'></i> Quam adipiscing vitae proin</h6>
        <h6 className="text-left text-[#A39999]"><i className='bi bi-check text-xl md:ml-5  ml-0 text-[#68A4C4]'></i> Nec feugiat nisl pretium</h6>
        <h6 className="text-left text-[#A39999]"><i className='bi bi-check text-xl md:ml-5 ml-0  text-[#68A4C4]'></i> Nulla at volutpat diam uteera</h6>
        <h6 className="text-left text-[#CCCCCC] line-through"><i className='bi bi-x text-xl md:ml-5 ml-0 text-[#CCCCCC]'></i> Pharetra massa massa ultricies</h6>
        <h6 className="text-left line-through text-[#CCCCCC]"><i className='bi bi-x text-xl md:ml-5 ml-0 text-[#CCCCCC]'></i> Massa ultricies mi quis hendrerit</h6>
        <button className='mt-2 bg-[#1E4356] hover:bg-[#77bade] text-white mx-auto rounded-full p-1 px-4'>Get Started</button>
      </div>
      </div>
    </div>
  </div>
  <div className="col ">
    <div className="card h-100 rounded-none border-none shadow-xl drop-shadow-xl">
      <div className="card-body">
        <h5 className="text-3xl font-light">Business</h5>
        <h6 className='text-5xl text-[#68A4C4] '>$29 </h6><span className='text-[#BABABA] text-lg'>per month</span>
      <div className='max-w-screen-xl flex flex-col gap-2'>  <h6 className="text-left md:ml-5 ml-0 text-[#A39999]"><i className='bi bi-check text-xl  text-[#68A4C4]'></i> Quam adipiscing vitae proin</h6>
        <h6 className="text-left text-[#A39999]"><i className='bi bi-check text-xl md:ml-5  ml-0 text-[#68A4C4]'></i> Nec feugiat nisl pretium</h6>
        <h6 className="text-left text-[#A39999]"><i className='bi bi-check text-xl md:ml-5 ml-0  text-[#68A4C4]'></i> Nulla at volutpat diam uteera</h6>
        <h6 className="text-left text-[#A39999] "><i className='bi bi-check text-xl md:ml-5 ml-0 text-[#68A4C4]'></i> Pharetra massa massa ultricies</h6>
        <h6 className="text-left  text-[#A39999]"><i className='bi bi-check text-xl md:ml-5 ml-0 text-[#68A4C4]'></i> Massa ultricies mi quis hendrerit</h6>
      <button className='mt-2 bg-[#68A4C4] hover:bg-[#77bade] text-white mx-auto rounded-full p-1 px-4'>Get Started</button>
      </div>
      </div>
    </div>
  </div>
  <div className="col py-4">
    <div className="card h-100 rounded-none border-none shadow-xl drop-shadow-xl">
      <div className="card-body">
        <h5 className="text-3xl font-light">Developer</h5>
        <h6 className='text-5xl text-[#68A4C4] '>$49 </h6><span className='text-[#BABABA] text-lg'>per month</span>
      <div className='max-w-screen-xl flex flex-col gap-2'>  <h6 className="text-left md:ml-5 ml-0 text-[#A39999]"><i className='bi bi-check text-xl  text-[#68A4C4]'></i> Quam adipiscing vitae proin</h6>
        <h6 className="text-left text-[#A39999]"><i className='bi bi-check text-xl md:ml-5  ml-0 text-[#68A4C4]'></i> Nec feugiat nisl pretium</h6>
        <h6 className="text-left text-[#A39999]"><i className='bi bi-check text-xl md:ml-5 ml-0  text-[#68A4C4]'></i> Nulla at volutpat diam uteera</h6>
        <h6 className="text-left text-[#A39999] "><i className='bi bi-check text-xl md:ml-5 ml-0 text-[#68A4C4]'></i> Pharetra massa massa ultricies</h6>
        <h6 className="text-left  text-[#A39999]"><i className='bi bi-check text-xl md:ml-5 ml-0 text-[#68A4C4]'></i> Massa ultricies mi quis hendrerit</h6>
        <button className='mt-2 bg-[#1E4356] hover:bg-[#77bade] text-white mx-auto rounded-full p-1 px-4'>Get Started</button>
      </div>
      </div>
    </div>
  </div>
</div>
</div>
  </section>
    </>
  )
}

export default Services;
