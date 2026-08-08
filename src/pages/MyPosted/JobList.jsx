import { Link } from "react-router-dom";
import React, { use } from 'react';

const JobList = ({ JobCreatedByPromise }) => {

    const careerCood = use(JobCreatedByPromise);

    return (
        <div className="p-4">
            <h1 className='text-3xl font-bold mb-6'>Job created by you: {careerCood?.length || 0}</h1>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-200">
                            <th>#</th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Application Count</th>
                            <th>View Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            careerCood && careerCood.map((code, index) => (
                                <tr key={code._id}>
                                    <th>{index + 1}</th>
                                    <td className="font-semibold">{code.title}</td>
                                    
                                    {/* DB তে applicationDeadline থাকলে এটি দেখাবে, নতুবা code.deadline */}
                                    <td>{code.applicationDeadline || code.deadline || 'N/A'}</td>
                                    
                                    <td className="text-center font-bold">{code.application_count ?? 0}</td>
                                    
                                    <td>
                                        {/* Link কেই সরাসরি বাটন হিসেবে স্টাইল করা হয়েছে */}
                                        <Link 
                                            to={`/applications/${code._id}`} 
                                            className="btn btn-primary btn-sm"
                                        >
                                            View Applications
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;