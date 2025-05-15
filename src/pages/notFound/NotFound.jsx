import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div>
      <h1>NOT FOUND</h1>
      <button onClick={()=>navigate('/')}>go home</button>
      <button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}

export default NotFound
