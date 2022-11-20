import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal =()=>{
        setDeletingDoctor(null)
    }
    
    const {data: doctors=[], refetch} =useQuery({
        queryKey:['doctors'],
        queryFn: async()=>{
            try{
                const res = await fetch('http://localhost:5000/doctors');
                const data = await res.json();
                return data;
            }
            catch{

            }
            
        }
    })
    const successAction = (doctors) => {
        console.log(doctors);
        fetch(`http://localhost:5000/doctors/${doctors._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount>0){
                    refetch()
                    toast.success(`Successfully removed Dr. ${doctors.name}`)
                }
                
            })
    }
    return (
        <div className=''>
            <h2 className='text-2xl font-bold text-primary border-b border-b-primary border-b-2'>Manage Doctors</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            doctors.map((doctor, index) => <tr
                            key={doctor._id}
                            >
                                <th>{index+1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-20 mask mask-squircle">
                                            <img src={doctor.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-xs bg-red-600 text-white">Delete</label>
                                </td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
                {
                    deletingDoctor && <ConfirmationModal
                    title={`Are you sure your want to delete?`}
                    message={`If you remove ${deletingDoctor.name}, you can't undo it again`}
                    successAction = {successAction}
                    modalData={deletingDoctor}
                    closeModal={closeModal}
                    ></ConfirmationModal>
                }
            </div>
            
        </div>
    );
};

export default ManageDoctors;