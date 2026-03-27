import React from 'react'

const Video = () => {
  return (
    <div className=' h-full w-full'>
        <video autoPlay muted loop playsInline className='w-full h-full object-cover' src="../../../public/k72cover.mp4" />
    </div>
  )
}

export default Video