import Card from './components/Card';
import MyClass from './components/MyClass';
import ClassDetails from './components/ClassDetails';
import Navbar from './components/Navbar';
import './styles.css';
import StudentsMarks from './components/StudentsMarks';
import AddStudents from './components/AddStudents';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import {BrowserRouter,Router,Routes,Route,Navigate} from 'react-router-dom'
import { useState,useEffect } from 'react';
import Faculty from './components/Faculty';
import AboutUs from './components/AboutUs';
import AddMarks from './components/AddMarks';
import Events from './components/Events';
import Page from './components/Page';


function App() {
  const [name,setName]=useState("")
  const [isLogIn, setIsLogIn] = useState(false);

  useEffect(() => {
    const teacherCode = localStorage.getItem('teacher_code');
    if (teacherCode) setIsLogIn(true);
  }, []);

  return (
    <div className="App">
     <BrowserRouter>
         <Navbar name={name} setName={setName} isLogIn={isLogIn} setIsLogIn={setIsLogIn} /> <br />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/classdetails' element={isLogIn ? <ClassDetails /> : <Navigate to="/page" />} />
          <Route path='/myClass' element={isLogIn ? <MyClass /> : <Navigate to="/page" />} />
          <Route path='/studentsMarks' element={isLogIn ? <StudentsMarks /> : <Navigate to="/page" />} />
          <Route path='/allStudents' element={isLogIn ? <AddStudents /> : <Navigate to="/page" />} />
          <Route path='/login' element={<LoginForm setName={setName} setIsLogIn={setIsLogIn} />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/teachers' element={isLogIn?<Faculty/> : <Navigate to='/page'/> } />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/addmarks' element={isLogIn?<AddMarks/> : <Navigate to='/page'/> } />
          <Route path='/events' element={isLogIn?<Events/> : <Navigate to='/page'/> } />
          <Route path='/page' element={<Page/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div className="cards">
      <Card title="Add Students" path="/allStudents" />
      <Card title="My Class" path="/myClass" />
      <Card title="Class Details" path="/classdetails" />
      <Card title="Student Marks" path="/studentsMarks" />
      <Card title="Add Students Marks" path="/addmarks" />
      <Card title="Events" path="/events" />
    </div>
  );
}

export default App;


//  <div className="cards">
//         <Card title="Add students"/>
//         <Card title="My Class"/>
//         <Card title="Student Details"/>
//         <Card title="Student Marks"/>
//         <Card title="Time Table"/>
//         <Card title="Events"/>
//       </div>
//       <ClassDetails/>
//       <MyClass/>
//       <StudentsMarks/>
//       <AddStudents/>
//       <LoginForm/>
//       <RegisterForm/>


{/* <Navbar name={name} setName={setName} />  <br />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/classdetails' element={<ClassDetails/>}/>
          <Route path='/myClass' element={<MyClass/>}/>
          <Route path='/studentsMarks' element={<StudentsMarks/>}/>
          <Route path='/allStudents' element={<AddStudents/>}/>
          <Route path='/login' element={<LoginForm setName={setName} />}/>
          <Route path='/register' element={<RegisterForm/>}/>
        </Routes> */}