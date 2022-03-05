import React, { useState } from 'react';
import Validation from '../component/Validation'

 
 import {Link} from "react-router-dom";
 function LoginForm() {

  //setting errors to empty object
  const[errors,setErrors]=useState({});
  //setting defalut values
  const[values,setValues]=useState({
    username:"",
    password:""
  });
  // on typing values it will get stored here
  const handleChange=(event)=>{
               setValues({
                ...values,
                [event.target.name]:event.target.value,
               })
  };
  //to avoid refreshment of page after clicking login
  const handleLogin =(event)=>{
    event.preventDefault();
    //calling validation
     setErrors(Validation(values)); 
  };
  return (<div className='container' style={{marginTop:"-90px"}}>
      <div className='app-wrapper'>
          <div>
              <h2 className='title'> Log in</h2>

          </div>
          <form className='form-wrapper' >
                     <div className='email'>
                      <label className='label'> UserName/Email</label>
                        <input type="email" name="email" id="email" className='input' name='email' value={values.email} onChange={handleChange}/>
                        {errors.email && <p className='error'>{errors.email}</p>}
                      </div>
                      <div className='password'>
                      <label className='label'> Password</label>
                        <input type="password" name="password" id="password" className='input' name='password' value={values.password} onChange={handleChange}/>
                      {errors.password && <p className='error'>{errors.password}</p>}
                      </div>
                      <div>
                        <button type='submit' className='submit' onClick={(event) =>handleLogin(event)}>LOGIN</button>
                       <button type='button' className='cancel' onClick= {<link to="/"></link> }> Back </button>
                       
                       <Link to="/ForgetPass"><button className='newUser'>Forget Password/Username</button></Link>
                       
                        
                       
                       
                      </div>
                      
                      <from>
  
 </from>
          </form>

      </div>
     
  </div>);
 }

export default LoginForm;
