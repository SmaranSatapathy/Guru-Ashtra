import React, { useEffect, useState } from 'react'

export default function StudenstMarks() {
    const [marks,setMarks]=useState([])
    const t_code=localStorage.getItem('teacher_code')
    // alert(t_code)

    const getStudentsMarks=async()=>{
        try {
            const response=await fetch(`http://localhost:5000/students/marks/${t_code}`)
            const data=await response.json()
            setMarks(data) 
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
            if (t_code) {
                getStudentsMarks();
            }
    }, [t_code]);

  return (
    <>
        <table>
            <tr>
                <th>Name</th>
                <th>English</th>
                <th>Maths</th>
                <th>Odia</th>
                <th>Science</th>
                <th>Social Studies</th>
                <th>Computer</th>
                <th>Total Marks</th>
                <th>Per (%)</th>
            </tr>

            {marks.map(student=>(
                <tr>
                    <td>{student.name}</td>
                    <td>{student.english}</td>
                    <td>{student.maths}</td>
                    <td>{student.odia}</td>
                    <td>{student.science}</td>
                    <td>{student.social_studies}</td>
                    <td>{student.computer}</td>
                    <td>{student.total}</td>
                    <td>{student.percentage}</td>
                </tr>
            ))}
        </table>
    </>
  )
}
