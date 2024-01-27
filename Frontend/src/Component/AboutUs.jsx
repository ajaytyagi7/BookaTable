import React from 'react'

function AboutUs() {
  return (
    <div className='d-flex p-5 bg-dark-subtle container-fluid'>
        <div className=' card w-50 p-3 bg-dark'>
        <h1 className='text-center text-light'>About Us</h1>
        <br />
        <p className='text-light'>Welcome to Zencox At Zencox ,we believe that fashion is not just about clothing; it's a reflection of your unique style, personality,and the way you express yourself. Established with a passion for delivering exceptional quality and timeless designs, we curate a collection that transcends trends and celebrates individuality.Our journey began with a vision to redefine the way people experience fashion. We strive to blend comfort, style, and sustainability seamlessly into every thread, ensuring that when you wear Zencox , you not only look good but also feel good about your choices.What sets us apart is our commitment to craftsmanship and attention to detail. Each piece is a testament to our dedication to providing you with garments that stand the test of time. From casual essentials to statement pieces, our diverse range caters to every occasion and mood, allowing you to create a wardrobe that mirrors your lifestyle.As a brand, we embrace diversity and inclusivity, acknowledging that beauty comes in myriad forms. Our sizing options, thoughtful designs, and versatile styles are tailored to embrace every body type, making fashion accessible to all.</p>
        <h3 className='text-center text-light'>Thank You</h3>
        <button className='btn btn-light w-25 d-flex justify-content-center fw-bold'>Read More...</button>
        </div>
        <div className='mx-3 w-50 card'>
            <img className='about-img' src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?size=626&ext=jpg&ga=GA1.1.913293683.1703873181&semt=ais" alt="" />
        </div>
       
    </div>
  )
}

export default AboutUs