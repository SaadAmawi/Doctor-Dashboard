import React, { useState } from 'react'
import './index.scss'
import{app,auth} from "../../firebase"
import{getAuth,signInWithEmailAndPassword  } from "firebase/auth"
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loader from 'react-loaders';


function SignIn() {

    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const nav = useNavigate('');

    const signIn = (e) =>{
        const auth = getAuth();
        e.preventDefault();
        signInWithEmailAndPassword (auth, Email, Password)
  .then((userCredential) => {
    // Signed up 
    nav('/dashboard')
    console.log(userCredential.user);
    // ...
  })
  .catch((error) => {
    alert('Incorrect login Credentials')
    console.log(error);
    // ..
  });
    }
  return (
    
<>
        <div className='container signup'>
          <div className='sign'>
            <form className="card" onSubmit={signIn}>
                <h2 className='title'>Sign In</h2>  
                <div className='regged'>
                <h2>Not Registered?</h2> 
                <NavLink exact="true" activeclassname="active" className="logs" to="/signup" >
                     Sign Up 
                </NavLink>
                </div>
                <ul>    
                {/* <li>
                <input type='text' name="Full name" placeholder='Full Name'  required/>
                </li> */}
                <li>
                <input type='email' name="email" placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                </li>
                <li>
                <input type='password' name="Password" placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)} required/>
                </li>
                <li>
                <input type='submit' className='submit' value="SIGN IN"/>
              
                </li>
                </ul>
            </form>
          </div>
         </div>
              <Loader type="ball-clip-rotate-multiple"/>
              </>

  )
}

export default SignIn
