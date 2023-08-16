import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonial from "../images/about/testimonials-1.jpg"
import testimonials2 from '../images/about/testimonials-2.jpg'
import testimonials3 from '../images/about/testimonials-3.jpg'
import testimonials4 from '../images/about/testimonials-4.jpg'
import testimonials5 from '../images/about/testimonials-5.jpg'
import './slick-custom.css';

const TestimonialCarousel = () => {
  const testimonials = [
     
    {
        quote:
          '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
        name: 'Saul Goodman',
        role: 'CEO & Founder',
        image:
        testimonial
           },
    {
      quote:
        '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”',
      name: 'Saul Goodman',
      role: 'CEO & Founder',
      image:
      testimonials2
         },
    {
      quote:
        '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloribus laboriosam ratione nam saepe, voluptate soluta recusandae maiores dolorem vero.”',
      name: 'Sara Wilson',
      role: 'Designer',
     
      image:
      testimonials3
      },
    {
      quote:
        '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil sit explicabo eaque saepe dolorum, quod tempora voluptatem iusto, dolorem maxime nesciunt.”',
      name: 'Jena Karlis',
      role: 'Store Owner',
      image:
      testimonials4
    },
      {
        quote:
        '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nihil sit explicabo eaque saepe dolorum, quod tempora voluptatem iusto, dolorem maxime nesciunt.”',
      name: 'Matt Brandon',
      role: 'Marketing Manager',
      image:
      testimonials5
      },
    // Add more testimonials here
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-white opacity-20"></div>
      {/* Slides */}
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Slider {...sliderSettings} >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              
              {/* <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
              <figure className=" max-w-screen-xl">
                  <img className="mx-auto  h-32 w-32 rounded-full" src={testimonial.image} alt="" />
                    <div className="font-bold text-xl text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                <blockquote className="text-center   leading-8 text-gray-900">
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption className="mt-10">
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                
                  </div>
                </figcaption>
                <p></p>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;