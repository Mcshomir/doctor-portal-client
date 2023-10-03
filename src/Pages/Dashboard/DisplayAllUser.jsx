import React from 'react';

const DisplayAllUser = ({ user, i, handleUpdateClick }) => {
    const { name, email, _id } = user;
    return (
        <div>
            <tr className="hover w-full flex justify-around ">
                <th>{i + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{user?.role !== "admin" && <button onClick={() => handleUpdateClick(_id)} className='btn btn-xs btn-ghost'>Admin</button>}</td>
                <td><button className=' btn btn-xs btn-ghost'>Delete</button></td>
            </tr>
        </div>
    );
};

export default DisplayAllUser;