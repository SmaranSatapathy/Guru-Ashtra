import React, { useEffect, useState } from 'react'

export default function Faculty() {
    const [teacher,setTeacher]=useState([])

    const getAllTeachers=async()=>{
        try {
            const response=await fetch("http://localhost:5000/teachers")
            const jsonData=await response.json()
            setTeacher(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getAllTeachers()
    },[])
  return (
    <div className='faculty_section'>
        <h1>My Collegeues</h1>
        <table>
            <tr>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>Teacher Code</th>
            </tr>
            
            {teacher.map(t=>(
                <tr key={t.t_code}>
                    <td>{t.name}</td>
                    <td>{t.email}</td>
                    <td>{t.t_code}</td>
                </tr>
            ))}
        </table>
    </div>
  )
}
