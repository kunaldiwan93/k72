import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className=' font-[Font2] flex items-center justify-center gap-2'>
        <Link to='/projects' className=' text-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 border-white rounded-full uppercase px-14'>Projects</Link>
        <Link to='/agence' className=' text-[5vw] hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 border-white rounded-full uppercase px-14'>Agence</Link>
    </div>
  )
}

export default HomeBottomText