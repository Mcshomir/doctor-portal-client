import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import dotenv from 'dotenv'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDcotor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const imgKey = import.meta.env.VITE_APP_API;
    const navigate = useNavigate()




    const { data: specialtes, isLoading } = useQuery({
        queryKey: ["speciality"],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-one-sigma.vercel.app/appoinmentspecialist')
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) {
        return <h2 className="text-3xl">loading</h2>
    }
    const handleAddDoctor = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data)

                if (imgData.success) {

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('https://doctors-portal-server-one-sigma.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate("/dashboard/managedoctors")

                        })


                }
            })


    }
    return (
        <div className='w-88 mx-auto m-8'>
            {/* <h2 className="text2xl">Add A Dcotor !</h2> */}
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <h2 className='text-3xl ml-12'>Add A Doctor !</h2>


                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span>  </label>
                    <input type="name" className="input input-bordered w-full max-w-xs"  {...register("name", { required: "  name is requerd !" })} />
                    {
                        errors.name && <p role='alert' className='text-sm text-red-600'>{errors.name?.message}</p>
                    }
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Email</span>  </label>
                    <input type="email" className="input input-bordered w-full max-w-xs"  {...register("email", { required: "email address is requerd !" })} />
                    {
                        errors.email && <p role='alert' className='text-sm text-red-600'>{errors.email?.message}</p>
                    }
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Speciality</span>  </label>
                    <select
                        {...register("specialty")}
                        className="select select-ghost w-full max-w-xs input-bordered">
                        <option disabled selected>Pick a Speciality  </option>
                        {
                            specialtes.map(specialty =>
                                <option
                                    key={specialty._id}
                                    specialty={specialty.name}

                                >{specialty.name}</option>
                            )
                        }
                        <option>Svelte</option>

                    </select>
                    {/* 
                    {
                        errors.password && <p role='alert' className='text-sm text-red-600'>{errors.password?.message}</p>
                    }
                    <label className="label"><span className="label-text">Forget password</span>  </label> */}
                </div>


                {/* <p><small className='text-red-400'>{errorMessage}</small></p> */}
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Image</span>  </label>
                    <input type="file" className="input input-bordered w-full max-w-xs"  {...register("image", { required: " Image is requered !" })} />
                    {
                        errors.img && <p role='alert' className='text-sm text-red-600'>{errors.image?.message}</p>
                    }
                </div>
                <br />

                <input className='btn btn-primary w-full' type="submit" value="Add A Doctor !" />

            </form>
        </div>
    );
};

export default AddDcotor;