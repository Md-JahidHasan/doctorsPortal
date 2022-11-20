import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { json } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots, price } = treatment;
  const {user} = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const patientName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const appoinmentDetail = {
      selectedDate: format(selectedDate, "PP"),
      treatmentName: name,
      slot,
      patientName,
      phone,
      email,
      price
    };
    console.log(appoinmentDetail);

    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(appoinmentDetail)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.acknowledged){
        setTreatment(null);
        toast.success('Booking Confirmed !')
        refetch()
      } else {
        setTreatment(null)
        toast.error(data.message)
        
      }
    })

    
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={format(selectedDate, "PP")}
              disabled
              placeholder="Type here"
              className="input input-bordered input-primary w-full mt-2"
            />

            <select name="slot" className="select select-primary w-full mt-2">
              <option disabled >
                Select from available slot:
              </option>
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Full Name"
              className="input input-bordered input-primary w-full mt-2"
            />

            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full mt-2"
            />

            <input
              name="email"
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="Email"
              className="input input-bordered input-primary w-full mt-2"
            />
            <input
              type="submit"
              className="input btn-primary input-primary w-full mt-2"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;