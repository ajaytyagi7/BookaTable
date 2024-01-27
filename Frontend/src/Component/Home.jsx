import React, { useState } from 'react'
import restaurnatsData from './dummyData'
import { Link } from 'react-router-dom'
import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



import { Pagination, Autoplay } from 'swiper/modules';


const Home = () => {

useEffect(() =>{
  Aos.init({duration:"1000", delay:"250"})
},[]);

  const [productList, setproductList] = useState(restaurnatsData)

  const dispalayProduct=() =>{
    return productList.map((obj,index) => {
      return <div className='col-md-3 mt-3'>
              <div className='card shadow '>
                <img className='home-displayproduct ' data-Aos="zoom-in" src={obj.image} alt="loading" />

              </div>
              <div className='card-body shadow p-2 home-displayproduct-card'>
                <h4>{obj.name}</h4>
                <p>{obj.place}</p>
                <p>{obj.category}</p>
                <Link to={'/booking/'+index} className="btn btn-warning float-end home-btn ">Book Table</Link>
              </div>
             
      </div>
    })

  }



  return (
    <>
        <div className='container-fluid  '>
            <img className='img-fluid w-100 ' src="https://images.pexels.com/photos/5491011/pexels-photo-5491011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='home-food text-white p-4'>
            <h1 className='fw-bold'>Best Quality <br /> 
                Food</h1>
            <p className='fw-bold mx-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro,   <br />
                 soluta, quaerat illum obcaecati adipisci nesciunt. Consequatur mole</p>
                 <Link className='text-decoration-none text-light' to="/RestaurantsListing">  <button className="btn btn-warning mx-3 fw-bold">Book A Table</button> </Link>


        </div>

        

        <div className='container p-3'>
          <div className='row' >
            {dispalayProduct()}

          </div>

        </div>
        <h3 className='p-2 mx-4'>Hot Deal OF the Day</h3>
              <div className='container-fluid'>
                <div className='row g-4' data-Aos="zoom-in-up">
                    <div className='col-12 col-sm-6 col-md-3'>
                      <img className='home-deal-img ' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/350X300/home%2Fquick_bites%2Fsura-vie-500-400.png" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                      <img  className ='home-deal-img ' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/350X300/home%2Fquick_bites%2Fthe-gt-road-500-400.png" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                      <img className='home-deal-img ' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/350X300/home%2Fquick_bites%2Fpavillion-500-400.png" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                      <img className='home-deal-img ' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/350X300/home%2Fquick_bites%2Fbarbeque-nation-500-400.png" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                      <img className='home-deal-img ' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/250X200/deals%2Fweb_image%2Fweb1-1.png" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                      <img className='home-deal-img ' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/250X200/deals%2Fweb_image%2F25-percent-new.png" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                      <img className='home-deal-img ' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/250X200/deals%2Fweb_image%2F15-percent.png" alt="" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-3'>
                      <img className='home-deal-img ' src="https://d4t7t8y8xqo0t.cloudfront.net/resized/250X200/deals%2Fweb_image%2F20-percent.png" alt="" />
                    </div>
                </div>
              </div>

              <h3 className='p-4'>Our Partner</h3>
              
              <div className="container-fluid">
                <div className='d-flex'>


                <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
                  <div>
                    <img className='partner-img' src="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/partners%2FAxis-Bank-tile-23.png" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                   <div>
                    <img className='partner-img' src="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/partners%2FCiti-Bank-tile-23.png" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
                  <div>
                    <img className='partner-img' src="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/partners%2FIndusInd-Bank-tiles-23.png" alt="" />
                  </div>
           </SwiperSlide>
        <SwiperSlide>
                 <div>
                    <img className='partner-img' src="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/partners%2FAmazon-Pay-ICICI-Bank-CC-tiles.png" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
          
                 <div>
                    <img className='partner-img' src="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/partners%2FHSBC-Premier-Mastercard-tiles.png" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
             
                 <div>
                    <img className='partner-img' src="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/partners%2FDDBS-Vantage-Card-Bank-tiles.png" alt="" />
                  </div>
        </SwiperSlide>
        <SwiperSlide>
          
                 <div>
                    <img className='partner-img' src="https://d4t7t8y8xqo0t.cloudfront.net/eazymedia/partners%2FAmex-card-tiles.png" alt="" />
                  </div>
        </SwiperSlide>
      </Swiper>
        </div>
                </div>

              <div className='container-fluid' data-aos="zoom-in">
                <img className='home-down-img mt-3 img-fluid' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </div>

              <footer>
              <div className='contaniner'>
                <div className='row row-cols-2 row-cols-lg-4 mx-3 mt-4 bg-dark p-3  mb-3'>
                  
                  <div className='col'>
                    <h3 className='text-white'>BookaTable</h3>
                    <Link className='text-decoration-none text-light' to="/AboutUs">About US</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/">Partners Offers</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/Contact">Contact Us</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/">Food Trends</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/">Careers</Link>
                  </div>
                  <div className='col'>
                    <h3 className='text-white'>Discover</h3>
                    <Link className='text-decoration-none text-light' to="/RestaurantsListing">Table Booking</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/">Fast Food Near Me </Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/">Prepaid Deals Near me</Link>
                    <br />
                  </div>
                  <div className='col'>
                    <h3 className='text-white'>For You</h3>
                    <Link className='text-decoration-none text-light' to="/">Refer & earn</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/">Terms And Condition</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/">Privacy  Policy</Link>
                    </div>
                    <div className='col'>
                      <h3 className='text-white'>Connect With Us</h3>
                    <Link className='text-decoration-none text-light' to="/"><i class="fa-brands fa-facebook"></i> Facebook</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/"><i class="fa-brands fa-square-instagram"></i> Instagram</Link>
                    <br />
                    <Link className='text-decoration-none text-light' to="/"><i class="fa-sharp fa-solid fa-x"></i> Tweeter</Link>
                    </div>
                    </div>
              </div>
              </footer>
    </>  


                    
                  



               
  )
}

export default Home