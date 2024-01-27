import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import restaurantsData from './dummyData'

const Navbar = () => {

  const [productList, setproductList] = useState(restaurantsData)
  const searchRef = useRef(null);

  const searchProduct = () => {
    const filterData = restaurantsData.filter((restaurants) => {
      return restaurants.name.toLowerCase().includes(searchRef.current.value.toLowerCase());
    });
    console.log(searchProduct)
    setproductList(filterData);
  }


  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className='navbar-img' src="https://www.logomaker.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kh...CHqB9KmB7OwXs1M3EMoAJtlyAojvds8f44PExevg9C3ktKMcs8" alt="" />
            </a>
            <button
              className="navbar-toggler" type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <NavLink className="nav-link " to='/Home'>
                    <p className='nav-home  text-dark fw-bold'>Home</p>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to='/Contact'>
                    <p className='nav-contact text-dark fw-bold'>Contact</p>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to='/AboutUs'>
                    <p className='nav-aboutus text-dark fw-bold'>About </p>
                  </NavLink>
                </li>

                <input type="text" className='nav-input form-control' ref={searchRef} placeholder='Search Restaurants.....' />
                <div>
                  <button className='btn btn-warning' onClick={searchProduct}>Search</button>

                </div>

                <li className="nav-item">
                  <NavLink className="nav-link " to='/Signup'>
                    <p className='nav-signup text-dark fw-bold'>Signup</p>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link" to='/Login'>
                    <p className='nav-login text-dark fw-bold'>Login</p>
                  </NavLink>
                </li>


              </ul>

            </div>
          </div>
        </nav>
      </div>
    </div>

  )
}

export default Navbar