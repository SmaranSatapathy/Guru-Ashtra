import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Card({title,path}) {
  const navigate=useNavigate()

  const handlePath=()=>{
    navigate(path)
  }
  return (
    <>
        <div className="card" onClick={handlePath}>{title}</div>
    </>
  )
}
