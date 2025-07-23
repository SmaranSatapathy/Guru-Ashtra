import React,{useState,useEffect} from 'react'
import '../styles.css'
import LoginForm from './LoginForm'
import {Link,useNavigate} from 'react-router-dom'

export default function Navbar({name,setName,isLogIn,setIsLogIn}) {
    const navigate=useNavigate()
    // const[name,setName]=useState("")
    // const [isLogIn, setIsLogIn] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)
    const [teacherCode, setTeacherCode] = useState(localStorage.getItem('teacher_code'));

    const greetFunc=()=>{
        const hr=new Date().getHours()
        
        if(hr>=4 &&hr<12)
        return "Good Morning"
        else if(hr>=12 && hr<17)
        return "Good Afternoon"
        else if(hr>=17 && hr<24) return "Good Evening"
    }

    const handleLoginSuccess = (userName) => {
      setName(userName);
      setIsLogIn(true);
      setShowLoginForm(false);
      setTeacherCode(localStorage.getItem('teacher_code'))
    };

    const handleLogout = () => {
      localStorage.removeItem('teacher_code');
      setTeacherCode(null);
      setName("");
      setIsLogIn(false);
      localStorage.removeItem('teacher_code')
      setIsLogIn(false)
      navigate('/login')
    };

    useEffect(() => {
    const code = localStorage.getItem('teacher_code');
    if (code) setIsLogIn(true);
  }, []);

  return (
    <div className='navbar'>
        <ul>
            <Link to='/'><li>HOME</li></Link>
            <Link to='/teachers'><li>MY COLLEUGES</li></Link>
            <Link to='/about'><li>ABOUT US</li></Link>
            <li>
              {isLogIn ? 
            (<button className='login_btn' onClick={handleLogout}>Logout</button>):
            (<button className='login_btn' onClick={() => setShowLoginForm(!showLoginForm)}>Login</button>)
            }
            </li>
        </ul>
        <p className="greeting" >{greetFunc()} <p className="name">{name && `${name}`}</p></p>

         {!isLogIn && showLoginForm && (
        <LoginForm setName={handleLoginSuccess} />
        )}
    </div>
  )
}
