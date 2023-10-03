import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import DisplayManageDcotors from './DisplayManageDcotors';
import ConfirmationModal from '../Shared/ConfermationModal/ConfirmationModal';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDcotor, setDeletingDoctor] = useState(null);
    const closeDoctor = () => {
        setDeletingDoctor(null);
    }

    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-one-sigma.vercel.app/doctors')
            const manageData = await res.json()
            return manageData

        }
    })
    const handleDelete = doctor => {
        fetch(`https://doctors-portal-server-one-sigma.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `berar ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                if (data.deletedCount > 0) {
                    toast.success(`Doctors ${doctor.name} have deleted successfully !`)
                }

            })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Eamil</th>
                            <th>Specialty </th>
                            <th>active</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) =>

                                <tr key={doctor._id} >
                                    <th>{i + 1}</th>

                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={doctor?.image} alt='' />
                                            </div>
                                        </div>

                                    </td>
                                    <td>{doctor?.name}</td>
                                    <td>{doctor?.email}</td>
                                    <td>{doctor?.specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="my_modal_6" className="btn btn-sm  btn-error ">Delete</label>


                                    </td>
                                </tr>

                            )
                        }



                    </tbody>
                </table>
                {
                    deletingDcotor && <ConfirmationModal
                        title={`Are you sure you want to delete ?`}
                        message={`if you delete ${deletingDcotor?.name}. it can be undone !`}
                        successAction={handleDelete}
                        modalData={deletingDcotor}
                        closeDoctor={closeDoctor}
                    ></ConfirmationModal>
                }


            </div>

        </div >
    );
};

export default ManageDoctors;