import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const Manageorder = () => {
    const [orderList, setOrderList] = useState([])

    const fetchOrderData = async () => {
        const res = await fetch('http://localhost:5000/order/getall');
        console.log(res.status);

        const data = await res.json();
        console.table(data);

        setOrderList(data);

    }

    useEffect(() => {
        fetchOrderData();
    }, [])


    const deleteOrder = async (id) => {
        console.log(id);

        const res = await fetch("http://localhost:5000/order/delete/" + id, { method: 'DELETE' });
        console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar("Order Deleted Successfully", { variant: 'success' });
        }
    }

    const displayItems = (dishes) => {
        return dishes.map ((dish) =>{
            return <div>
                <p>{dish.name}</p>
                <p></p>

                
            </div>

            
        })
    }

    const displayOrderData = () => {
        return <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Restaurant Name</th>
                    <th>Address</th>
                    <th>Dishes</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    orderList.map((order) => {
                        return <tr>
                            <td>{order.restaurant.name}</td>
                            <td>{order.restaurant.address}</td>
                            <td>{displayItems(order.dishes)}</td>
                            <button className='btn btn-danger'>Delete </button>

                        </tr>
                    })
                }
            </tbody>

        </table>
    }



    return (
        <div>
            {displayOrderData()}
        </div>

    )
}

export default Manageorder