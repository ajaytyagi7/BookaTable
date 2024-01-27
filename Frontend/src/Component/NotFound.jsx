import React from 'react'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div className='col-md-6 mx-auto'>
            <img className='img-fluid w-100'src="https://img.freepik.com/premium-photo/flat-concept-404-error-page-file-found-web-page-banner-presentation-social-media-documents-website-maintenance-error-webpage-construction-vector-ultraviolet-illustration_317038-260.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
            <h1 className='display-1 fw-bold text-center' style={{color: '#f773f9'}}>Page not Found</h1>
            <Link to ="/" className='btn btn-danger float-end mt-4 mb-5 '>Go to Home page</Link>
    </div>
  )
}

export default Notfound