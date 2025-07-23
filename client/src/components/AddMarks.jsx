import React, { useEffect, useState } from 'react'

export default function AddMarks() {
    const [roll,setRoll]=useState("")
    const [eng,setEng]=useState("")
    const [math,setMath]=useState("")
    const [odia,setOdia]=useState("")
    const [sci,setSci]=useState("")
    const [sst,setSst]=useState("")
    const [comp,setComp]=useState("")

    const handleSubmit=async e=>{
        e.preventDefault()

        try {
            const body={roll_no:roll,english:eng,maths:math,odia:odia,science:sci,social_studies:sst,computer:comp}
            const response=await fetch("http://localhost:5000/students/marks",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })

            const data=await response.json()
            alert("Student marks added successfully!!")
            window.location.reload()
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
            setRoll("")
            setEng("")
            setMath("")
            setOdia("")
            setSci("")
            setSst("")
            setComp("")
    },[])
  return (
   <>
    <h1>Enter Students Marks</h1>
    <div className='add_marks_section'>
        <form className='marks_form' onSubmit={handleSubmit} >
            <input type="number" name="" placeholder='Enter reg number' value={roll} onChange={e=>setRoll(e.target.value)} />
            <input type="number" name="" placeholder='Enter English Marks' value={eng} onChange={e=>setEng(e.target.value)} />
            <input type="number" name="" placeholder='Enter Maths Marks' value={math} onChange={e=>setMath(e.target.value)} />
            <input type="number" name="" placeholder='Enter Odia/Hindi Marks' value={odia} onChange={e=>setOdia(e.target.value)} />
            <input type="number" name="" placeholder='Enter Science Marks' value={sci} onChange={e=>setSci(e.target.value)} />
            <input type="number" name="" placeholder='Enter Social Studies Marks' value={sst} onChange={e=>setSst(e.target.value)} />
            <input type="number" name="" placeholder='Enter Computer Marks' value={comp} onChange={e=>setComp(e.target.value)} />
            <button type="submit" className='addBtn'>Add</button>
        </form>
    </div>
   </>
  )
}
