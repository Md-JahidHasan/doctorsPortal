import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {
    const {user} = useContext(AuthContext);

    const {data : bookings = []} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='text-3xl text-secondary mb-4'>My Appointments</h2>
            <div className="overflow-x-auto mr-4">
                <table className="table w-full ">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            bookings?.map((booking, index) => <tr key={booking._id}>
                                <th>{index+1}</th>
                                <td>{booking?.patientName }</td>
                                <td>{booking?.treatmentName }</td>
                                <td>{booking?.selectedDate}</td>
                                <td>{booking?.slot}</td>
                                <td>
                                {
                                    booking?.price && !booking.paid && <Link
                                    className='btn btn-sm ' 
                                    to={`/dashboard/payment/${booking._id}`}
                                    >Pay</Link>
                                }
                                {
                                    booking?.price && booking.paid && <Link
                                    className='text-success'
                                    to={`/dashboard/payment/${booking._id}`}
                                    >Paid</Link>
                                }
                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;