import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required ').min(4, 'Name is too short'),
  email: Yup.string().email('Invalid email').required(' Email is Required'),
  password: Yup.string().required('password id Required').min(8, 'Password is too short')
    .matches(/[a-z]/, 'Password must include Lowercase letter')
    .matches(/[A-Z]/, 'Password must include uppercase letter')
    .matches(/\W/, 'Password must include Number'),
  confirm: Yup.string().oneOf([Yup.ref('password')], null, 'Confirm Passwords must match ').required('Confirm Password is required')

});

const Signup = () => {

  const [passwordHidden, setpasswordHidden] = useState(true);

  const navigate = useNavigate();

  const signForm = useFormik({
    initialValues: {

      name: '',
      email: '',
      password: '',
      confirm: '',

    },

    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'content-Type': 'application/json'
        }
      });

      setSubmitting(false)
      console.log(res.status);

      if (res.status == 200) {
        enqueueSnackbar('Register primaryfully ', { variant: 'success' });
        navigate('/Login');
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });

      }



    },
    validationSchema: SignupSchema
  }
  );

  return (
    <div className='container-fluid d-flex justify-content-center bg-img-signup'>
      <div className='card p-4 w-25 signup-card bg-dark-subtle position-absolute mt-3 '>
        <h1 className='text-center '>Create Account</h1>
        <form onSubmit={signForm.handleSubmit} >
          <span className='ms-4 fs-6 text-danger'>{signForm.touched.name && signForm.errors.name}</span>
          <input type="Name" className='form-control ' id='name' placeholder='Enter Your Name' onChange={signForm.handleChange} value={signForm.values.name} />
          <br />
          <span className='ms-4 fs-6 text-danger'>{signForm.touched.email && signForm.errors.email}</span>
          <input type="text " className='form-control ' id='email' placeholder='Enter Your Email' onChange={signForm.handleChange} value={signForm.values.email} />
          <br />
          <span className='ms-4 fs-6 text-danger'>{signForm.touched.password && signForm.errors.password}</span>
          <input type={passwordHidden ? 'password' : 'text'} className='form-control ' id='password' placeholder='Enter Password' onChange={signForm.handleChange} value={signForm.values.password} />
          <br />
          <span className='ms-4 fs-6 text-danger'>{signForm.touched.confirm && signForm.errors.confirm}</span>
          <input type={passwordHidden ? 'password' : 'text'} className='form-control ' id='confirm' placeholder='Confirm Password' onChange={signForm.handleChange} value={signForm.values.confirm} />
          <button disabled={signForm.isSubmitting} type='submit' className='btn btn-dark text-center mt-5  '>Sign up</button>
        </form>

      </div>

    </div>
  )
}

export default Signup