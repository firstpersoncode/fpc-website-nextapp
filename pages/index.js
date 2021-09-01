import { useState } from 'react'
import Head from 'next/head'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  EffectCube,Pagination,Navigation
} from 'swiper';

import ComponentProfile from '../components/Profile'
import ComponentProject from '../components/Project'
import ComponentEnquiry from '../components/Enquiry'

SwiperCore.use([EffectCube,Pagination,Navigation]);

function Home({ swipeProfile, swipeProject, swipeEnquiry, projects }) {
  const [swiped, setSwiped] = useState(false)

  function handleSetSwiped() {
    setSwiped(true)
  }


  return (
    <>
      <Head>
        <title>First Person Code</title>
        <meta name="description" content="Hello, my name is Nasser" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed inset-0 w-full h-screen overflow-hidden bg-black">
        <Swiper onSlideChange={handleSetSwiped} effect={'cube'} grabCursor={false} pagination={{
          "type": "progressbar"
        }} navigation={{
          prevEl: '.swiper-nav__prev',
          nextEl: '.swiper-nav__next',
        }}>
          <SwiperSlide><ComponentProfile data={swipeProfile} swiped={swiped} /></SwiperSlide>
          <SwiperSlide>{({ isActive }) => <ComponentProject data={swipeProject} projects={projects} isActive={isActive} />}</SwiperSlide>
          <SwiperSlide><ComponentEnquiry data={swipeEnquiry} /></SwiperSlide>
        </Swiper>

        <button className="text-white text-2xl fixed top-0 bottom-0 left-0 px-2 swiper-nav__prev z-10 bg-gradient-to-r hover:from-white hover:opacity-25">&#8678;</button>
        <button className="text-white text-2xl fixed top-0 bottom-0 right-0 px-2 swiper-nav__next z-10 bg-gradient-to-l hover:from-white hover:opacity-25">&#8680;</button>
      </div>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const STRAPI_HOST = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"

  try {
    let swipeProfile = await fetch(STRAPI_HOST + "/swipe-profile")
    swipeProfile = await swipeProfile.json()
    let swipeProject = await fetch(STRAPI_HOST + "/swipe-project")
    swipeProject = await swipeProject.json()
    let swipeEnquiry = await fetch(STRAPI_HOST + "/swipe-enquiry")
    swipeEnquiry = await swipeEnquiry.json()

    let projects = await fetch(STRAPI_HOST + "/projects")
    projects = await projects.json()

    return { swipeProfile, swipeProject, swipeEnquiry, projects }
  } catch (err) {
      throw err
  }
}

export default Home
