import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignIn = () => {
    const [data, setData] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail)
    const { loginUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true })
    }
    const handleLogin = data => {
        console.log(data)
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email)

            })
            .catch(error => { console.error("error", error) });
    }

    return (
        <div className='h-[500px] flex justify-center items-center flex-col w-[300px] mx-auto  rounded-md border-gray-200 border-2 '>



            <form onSubmit={handleSubmit(handleLogin)}>
                <h2 className='text-3xl ml-12'>Login !</h2>


                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Name</span>  </label>
                    <input type="email" className="input input-bordered w-full max-w-xs"  {...register("email", { required: "email address is requerd !" })} />
                    {
                        errors.email && <p role='alert' className='text-sm text-red-600'>{errors.email?.message}</p>
                    }
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Password</span>  </label>
                    <input type="password" className="input input-bordered w-full max-w-xs"  {...register("password", { required: "password is requerd !", minLength: { value: 6, message: "password must be 6 ceracter or longer !" } })} />
                    {
                        errors.password && <p role='alert' className='text-sm text-red-600'>{errors.password?.message}</p>
                    }
                    <label className="label"><span className="label-text">Forget password</span>  </label>
                </div>
                <br />

                <input className='btn btn-primary w-full' type="submit" value="SignIn" />

            </form>
            <p><small>New to Doctors Portal <Link className='text-primary' to="/signup">Create new Account  </Link></small></p>
            <div className="divider">OR</div>
            <button className='btn btn-outline '> CONTINUE WITH GOOGLE !</button>
        </div>
    );
};

export default SignIn;