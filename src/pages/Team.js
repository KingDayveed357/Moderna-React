import React from 'react'
import team1 from "../images/team/team-1.jpg";
import team2 from "../images/team/team-2.jpg";
import team3 from "../images/team/team-3.jpg";
import team4 from "../images/team/team-4.jpg";
import team5 from "../images/team/team-5.jpg";
import team6 from "../images/team/team-6.jpg";
import Gotop from '../components/Gotop';
import "./team.css";

function Team() {
  return (
    <>
    <Gotop/>
       <div className='bg-[#F3F8FA]'>
    <div className='flex flex-col md:flex-row text-left justify-between max-w-screen-xl mx-auto py-4 md:px-3 px-7'>
     <h1 className='text-3xl font-light'>Our Team</h1>
      <p> <a href='/' className='text-[#45BEFF] hover:text-[#3ba1d8] p-1 text-center'>Home</a> / Our Team </p>
    </div>
    </div>



   <section>
    <div className="container-lg py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     
      <div className="cards">
    <div className='picture1'>
        <img src={team1} className="card-img-top" alt="" />
        <div className='footer-caption'> 
        <div className="icons">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-linkedin"></i>
        </div>
        </div>
        </div>
    <div className="card-body p-2">
      <h5 className="card-title">Walter White</h5>
      <h5 className="text-left text-[#68A4C4]">CHIEF EXECUTIVE OFFICER</h5>
      <p className="text-left font-serif italic font-extralight leading-6 mt-3 text-[15px]">Animi est delectus alias quam repellendus nihil nobis dolor. 
      Est sapiente occaecati et dolore. Omnis aut ut nesciunt explicabo qui. Eius nam deleniti ut omnis repudiandae perferendis qui. 
      Neque non quidem sit sed pariatur quia modi ea occaecati. Incidunt ea non est corporis in.</p>
    
    </div>
  </div>

  <div className="cards">
    <div className='picture1'>
        <img src={team2} className="card-img-top" alt="" />
        <div className='footer-caption'> 
        <div className="icons">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-linkedin"></i>
        </div>
        </div>
        </div>
    <div className="card-body p-2">
      <h5 className="card-title">Sarah Jhonson</h5>
      <h5 className="text-left text-[#68A4C4]">PRODUCT MANAGER</h5>
      <p className="text-left font-serif italic font-extralight leading-6 mt-3 text-[15px]">Aspernatur iste esse aliquam enim et corporis.
       Molestiae voluptatem aut eligendi quis aut. Libero vel amet voluptatem eos rerum non doloremque. Dolores eum non.</p>
    
    </div>
  </div>
  <div className="cards">
   
    <div className='picture1'>
        <img src={team3} className="card-img-top" alt="" />
        <div className='footer-caption'> 
        <div className="icons">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-linkedin"></i>
        </div>
        </div>
        </div>
    <div className="card-body p-2">
      <h5 className="card-title">William Anderson</h5>
      <h5 className="text-left text-[#68A4C4]">CTO</h5>
      <p className="text-left font-serif italic font-extralight leading-6 mt-3 text-[15px]">Ut enim possimus nihil cupiditate beatae. 
      Veniam facere quae non qui necessitatibus rerum eos vero. Maxime sit sunt quo dolor autem est qui quaerat aliquid. Tenetur possimus qui enim.</p>
    
    </div>
  </div>

  <div className="cards">
    <div className='picture1'>
        <img src={team4} className="card-img-top" alt="" />
        <div className='footer-caption'> 
        <div className="icons">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-linkedin"></i>
        </div>
        </div>
        </div>
    <div className="card-body p-2">
      <h5 className="card-title">Amanda Jepson</h5>
      <h5 className="text-left text-[#68A4C4]">ACCOUNTANT</h5>
      <p className="text-left font-serif italic font-extralight leading-6 mt-3 text-[15px]">Sint qui cupiditate. Asperiores fugit impedit aspernatur et mollitia. 
      Molestiae qui placeat labore assumenda id qui nesciunt quo reprehenderit. Rem dolores similique quis soluta culpa enim quia ratione ea.</p>
    
    </div>
  </div>

  <div className="cards">
    <div className='picture1'>
        <img src={team5} className="card-img-top" alt="" />
        <div className='footer-caption'> 
        <div className="icons">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-linkedin"></i>
        </div>
        </div>
        </div>
    <div className="card-body p-2">
      <h5 className="card-title">Niall Katz</h5>
      <h5 className="text-left text-[#68A4C4]">MARKETING</h5>
      <p className="text-left font-serif italic font-extralight leading-6 mt-3 text-[15px]">Aut ex esse explicabo quia harum ea accusamus excepturi. 
      Temporibus at quia quisquam veritatis impedit. Porro laborum voluptatum sed necessitatibus a saepe. 
      Deserunt laborum quasi consequatur voluptatum iusto sint qui fuga vel. 
      Enim eveniet sed quibusdam rerum in. Non dicta architecto consequatur quo praesentium nesciunt.</p>
    
    </div>
  </div>
  <div className="cards">
    <div className='picture1'>
        <img src={team6} className="card-img-top" alt="" />
        <div className='footer-caption'> 
        <div className="icons">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-linkedin"></i>
        </div>
        </div>
        </div>
    <div className="card-body p-2">
      <h5 className="card-title">Demi Lewis</h5>
      <h5 className="text-left text-[#68A4C4]">FINANCING
</h5>
      <p className="text-left font-serif italic font-extralight leading-6 mt-3 text-[15px]">Amet labore numquam corrupti est. 
      Nostrum amet voluptas consectetur dolor voluptatem architecto distinctio consequuntur eligendi. Quam impedit enim aut nesciunt aut dicta quam exercitationem. 
      Reprehenderit exercitationem magnam. Ullam similique ut voluptas totam nobis porro accusamus nulla omnis.</p>
    
    </div>
  </div>

      </div>
    </div>
   </section>
    </>
  )
}

export default Team;
