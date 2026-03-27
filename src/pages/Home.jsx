import React from 'react'
import Video from "../components/home/Video.jsx"
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen bg-red-900 fixed inset-0 -z-10 overflow-hidden'>
        <Video />
      </div>
      <div className=' h-screen w-screen flex flex-col justify-between text-white relative'>
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home