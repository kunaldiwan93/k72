import React from 'react'
import Video from './video'

const HomeHeroText = () => {
  return (
    <div className=' font-[Font2] text-white text-center pt-4'>
        <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]'>L'étincelle</div>
        <div className='text-[9.5vw] flex justify-center items-start uppercase leading-[8vw]'>
            qui
            <div className=' h-[7vw] rounded-full overflow-hidden w-[15vw] '>
                <Video />
            </div>
            génère
            </div>
        <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]'>la créativité</div>
    </div>
  )
}

export default HomeHeroText