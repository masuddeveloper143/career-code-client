import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { code_id } = useParams();
    const applications = useLoaderData();

    const handleStatusChange = (e, app_id) => {
        console.log(e.target.value, app_id)

        axios.patch(`http://localhost:3000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1 className='text-5xl'>{applications.length}Applications for: {code_id}</h1>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            applications.map(application => <tr key={application._id}>
                                <th></th>
                                <td>{application.applicant}</td>
                                <td>Job</td>
                                <td>

                                    <select onChange={e => handleStatusChange(e, application._id)} defaultValue="Pick a color" className="select">
                                        <option disabled={true}>Pick a color</option>
                                        <option>pending</option>
                                        <option>interview</option>
                                        <option>Velvet</option>
                                    </select>

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewApplications;