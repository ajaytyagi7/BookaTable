import React from 'react'
import * as Yup from 'yup';
import {  useFormik } from 'formik';
import {  enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const contactSchema=Yup.object().shape({
  name: Yup.string().required('Name is Required ').min(4, 'Name is too short'),
  email:Yup.string().email('Invalid Email').required('Password Require'),
  message:Yup.string().required('message  is Require')
});

const Contact=() => {

  const navigate=useNavigate();




  const contactForm=useFormik({
      initialValues:{
        name:'',
        email:'',
        message:'',
      },
      
      onSubmit:(value) =>{
        console.log(value)
  },
  validationSchema:contactSchema

  });
  

 




  return (
    <div>
         <div className='container-fluid  p-4 contact-bg-img'>
      <div className='card w-50 p-2  bg-warning-subtle contact-card'>
        <h1 className='text-center'>Contact Us</h1>
        <form onSubmit={contactForm.handleSubmit} >
         <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.name}</span>

          <input type="text" className='form-control bg-white-subtle' placeholder='Enter Your Name' onChange={contactForm.handleChange} value={contactForm.values.name} />
          <br />
          <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.email}</span>

          <input type="text" className='form-control  bg-white-subtle' placeholder='Enter your Email' onChange={contactForm.handleChange} value={contactForm.values.email} />
          <br />
          <span className='ms-4 fs-6 text-danger'>{  contactForm.errors.message}</span>

          <textarea id="message" className="form-control w-100  bg-white-subtle" placeholder="Write your message here..." onChange={contactForm.handleChange} value={contactForm.values.message}></textarea>
          <br />
          <br />
          </form>
          <button className='btn btn-dark text-center w-100 ' >Send Meaage</button>
          <p>Contact No- 📞 1800-654-123</p>

      </div>
      
    </div>
    </div>
  )
}

export default Contact