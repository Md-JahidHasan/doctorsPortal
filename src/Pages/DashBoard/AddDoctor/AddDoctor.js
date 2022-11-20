import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate()
    const {data:specialties=[], isLoading} = useQuery({
        queryKey:['specialties'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imagebb_APi_Key;
    const handleAddDoctor = (data) =>{
        const photo= data.photo[0];
        const formData = new FormData();
        formData.append('image', photo);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(imageData=>{
            console.log('test',imageData);
            if(imageData.success){
                console.log(imageData.data.url);
                const doctor ={
                    name: data.name,
                    email:data.email,
                    specialty:data.specialty,
                    image: imageData.data.url
                };
                fetch('http://localhost:5000/addDoctors', {
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(result=>{
                    toast.success(`${data.name} is added successfully!`)
                    navigate('/dashboard/manageDoctors')
                })
                console.log(doctor);
            }
        })
        // console.log(photo);
    }
    return (
        <div>
            <h2 className='text-secondary text-2xl font-bold border-b border-b-2 border-b-green-600'>Add a doctor </h2>

            <form className='w-4/5' onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Doctors Name</span>
                    </label>
                    <input {...register("name",
                        { required: 'Name is required' }
                    )} type="text" className="input input-bordered input-primary " />
                    {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input {...register("email",
                        { required: 'Email is required!' }
                    )} type="email" className="input input-bordered input-primary w-full" />
                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register("specialty",
                        { required: 'Specialty is required!' }
                    )} className="select select-accent w-full ">
                        {
                            specialties.map(option => <option
                            key={option._id}
                            value={option.name}
                            >{option.name}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Upload Photo</span>
                    </label>
                    <input {...register("photo",
                        { required: 'Photo is required' }
                    )} type="file" className="input input-bordered input-primary " />
                </div>

                <input className='btn btn-secondary w-full mt-2 text-slate-50' type="submit" value='Sign Up' />
            </form>
        </div>
    );
};

export default AddDoctor;