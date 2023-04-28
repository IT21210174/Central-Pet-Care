import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../Layouts/AdminLayout';
import { userRequest } from '../../requestMethods'
import { toast } from 'react-hot-toast';

// import './viewOrder.scss'

function ViewOrder() {

    const { id } = useParams()

    const [orderId, setOrderId] = useState('')
    const [total, setTotal] = useState('')
    const [date, setDate] = useState('')
    const [paymentStatus, setPaymentStatus] = useState('')
    const [deliveryStatus, setDeliveryStatus] = useState('')

    useEffect(() => {
        userRequest.get('/orders/' + id)
        .then(res => {
            console.log(res)
            setOrderId(res.data.orderId)
            setTotal(res.data.total)
            setDate(res.data.createdAt)
            setPaymentStatus(res.data.paymentStatus)
            setDeliveryStatus(res.data.deliveryStatus)
        }).catch(err =>{
            toast.error(err.message)
        })
      }, [id])

    return (
        <AdminLayout>
            <div className='product'>
            <table>
                <tr>
                    <td>Order ID</td>
                    <td>{orderId}</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>Rs. {total}</td>
                </tr>
                <tr>
                    <td>Date</td>
                    <td>{date.split()}</td>
                </tr>
                <tr>
                    <td>Payment Status</td>
                    <td>{paymentStatus === 'succeeded' ? 'Successful' : 'Unsuccessful'}</td>
                </tr>
                <tr>
                    <td>Delivery Status</td>
                    <td>{deliveryStatus}</td>
                </tr>
            </table>
            </div>
        </AdminLayout>
    )
}

export default ViewOrder