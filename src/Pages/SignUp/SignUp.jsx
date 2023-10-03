import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../assets/images/register.svg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

import useToken from '../../Hooks/useToken';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, updateUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }

    const handleSignUp = data => {

        console.log(data);
        setErrorMessage('')

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                toast.success('Successfully SignUp!')
                console.log(user);
                const userInfo = { displayName: data.name }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err))


            })
            .catch(error => {
                setErrorMessage(error.message);
            });


    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch('https://doctors-portal-server-one-sigma.vercel.app/users', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email)
            })
    }


    return (
        <div className='grid grid-cols-2 p-10' >
            <div> <img className='' src={registerImg} alt="" /></div>
            <div>
                <div className='ml-[50px] h-[550px] flex justify-center items-center flex-col w-[300px] mx-auto  rounded-md border-gray-200 border-2 '>



                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <h2 className='text-3xl ml-12'>SignUp !</h2>


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
                            <label className="label"><span className="label-text">Password</span>  </label>
                            <input type="password" className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: "password is requerd !",
                                        minLength: { value: 6, message: "password must be 6 ceracter or longer !" },


                                    })} />
                            {
                                errors.password && <p role='alert' className='text-sm text-red-600'>{errors.password?.message}</p>
                            }
                            <label className="label"><span className="label-text">Forget password</span>  </label>
                        </div>
                        <br />

                        <input className='btn btn-primary w-full' type="submit" value="SignUp" />
                        <p><small className='text-red-400'>{errorMessage}</small></p>

                    </form>
                    <p><small>already have an account? <Link className='text-primary' to="/signin">Plz SignIn  </Link></small></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline '> CONTINUE WITH GOOGLE !</button>
                </div>
            </div>
        </div>

    );
};

export default SignUp;