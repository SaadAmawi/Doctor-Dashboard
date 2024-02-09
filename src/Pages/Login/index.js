import React, { useState } from 'react'
import './index.scss'
import{getAuth,createUserWithEmailAndPassword } from "firebase/auth"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Loader from 'react-loaders'


function Login() {

    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [Name, setName]=useState('');
    const nav = useNavigate('');
    const signUp = (e) =>{
        const auth = getAuth();
        e.preventDefault();
        createUserWithEmailAndPassword(auth,Email,Password,Name)
  .then((userCredential) => {
    // Signed up 
    nav("/")
    console.log(userCredential.user);
    // ...
  })
  .catch((error) => {
    console.log(error);
    // ..
  });
    }
  return (
    
<>
        <div className='container signup'>
          <div className='sign'>
            <form className="card" onSubmit={signUp}>
                <h2 className='title'>Sign up</h2>
                <div className='regged'>
                <h2>Already Registered?</h2> 
                <NavLink exact="true" activeclassname="active" className="logs" to="/" >
                    <span> Login </span>
                </NavLink>
                </div>
                <ul>  
                <li>
                <input type='text' name="Full name" placeholder='Full Name' value={Name} onChange={(e)=>setName(e.target.value)} required/>
                </li>
                <li>
                <input type='email' name="email" placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                </li>
                <li>
                <input type='password' name="Password" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)} required/>
                </li>
                <li>
                    <div className='buttons'>
                <input type='submit' className='submit' value="SIGN UP"/>
                </div>
                </li>

                </ul>

            </form>
          </div>
        </div>
        <Loader type="ball-clip-rotate-multiple"/>
</>
  )
}

export default Login
