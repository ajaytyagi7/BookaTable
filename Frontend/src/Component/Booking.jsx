import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import restaurantsData from './dummyData';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';

const Booking = () => {

    const { index } = useParams();

    const [restroData, setRestroData] = useState(restaurantsData[index]);

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );
    // console.log(currentUser);

    const [selDishes, setSelDishes] = useState([]);

    const selectDish = (dish) => {
        console.log(dish);
        const existing = selDishes.find( item => item.name === dish.name );
        console.log(existing);
        if(!existing){
            setSelDishes([ ...selDishes, dish ])
        }else{
            setSelDishes([... selDishes.filter( item => item.name !== dish.name )]);
        }

        console.log(selDishes);
    }

    const displaySelDishes = () => {
        return selDishes.map(dish => (
            <div className='d-flex justify-content-between'>
                <p>{dish.name}</p>
                <h6>{dish.price}</h6>
            </div>
        ))
    }

    const BookingForm = useFormik({
        initialValues: {
            username: currentUser.name,
            dishes: [],
            duration: "",
            date: new Date(),
            additional: "",
            restaurant: {
                name : restroData.name,
                address : restroData.place,
                image : restroData.image
            }

        },

        onSubmit: async (values) => {
            values.dishes = selDishes;
            console.log(values);
            const res = await fetch('http://localhost:5000/order/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status)

            if (res.status === 200) {
                enqueueSnackbar('Table Booked Successfully', { variant: 'success' });
            } else {
                enqueueSnackbar('Somethings went wrong', { variant: 'error' });
            }
        }
    });





    const displayDishes = () => {
        return restroData.dishes.map((dish) => {
            return <div className='col-md-2  p-2'>
                <div className="card " >
                    <img src={dish.image} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h6>{dish.name}</h6>
                        <h6>₹{dish.price} {dish.qty}</h6>
                        <button className='btn btn-warning' onClick={e => selectDish(dish)}>Add Dish</button>

                    </div>
                </div>
            </div>
        })
    }

    return (
        <div>
            <div className='container'>
                <div className='row row-cols-4 '>
                    <div className="col-md-6 ">
                        <img src={restroData.image} className='img-fluid ' alt="" />
                    </div>
                    <div className="col-md-3">
                        <h2>{restroData.name}</h2>
                        <h4>{restroData.place}</h4>
                        <p>{restroData.price}</p>
                        <p>{restroData.open}</p>
                    </div>
                    <div>
                        <div className='card col p-2 bg-warning' >
                            <form onSubmit={BookingForm.handleSubmit} >
                                
                                <input type="number" className='form-control bg-warning-subtle' id="duration" placeholder='Enter Duration in hour' onChange={BookingForm.handleChange} value={BookingForm.values.duration} />
                                <br />
                                <input type="date" className='form-control bg-warning-subtle' id="date" placeholder='Enter Booking Date'  onChange={BookingForm.handleChange} value={BookingForm.values.date} />
                                <br />
                                <input type="text" className='form-control bg-warning-subtle' id="additional" placeholder='Text Area...'  onChange={BookingForm.handleChange} value={BookingForm.values.additional} />
                                <br />
                                <button className='btn btn-dark mx-2'>Book Table Now</button>
                            </form>

                            <div className='mt-4' style={{height: 100, overflow: 'auto'}}>
                                {displaySelDishes()}
                            </div>

                        </div>
                    </div>
                </div>
                <div className='mt-5 row'>
                    {displayDishes()}
                </div>
            </div>
        </div>
    )
}

export default Booking