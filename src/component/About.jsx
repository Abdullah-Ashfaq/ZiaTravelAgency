import React from 'react'
import '../css/About.css'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const About = () => {
    const [value, setValue] = React.useState(0);

    React.useEffect(() => {
      const updateValue = () => {
        if (window.innerWidth < 600) {
          setValue(1);
        } else {
          setValue(2);
        }
      };
  
      window.addEventListener('resize', updateValue);
      updateValue();
  
      return () => {
        window.removeEventListener('resize', updateValue);
      };
    }, []);
  return (
    <>
    <div className="about">
        <div className="left-side">
            <div className="heading">
                Services
            </div>
            {/* <div className="text">

                Our travel agency provides services for Hajj & Umrah
                and tourism. The agency offers assistance for travelers
                to perform Hajj and Umrah, including arrangements for
                transportation, accommodations, and other necessary details.
                Additionally, the agency provides various tourism packages
                for travelers to explore different destinations and cultures.
                With their experience and expertise, the travel agency offers
                a hassle-free and enjoyable travel experience for their clients.

            </div> */}

        </div>


        <div className="right-side">
                
            <Swiper
            slidesPerView={value}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 4500,
                disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay,Pagination]}
            className="mySwiper">

                <SwiperSlide className='swiper-slide'><img src="world-tour.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="animated-hajj.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="uae.avif" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="iran-flag-ribbon.avif" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="Malaysia.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="iraq.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="ml.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide' style={{objectFit: "contain"}}
                ><img src="Thailand.jpg" alt="" /></SwiperSlide>
    
            </Swiper>
        


        </div>
    </div>
    
    
    
    </>
  )
}

export default About