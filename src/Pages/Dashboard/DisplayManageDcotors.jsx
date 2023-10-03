import React from 'react';

const DisplayManageDcotors = ({ doctor, i }) => {
    let { name, email, specilty } = doctor;
    return (
        <div>


            <tr>
                <th>{i + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{specilty}</td>
                <td>active</td>
            </tr>


        </div>
    );
};

export default DisplayManageDcotors;