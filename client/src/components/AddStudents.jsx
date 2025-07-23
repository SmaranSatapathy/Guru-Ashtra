import React, { useEffect, useState } from 'react'

export default function  AddStudentsForm() {
    const [roll,setRoll]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [fName,setFName]=useState("")
    const [mName,setMName]=useState("")
    const [dob,setDOB]=useState("")
    const [t_code,setTCode]=useState("")

    const rollFunc=(e)=>{
        setRoll(e.target.value)
    }
    
    const nameFunc=(e)=>{
        setName(e.target.value)
    }
    const emailFunc=(e)=>{
        setEmail(e.target.value)
    }
    const phoneFunc=(e)=>{
        setPhone(e.target.value)
    }
    const fNameFunc=(e)=>{
        setFName(e.target.value)
    }
    const mNameFunc=(e)=>{
        setMName(e.target.value)
    }
    const dobFunc=(e)=>{
        setDOB(e.target.value)
    }
    const codeFunc=(e)=>{
        setTCode(e.target.value)
    }

    const submitFunc=async e=>{
        e.preventDefault()

        try {
            const body={roll_no:roll,name:name,father_name:fName,mother_name:mName,email:email,phone:phone,dob:dob,t_code:t_code}
            const response=await fetch('http://localhost:5000/student',{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            })

            const data=await response.json()
            console.log("Server response: ",data)
            alert("Student details added successfully!!")
            // window.location.reload()
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        setRoll("");
        setName("");
        setFName("");
        setMName("");
        setEmail("");
        setPhone("");
        setDOB("");
        setTCode("");
    },[])

  return (
    <>
    <h1>Add the students</h1>
       <div className="add_students_section">
            <form className='addStudentsForm' onSubmit={submitFunc}>
            <input type="number" name="" placeholder='Enter roll number' value={roll} onChange={rollFunc}/>
            <input type="text" name="" placeholder='Enter full name' value={name} onChange={nameFunc} />
            <input type="text" name="" placeholder='Enter father name' value={fName} onChange={fNameFunc}/>
            <input type="text" name="" placeholder='Enter mother name' value={mName} onChange={mNameFunc}/>
            <input type="email" name="" placeholder='Enter student email' value={email} onChange={emailFunc} />
            <input type="tel" name="" placeholder='Enter student contact number' value={phone} onChange={phoneFunc} />
            <input type="text" name="" placeholder='Enter date of birth in format yyyy-mm-dd' value={dob} onChange={dobFunc}/>
            <input type="text" name="" placeholder='Enter your teacher code' value={t_code} onChange={codeFunc}/>
            <button type="submit" className='addBtn'>Add</button>
        </form>
       </div>
    </>
  )
}
