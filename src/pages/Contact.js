import React from 'react'
import Gotop from '../components/Gotop';

// import Fade from 'react-reveal/Fade';
// import Zoom from 'react-reveal/Zoom';

function Contact() {
  const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY";
  return (
    <>
    <Gotop/>
    <div className='bg-[#F3F8FA]'>
    <div className='flex flex-col md:flex-row text-left justify-between max-w-screen-xl mx-auto py-4 md:px-3 px-7'>
     <h1 className='text-3xl font-light'>Contact Us</h1>
      <p> <a href='/' className='text-[#45BEFF] hover:text-[#3ba1d8] p-1 text-center'>Home</a> / Contact Us</p>
    </div>
    </div>

<section>
<div className="container-lg py-12">
<div className="row">
<div className="col-md-6 flex flex-col gap-4"> 
{/* <Fade bottom cascade> */}
<div class="card rounded-none md:shadow-xl shadow-lg border-none  ">
<div class="card-body">
<div className="border-dotted border-slate-500 w-11 h-11 flex flex-col justify-center items-center rounded-full mx-auto outline-dotted outline-[#45BEFF]">
<i class="bi bi-geo-alt text-[#68A8C8] text-2xl  font-extrabold "></i>
</div>
<h3 className='font-bold text-lg'>Our Address</h3>
<p>A108 Adam Street, New York, NY535022</p>
</div>
</div>
{/* </Fade> */}
<div className="row">
<div className="col-md-6 mb-12 md:mb-0">
{/* <Fade bottom cascade> */}
<div class="card rounded-none md:shadow-xl shadow-lg border-none" >
<div class="card-body">
<div className="border-dotted border-slate-500 w-11 h-11 flex flex-col justify-center items-center rounded-full mx-auto outline-dotted outline-[#45BEFF]">
<i class="bi bi-envelope text-[#68A8C8] text-2xl  font-extrabold "></i>
</div>
<h3 className='font-bold text-lg'>Email Us</h3>
<p>info@splendidtech.com</p>
<p>contact@groupb.com</p>
</div>
</div>
{/* </Fade> */}
</div>
<div className="col-md-6 mb-12 md:mb-0">
{/* <Fade bottom>  */}
<div class="card rounded-none md:shadow-xl shadow-lg border-none" >
<div class="card-body">
<div className=" border-dotted border-slate-500 w-11 h-11 flex flex-col justify-center items-center rounded-full mx-auto outline-dotted outline-[#45BEFF]">
<i class="bi bi-telephone-inbound text-[#68A8C8] text-2xl  font-extrabold "></i>
</div>
<h3 className='font-bold text-lg'>Call Us</h3>
<p>+1 5589 55488 55</p>
<p>+1 6678 254445 41</p>
</div>
</div>
{/* </Fade> */}
</div>
</div>
</div>
<div className="col-md-6">
{/* <Zoom> */}
<div class="card rounded-none md:shadow-xl shadow-lg border-none  border ">
<div class="card-body">
<div className="row">
<div className="col-md-6">
<input type="text" placeholder='Your Name' className='px-11 border border-[#DEE2E6]'/>
</div>
<div className="col-md-6">
<input type="text" placeholder='Your Email' className='px-11 border border-[#DEE2E6]'/>
</div>
</div>

<input type="text" placeholder='Subject' className=' border border-[#DEE2E6]'/>
<textarea className="form-control rounded-none p-4 " id="exampleFormControlTextarea1" placeholder='Message'  rows="3"></textarea>

<button className='bg-[#68A4C4] p-3  mt-2  px-4 mx-auto text-white' >Send Message</button>
</div>
</div>
{/* </Zoom> */}
</div>
</div>
</div>
</section>



{/* <div className="w-full h-96">
        <iframe
          title="Map"
          src={`https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=LOCATION_HERE`}
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
      </div> */}

</>
)
}

export default Contact;
