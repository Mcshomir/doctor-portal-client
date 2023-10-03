import { useQuery } from '@tanstack/react-query';
import React from 'react';
import DisplayAllUser from './DisplayAllUser';
import toast from 'react-hot-toast';

const AllUser = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-one-sigma.vercel.app/users');
            const data = await res.json();
            return data
        }
    })
    const handleUpdateClick = id => {
        fetch(`https://doctors-portal-server-one-sigma.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")} `

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(" Make adimn successfull !")
                    refetch();
                }
            })
    }
    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl'>All User</h2>
            <table className="table  w-full">
                <thead>
                    <tr className='flex justify-around'>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th><button className='btn btn-xs btn-ghost'>Admin</button></th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => <DisplayAllUser
                        key={user._id}
                        i={i}
                        user={user}
                        handleUpdateClick={handleUpdateClick}
                    ></DisplayAllUser>
                    )}


                </tbody>
            </table>
        </div>
    );
};

export default AllUser;