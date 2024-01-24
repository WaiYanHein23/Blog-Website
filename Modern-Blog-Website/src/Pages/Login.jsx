import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const navigator=useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({});
  const [valid, setValid] = useState(true)
  return (
      <form onSubmit={(e)=>{
      e.preventDefault();
      let isvalid=true;
      let ValidationErrors={}
      if(name==="" || name===null){
        isvalid=false;
        ValidationErrors.name="Name Required";
    }
    if(password==="" || password===null){
        isvalid=false;
        ValidationErrors.password="Password Required";
    }
    if(email==="" || email===null){
        isvalid=false;
        ValidationErrors.email="Email Required";
    }
    setError(ValidationErrors);
    setValid(isvalid);
    
      axios.get("http://localhost:3030/blogs/").then(res=>
      res.data.map(user=>{
        if(user.name===name){
          if(user.email===email){
            if(user.password===password){
              alert("Login Successfull");
              navigator('/');
            }else{
              isvalid=false;
              ValidationErrors.password="Wrong Password";
            }
          }else if(email !=""){
            isvalid=false;
            ValidationErrors.email="Wrong Email";
          }
        }else if(name !=""){
          isvalid=false;
          ValidationErrors.name= " Wrong Name";
          }
      })      
  )
      
      .catch(resp=>console.log(resp));
      
       }}>
      
    <div className='m-20 justify-center text-center items-center mx-96 p-6 rounded-xl border-2'>
    <div className='text-red-600'>
   {
      valid ? <></>:<span>{error.name}/{error.email}/{error.password}</span>
    }
   </div>
  <div className='flex justify-items-center'>
   <div className='text-white bg-gray-600 mx-64  p-1 px-2 font-semibold'>Login Form</div></div>
    <label>User Name</label>
    <input type='text' className='bg-gray-200 m-2 rounded-xl' id='name' value={name} placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}}></input><br></br>
    <label>User Email</label>
    <input type='email' className='bg-gray-200 m-2 rounded-xl' id='email' value={email} placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
    <label>User Password</label>
    <input type='password' className='bg-gray-200 m-2 rounded-xl' name='password' id='password' value={password} placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} ></input><br/><br/>
    <button onClick={()=>setUser("Wai Yan Hein")} className='bg-blue-600 p-2 m-3 hover:bg-red-500' type='submit'>Login</button>
    <Link className='bg-green-600 p-2 hover:bg-red-500' to={('/register')}>Register</Link>
    </div>
    </form>
    


)
}

export default Login