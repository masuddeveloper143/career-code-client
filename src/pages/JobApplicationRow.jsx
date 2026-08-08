import React from 'react';

const JobApplicationRow = ({ application, index }) => {
    const { company, company_logo, title } = application;
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                {
                                    index + 1
                                }
                            </label>

                        </th>

                        <td>
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={company_logo}
                                    alt="" />
                            </div>
                            <div className='font-bold'>{company}</div>
                            <div>{title}</div>
                        </td>


                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>



                    </tr>


                </thead>
                <tbody>


                </tbody>
            </table>
        </div>
    );
};

export default JobApplicationRow;