import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function LoginForm({setName}) {
    const navigate=useNavigate()
    const [t_code,setTCode]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=async e=>{
        e.preventDefault()

        try {
            const body={t_code:t_code,password:password}
            const response=await fetch("http://localhost:5000/teachers/login",{
                method:"POST",
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })

            const data=await response.json()

            if(data.success){
                alert(`Welcome ${data.name}`)
                setName(data.name)
                localStorage.setItem('teacher_code',t_code)
                console.log("teacher_code stored: ", localStorage.getItem('teacher_code'));
                navigate('/')
            }
            else
                alert(data.message)
        } catch (error) {
            console.error(error.message)
        }
    }
  return (
    <>
        <h1>Login using your Credentials Please</h1>
    <div className='login_section'>
        <form className="login_form" onSubmit={handleSubmit}>
            <label>
                <p>Enter teacher code: </p>
                <input type="text" name="" placeholder='Enter the teacher code' value={t_code} onChange={(e)=>setTCode(e.target.value)} />
            </label>
            <label>
                <p>Enter password: </p>
                <input type="password" name="" placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <p>New to Guru Ashtra? <Link to='/register'>Register Now</Link> </p>
                <button type="submit">Login</button>
        </form>
    </div>
    </>
  )
}
