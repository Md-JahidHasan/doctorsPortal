import {useQuery} from '@tanstack/react-query'
import { format } from "date-fns/esm";
import React, { useEffect, useState } from "react";
import Loading from '../../Shared/Loading/Loading';
import BookingModal from "../BookingModal/BookingModal";
import AppoinmentOption from "./AppoinmentOption";


const AvailableAppoinment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP')
  console.log(date);

  const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    queryKey: ['appointmentOptions', date],
    queryFn: async()=>{
      const res = await fetch(`http://localhost:5000/appointmentoptions?date=${date}`,)
      const data = await res.json();
      return data;
    }
  })

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentoptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);

  if(isLoading){
    return <Loading></Loading>
  }



  return (
    <div className="mt-16">
      <p className="text-secondary text-center font-bold">
        You have selected Date: {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 mx-10 md:mx-28">
        {
        appointmentOptions.map(option =><AppoinmentOption
            key={option._id}
            appointmentOption={option}
            setTreatment={setTreatment}
          ></AppoinmentOption>
        )
        }
        </div>
        {
            treatment && <BookingModal 
            selectedDate={selectedDate}
            treatment={treatment}
            setTreatment={setTreatment}
          refetch={refetch}
            ></BookingModal>
        }
    </div>
  );
};

export default AvailableAppoinment;
