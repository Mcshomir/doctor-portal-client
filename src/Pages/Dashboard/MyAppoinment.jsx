import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const MyAppoinment = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings, isloading } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-one-sigma.vercel.app/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const data = await res.json();

            return data;
        }
    })

    if (isloading) {
        return <h2>loading...</h2>
    }
    return (
        <div>
            <h2 className='text-2xl mb-3 mx-auto'>My Appoinment </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr className="bg-base-200 ">
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings && bookings?.map((data, i) =>
                                <tr key={data._id}>
                                    <th>{i + 1}</th>
                                    <td>{data.patient}</td>
                                    <td>{data.tretment}</td>
                                    <td>{data.appoinmentDate}</td>

                                    <td>{data.slot}</td>
                                    <td>
                                        {
                                            data.price && !data.paid && <Link to={`/dashboard/payment/${data._id}`}>
                                                <button className='btn btn-sm btn-primary'>Pay</button>
                                            </Link>
                                        }
                                        {
                                            data.price && data.paid && <button className='btn btn-sm btn-success'>Paid</button>
                                        }

                                    </td>

                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>

        </div>

    );
};

export default MyAppoinment;