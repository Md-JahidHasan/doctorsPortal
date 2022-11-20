import React from "react";

const AppoinmentOption = ({ appointmentOption, setTreatment }) => {
  const { _id, name, slots, price } = appointmentOption;
  
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className=" text-center font-bold text-2xl text-secondary">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
          <p><small>Pirce: ${price}</small></p>
        <div className="card-actions justify-center">
          
          <label htmlFor="booking-modal" onClick={()=>setTreatment(appointmentOption)} className="btn btn-primary text-white">
            Book Appoinmtent
          </label>
        </div>
      </div>
      
    </div>
  );
};

export default AppoinmentOption;
