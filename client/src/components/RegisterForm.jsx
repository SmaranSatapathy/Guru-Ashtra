import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function RegisterForm() {
    const navigate=useNavigate()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [t_code,setTCode]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=async e=>{
        e.preventDefault()
        try {
            const body={name:name,email:email,t_code:t_code,password:password}
            const response=await fetch("http://localhost:5000/teachers",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })

            const data=await response.json()
            localStorage.setItem('teacher_code',t_code)
            setName("")
            setEmail("")
            setTCode("")
            setPassword("")
            navigate('/')
        } catch (error) {
            console.error(error.message)
        }
    }
  return (
    <div className='register_section'>
        <form className="register_form" onSubmit={handleSubmit}>
            <h1>Registration Patrika 📰</h1>
            <input type="text" name="" placeholder='Enter your full name' value={name} onChange={e=>setName(e.target.value)} />
            <input type="email" name="" placeholder='Enter email' value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="text" name="" placeholder='Enter a teacher code which must start as T' value={t_code} onChange={e=>setTCode(e.target.value)}/>
            <input type="password" name="" placeholder='Enter password' value={password} onChange={e=>setPassword(e.target.value)} />
            <p>Already a member?<Link to='/login'>Login now</Link> </p>
            <button type="submit" className='signUp_btn'>Register</button>
        </form>
    </div>
  )
}
