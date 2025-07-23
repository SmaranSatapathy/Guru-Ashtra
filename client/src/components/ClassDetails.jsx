import React, { useState,useEffect } from 'react'

export default function MyClass() {
    const [studs,setStuds]=useState([])
    const t_code=localStorage.getItem("teacher_code")

    const getStudentsData=async()=>{
        try {
            const response=await fetch(`http://localhost:5000/student/${t_code}`)
            const jsonData=await response.json()
            setStuds(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    }

     useEffect(() => {
            if (t_code) {
                getStudentsData();
            }
    }, [t_code]);

  return (
    <>
    <h1>List of Students</h1>
        <table>
            <tr>
                <th>Reg No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Father Name</th>
                <th>Mother Name</th>
                <th>Date of Birth</th>
            </tr>
                {studs.map(student=>(
                    <tr key={student.roll_no}>
                        <td>{student.roll_no}</td>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>{student.father_name}</td>
                        <td>{student.mother_name}</td>
                        <td>{student.dob}</td>
                    </tr>
                ))}
        </table>
    </>
  )
}
