import React from 'react'
import * as Yup from 'yup';
import {  useFormik } from 'formik';
import {  enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';


const LoginSchema=Yup.object().shape({
  email:Yup.string().email('Invalid Email').required('Password Require'),
  password:Yup.string().required('Password is Require').min(8,'Password is too short'),
});

const Login =() => {  

  const navigate=useNavigate();

    const loginform=useFormik({
        initialValues:{
          password:"",
          email:"",
        },
        onSubmit:async(values)  =>{
          console.log(values);
          const res= await fetch('http://localhost:5000/user/authenticate',{
            method:'POST',
            body:JSON.stringify(values),
            headers:{
              'Content-Type' :'application/json'
            }

          });

          console.log(res.status);

          const data = await res.json();
          if(res.status==200){
            enqueueSnackbar('Logged in successfully' ,{variant:'success'});
            sessionStorage.setItem('user', JSON.stringify(data));
            navigate('/')

          }else if(res.status==401){
            enqueueSnackbar('Invalid Email',{variant:'error'});

          }else{
            enqueueSnackbar('Something went wrong',{variant:'error'});
          }

        },
      });
    
  return (
    <div className='container-fluid d-flex justify-content-center bg-img-login  '>
    <div className='card p-4 w-25  bg-warning position-absolute login-mycard '>
    <h1 className='text-center'>Login</h1>
    <form onSubmit={loginform.handleSubmit}>
     
      <span className='ms-4 fs-6 text-danger'>{  loginform.errors.email}</span>
      <input type="text" className='form-control bg-warning-subtle'  id="email" placeholder='Enter Your Email' onChange={loginform.handleChange} value={loginform.values.email} />
      <br />
      <span className='ms-4 fs-6 text-danger'>{  loginform.errors.email}</span>
      <input type="password"className='form-control bg-warning-subtle' id="password" placeholder='Enter Password' onChange={loginform.handleChange} value={loginform.values.password} />
      <br />
      <button className='btn btn-dark text-center'>Login</button>
      </form>
      <a className='text-decoration-none text-dark text-center' href="">Forget Password ?</a>
     

  </div>

</div>
  )
}

export default Login