import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination,Navigation
} from 'swiper';

import ComponentProfile from './Profile'
import ComponentProject from './Project'
import ComponentEnquiry from './Enquiry'

// install Swiper modules
SwiperCore.use([EffectCube,Pagination,Navigation]);

export default function ComponentSwiper({ swipeProfile, swipeProject, swipeEnquiry, projects }) {
  const [swiped, setSwiped] = useState(false)

  return (
    <>
      <button className="text-white text-2xl fixed top-0 bottom-0 left-0 px-2 swiper-nav__prev z-10 bg-gradient-to-r hover:from-white hover:opacity-25">&#8678;</button>
      <button className="text-white text-2xl fixed top-0 bottom-0 right-0 px-2 swiper-nav__next z-10 bg-gradient-to-l hover:from-white hover:opacity-25">&#8680;</button>
      <div className="h-full h-screen overflow-hidden bg-black">
        <Swiper onSlideChange={() => setSwiped(true)} effect={'cube'} grabCursor={false} pagination={{
          "type": "progressbar"
        }} navigation={{
          prevEl: '.swiper-nav__prev',
          nextEl: '.swiper-nav__next',
        }}>
          <SwiperSlide><ComponentProfile video={swipeProfile.video} title={swipeProfile.title} swiped={swiped} /></SwiperSlide>
          <SwiperSlide>{({ isActive }) => <ComponentProject video={swipeProject.video} title={swipeProject.title} projects={projects} isActive={isActive} />}</SwiperSlide>
          <SwiperSlide><ComponentEnquiry video={swipeEnquiry.video} title={swipeEnquiry.title} /></SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}
