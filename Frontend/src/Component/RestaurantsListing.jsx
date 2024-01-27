import React, { useState } from 'react'
import restaurantsData from './dummyData'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const RestaurantsListing = () => {

    useEffect(() =>{
        Aos.init({duration:"1000", delay:"250"})
      },[]);

    const [productList, setProductList] = useState(restaurantsData)

    const displayProduct=() =>{
        return productList.map((obj, index)=>{
            return <div className='col-md-4 mt-5 '>
                <div className="card shadow ">
                    <img className='my-img' data-Aos='zoom-in'   src={obj.image} alt="loading" />
                </div>
                <div className="card-body shadow p-1" >
                    <h4 className="mx-2 ">{obj.name}</h4>
                    <p className="mx-2">{obj.place}</p>
                    <p className='mx-2'>{obj.category}</p>
                    <Link to={'/booking/'+index} className="btn btn-warning mx-2 mb-4">Book Table</Link>

                </div>

            </div>
        })
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                {displayProduct()}
            </div>
        </div>
    </div>
  )
}

export default RestaurantsListing