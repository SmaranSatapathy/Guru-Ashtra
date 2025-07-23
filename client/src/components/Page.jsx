import React from 'react'
import {Link} from 'react-router-dom'

export default function Page() {
  return (
    <div className='page'>
        <div className="left">
            <img src="https://www.pngarts.com/files/8/Anime-PNG-Download-Image.png" alt="" />
        </div>
        <div className="right">
            <p>Oooppss!!!</p>
            <Link to='/login'><p>Log In to your Account 😃</p></Link>
        </div>
    </div>
  )
}
