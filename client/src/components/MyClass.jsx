import React, { useEffect, useState } from 'react'

export default function MyClass() {
    const [studs,setStuds]=useState([])
    const t_code=localStorage.getItem('teacher_code')
    // console.log(t_code)

    const getStudents=async()=>{
       try {
            const fetchData=await fetch(`http://localhost:5000/student/${t_code}`)
            const data=await fetchData.json()
            setStuds(data)
       } catch (error) {
            console.error(error.message)
       }
    }

     useEffect(() => {
        if (t_code) {
            getStudents();
        }
    }, [t_code]);
  return (
    <>
    <h1>My Class</h1>
        <table>
            <tr>
                <th>Registration Number</th>
                <th>Name</th>
            </tr>
            
            {studs.map(student=>(
                <tr key={student.roll_no}>
                    <td>{student.roll_no}</td>
                    <td>{student.name}</td>
                </tr>
            ))}
        </table>
    </>
  )
}
