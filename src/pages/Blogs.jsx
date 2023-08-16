import React from 'react';
import blog from "../images/blog/blog-1.jpg";
import blog2 from "../images/blog/blog-2.jpg";
import blog3 from "../images/blog/blog-3.jpg";
import blog4 from "../images/blog/blog-4.jpg";
import recent from "../images/blog/blog-recent-1.jpg";
import recent2 from "../images/blog/blog-recent-2.jpg";
import recent3 from "../images/blog/blog-recent-3.jpg";
import recent4 from "../images/blog/blog-recent-4.jpg";
import recent5 from "../images/blog/blog-recent-5.jpg";

import Gotop from "../components/Gotop";

function Blogs() {
return (
<>
<Gotop/>
<div className='bg-[#F3F8FA]'>
<div className='flex flex-col md:flex-row text-left justify-between max-w-screen-xl mx-auto py-4 md:px-3 px-7'>
<h1 className='text-3xl font-light'>Blog</h1>
<p> <a href='/' className='text-[#45BEFF] hover:text-[#3ba1d8] p-1 text-center'>Home</a> / Blog</p>
</div>
</div>

<main>
<div className="container-lg py-12">
<div className="row g-4">
<div className="col-md-8">
<div className="flex flex-col gap-5">
<div class="col " id="item1">
<div class="card rounded-none shadow-sm drop-shadow-lg border-none">
<img src={blog}  className="h-[60vh] " alt="..."/>
<div className="card-body">
<h1 className="card-title text-2xl text-[#1E4356] font-bold text-start pb-2 hover:text-blue-400 ">
Dolorum optio tempore voluptas dignissimos cumque fuga qui
quibusdam quia
</h1>
<div className="md:flex grid grid-cols-2">
<span className="flex ">
<i class="bi bi-person  text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">John Doe</p>
</span>
<span className="flex mx-1">
<i class="bi bi-clock text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">
Jan 1, 2021
</p>
</span>
<span className="flex mx-1">
<i class="bi bi-chat-dots  text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">
12 Comments
</p>
</span>
</div>
<div>
<p className="text-start font-light">
Similique neque nam consequuntur ad non maxime aliquam quas.
Quibusdam animi praesentium. Aliquam et laboriosam eius aut
nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
ea dolorem doloremque deleniti aperiam unde soluta. Est cum
et quod quos aut ut et sit sunt. Voluptate porro consequatur
assumenda perferendis dolore.
</p>
</div>
<div className="card-actions flex justify-end">
<button className="bg-blue-400 py-2 px-6 text-sm hover:pointer  text-white">
Read More
</button>
</div>
</div>
</div>
</div>
<div class="col" id="item2">
<div class="card rounded-none shadow-sm drop-shadow-lg border-none ">
<img src={blog2}  className="h-[60vh] " alt="..."/>
<div className="card-body">
<h1 className="card-title text-2xl text-[#1E4356] font-bold text-start pb-2 hover:text-blue-400 ">
Nisi magni odit consequatur autem nulla dolorem
</h1>
<div className="md:flex grid grid-cols-2">
<span className="flex ">
<i class="bi bi-person  text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">John Doe</p>
</span>
<span className="flex mx-1">
<i class="bi bi-clock text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">
Jan 1, 2021
</p>
</span>
<span className="flex mx-1">
<i class="bi bi-chat-dots  text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">
12 Comments
</p>
</span>
</div>
<div>
<p className="text-start font-light">
Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. 
Quo libero rerum voluptatem pariatur nam. Ad impedit qui officiis est in non aliquid veniam laborum. 
Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. 
Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.
</p>
</div>
<div className="card-actions flex justify-end">
<button className="bg-blue-400 py-2 px-6 text-sm hover:pointer  text-white">
Read More
</button>
</div>
</div>
</div>
</div>
<div class="col" id="item3">
<div class="card rounded-none shadow-sm drop-shadow-lg border-none">
<img src={blog3}  className="h-[60vh] " alt="..."/>
<div className="card-body">
<h1 className="card-title text-2xl text-[#1E4356] font-bold text-start pb-2 hover:text-blue-400 ">
Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.
</h1>
<div className="md:flex grid grid-cols-2">
<span className="flex ">
<i class="bi bi-person  text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">John Doe</p>
</span>
<span className="flex mx-1">
<i class="bi bi-clock text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">
Jan 1, 2021
</p>
</span>
<span className="flex mx-1">
<i class="bi bi-chat-dots  text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">
12 Comments
</p>
</span>
</div>
<div>
<p className="text-start font-light">
Aut iste neque ut illum qui perspiciatis similique recusandae non. 
Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis. 
Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.
</p>
</div>
<div className="card-actions flex justify-end">
<button className="bg-blue-400 py-2 px-6 text-sm hover:pointer  text-white">
Read More
</button>
</div>
</div>
</div>
</div>
<div class="col" id="item4">
<div class="card rounded-none shadow-sm drop-shadow-lg border-none">
<img src={blog4}  className="h-[60vh] " alt="..."/>
<div className="card-body">
<h1 className="card-title text-2xl text-[#1E4356] font-bold text-start pb-2 hover:text-blue-400 ">
Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem.
</h1>
<div className="md:flex grid grid-cols-2">
<span className="flex ">
<i class="bi bi-person  text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">John Doe</p>
</span>
<span className="flex mx-1">
<i class="bi bi-clock text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">
Jan 1, 2021
</p>
</span>
<span className="flex mx-1">
<i class="bi bi-chat-dots  text-blue-600 mx-2"></i>
<p className="font-thin text-sm hover:pointer ">
12 Comments
</p>
</span>
</div>
<div>
<p className="text-start font-light">
Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. 
Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui. 
Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. 
Quam quia nesciunt qui aut est non omnis. 
Inventore occaecati et quaerat magni itaque nam voluptas. 
Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.
</p>
</div>
<div className="card-actions flex justify-end">
<button className="bg-blue-400 py-2 px-6 text-sm hover:pointer  text-white">
Read More
</button>
</div>
</div>
</div>
<div className="flex justify-center w-full md:py-4 py-2 gap-3  md:my-2 my-0 text-xl">
<a href="#item1" className="px-3 py-2 hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white focus:bg-blue-400 focus:text-white">
1
</a>
<a href="#item2" className="px-3 py-2 hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white focus:bg-blue-400 focus:text-white">
2
</a>
<a href="#item3" className="px-3 py-2 hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white focus:bg-blue-400 focus:text-white">
3
</a>
<a href="#item4" className="px-3 py-2 hover:bg-blue-400 hover:text-white active:bg-blue-400 active:text-white focus:bg-blue-400 focus:text-white">
4
</a>
</div>
</div>
</div>
</div>
<div className="col-md-4">
<div className="card rounded-none shadow-sm drop-shadow-lg border-none">
<div className="card-body px-3 md:mx-5">
<p className='text-left text-lg text-[#1E4356] font-bold'>Search</p>
<div className="input-group ">
<div className="form ">
<input type="text" className="form-control p-2 md:px-5 px-2 border-[#DDDDDD]"   />
</div>
<span className="input-group-text bg-[#68A4CA] text-white "><i className='bi bi-search'></i></span>
</div>

<p className='text-left text-lg mt-3 text-[#1E4356] font-bold'>Categories</p>
<div className='flex flex-col text-left'>
<h3 className="hover:text-blue-300  py-2">
General <span className="font-thin text-[#AAADAF]">(25) </span>
</h3>
<h3 className="hover:text-blue-300 py-2">
Lifestyle <span className="font-thin text-[#AAADAF]">(12) </span>
</h3>
<h3 className="hover:text-blue-300 py-2">
Travel <span className="font-thin text-[#AAADAF]">(5) </span>
</h3>
<h3 className="hover:text-blue-300 py-2">
Design <span className="font-thin text-[#AAADAF]">(22) </span>
</h3>
<h3 className="hover:text-blue-300 py-2">
Creative <span className="font-thin text-[#AAADAF]">(14) </span>
</h3>
<h3 className="hover:text-blue-300 py-2">
Educaion <span className="font-thin text-[#AAADAF]">(8) </span>
</h3>
</div>
<p className='text-left text-lg mt-3 text-[#1E4356] font-bold'>Recent Posts</p>
<div className="flex flex-col gap-3">
<div className='flex gap-2'>
<img src={recent} className='w-20 ' alt="" srcset="" />
<div className='flex flex-col text-left'>
<p className='text-[#1E4356] hover:text-blue-300 cursor-pointer font-bold'>Nihil blanditiis at in nihil autem</p>
<p className='italic text-[#AAB2C0]'>Jan 1, 2020</p>
</div> 
</div>
<div className='flex gap-2'>
<img src={recent2} className='w-20 ' alt="" srcset="" />
<div className='flex flex-col text-left'>
<p className='text-[#1E4356] hover:text-blue-300 cursor-pointer font-bold'>Quidem autem et impedit</p>
<p className='italic text-[#AAB2C0]'>Jan 1, 2020</p>
</div> 
</div>
<div className='flex gap-2'>
<img src={recent3} className='w-20 ' alt="" srcset="" />
<div className='flex flex-col text-left'>
<p className='text-[#1E4356] hover:text-blue-300 cursor-pointer font-bold'>Id quia et et ut maxime similique occaecati ut</p>
<p className='italic text-[#AAB2C0]'>Jan 1, 2020</p>
</div> 
</div>
<div className='flex gap-2'>
<img src={recent4} className='w-20 ' alt="" srcset="" />
<div className='flex flex-col text-left'>
<p className='text-[#1E4356] hover:text-blue-300 cursor-pointer font-bold'>Laborum corporis quo dara net para</p>
<p className='italic text-[#AAB2C0]'>Jan 1, 2020</p>
</div> 
</div>
<div className='flex gap-2'>
<img src={recent5} className='w-20 ' alt="" srcset="" />
<div className='flex flex-col text-left'>
<p className='text-[#1E4356] hover:text-blue-300 cursor-pointer font-bold'>Et dolores corrupti quae illo quod dolor</p>
<p className='italic text-[#AAB2C0]'>July 23, 2023</p>
</div> 
</div>
</div>
<p className='text-left text-lg mt-3 text-[#1E4356] font-bold'>Tags</p>
<div className='grid grid-cols-2 md:grid-cols-4  gap-2'>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>App</li>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>IT</li>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Business</li>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Mac</li>
</div>
<div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Design</li>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Office</li>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Creative</li>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Studio</li>
</div>
<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Smart</li>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Tips</li>
<li className='p-1 px-2 border hover:bg-[#3F8DBC] hover:text-white cursor-pointer list-none border-[#3F8DBC] text-[#3F8DBC]'>Marketing</li>

</div>
</div>
</div>
</div>
</div>
</div>
</main>

</>
)
}

export default Blogs
