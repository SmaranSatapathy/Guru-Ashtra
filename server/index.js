const express=require('express')
const cors=require('cors')
const pool=require('./db.js')

const port=5000

const app=express()

app.use(cors())
app.use(express.json())

// create data of teachers:
app.post('/teachers',async (req,res)=>{
    try {
        const {name,email,t_code,password}=req.body
        const addData=await pool.query("INSERT INTO REGISTER(name,email,t_code,password) VALUES($1,$2,$3,$4) RETURNING *",[name,email,t_code,password])
        res.json(addData)
    } catch (error) {
        console.error(error.message)
    }
})

// get all teachers data
app.get('/teachers',async(req,res)=>{
    try {
        const getData=await pool.query("SELECT * FROM REGISTER")

        if(getData.rows.length===0)
            res.status(500).send("No records found!!!")
        res.json(getData.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// get teachers data
app.get('/teachers/:id',async(req,res)=>{
    try {
        const {id}=req.params
        const getData=await pool.query("SELECT name FROM REGISTER WHERE t_code=$1",[id])

        if(getData.rows.length===0)
            res.status(500).send("No record of the corresponding code found!!!")
        res.json(getData.rows[0].name)
    } catch (error) {
        console.error(error.message)
    }
})

app.post('/teachers/login',async(req,res)=>{
    try {
        const {t_code,password}=req.body
        const loginUser=await pool.query("SELECT name from REGISTER WHERE t_code=$1 and password=$2",[t_code,password])
        
        if(loginUser.rows.length>0){
            res.json({success:true,name:loginUser.rows[0].name})
        }
        else{
            res.json({success:false,message:"Invalid credentails. Try again"})
        }
    } catch (error) {
        console.error(error.message)
    }
})

// creating/adding student details
app.post("/student",async(req,res)=>{
    try {
        const {roll_no,name,father_name,mother_name,email,phone,dob,t_code}=req.body
        const addStudents=await pool.query("INSERT into STUDENTS_DETAILS(roll_no,name,father_name,mother_name,email,phone,dob,t_code) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",[roll_no,name,father_name,mother_name,email,phone,dob,t_code])
        res.json(addStudents.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})


// getting student names and roll for Class Details:
// app.get("/student",async(req,res)=>{
//         try {
//             const getAllStudents=await pool.query("SELECT S.roll_no,S.name,S.father_name,S.mother_name,S.email,S.phone,S.dob,S.t_code FROM STUDENTS_DETAILS S JOIN REGISTER R ON R.t_code=S.t_code ORDER BY S.name asc")
//             res.json(getAllStudents.rows)
//         } catch (error) {
//             console.error(error.message)
//         }
// })

// getting student names and roll for My Class:
app.get("/student/:t_code",async(req,res)=>{
    try {
            const {t_code}=req.params
            const getAllStudents=await pool.query("SELECT * FROM STUDENTS_DETAILS WHERE t_code=$1  ORDER BY name asc",[t_code])
            res.json(getAllStudents.rows)
        } catch (error) {
            console.error(error.message)
        }
})

// updating details of students:
app.put("/student/:roll",async(req,res)=>{
    try {
        const {roll}=req.params
        const {name,phone}=req.body
        const editStudent=await pool.query("UPDATE STUDENTS_DETAILS SET name=$2,phone=$3 where roll_no=$1 RETURNING *",[roll,name,phone])
        res.json(editStudent.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// adding student_marks
app.post('/students/marks',async(req,res)=>{
    try {
        const {roll_no,english,maths,odia,science,social_studies,computer}=req.body
        const addMarks=await pool.query("INSERT INTO STUDENTS_MARKS VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",[roll_no,english,maths,odia,science,social_studies,computer])
        res.json(addMarks.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// displaying all students marks
// app.get("/students/marks",async(req,res)=>{
//     try {
//         const getAllMarks=await pool.query("SELECT d.name,m.english,m.maths,m.odia,m.science,m.social_studies,m.computer,m.total,m.percentage FROM register r JOIN students_details d on r.t_code=d.t_code JOIN students_marks m ON d.roll_no=m.roll_no ORDER BY d.name asc")
//         res.json(getAllMarks.rows)
//     } catch (error) {
//         console.error(error.message)
//     }
// })

// displaying particular students marks
app.get("/students/marks/:t_code",async(req,res)=>{
    try {
        const {t_code}=req.params
        const getMarks=await pool.query("SELECT d.name,m.english,m.maths,m.odia,m.science,m.social_studies,m.computer,m.total,m.percentage FROM students_details d JOIN students_marks m ON d.roll_no=m.roll_no WHERE d.t_code=$1",[t_code])
        res.json(getMarks.rows)
    } catch (error) {
        console.error(error.message)
    }
})

// delete marks of particular 
app.delete('/students/marks/:roll',async(req,res)=>{
    try {
        const {roll}=req.params
        const deleteMarks=await pool.query("DELETE FROM students_marks WHERE roll_no=$1",[roll])
        res.json("Marks record deleted successfully!!")
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})