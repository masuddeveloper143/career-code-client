import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id, title, company } = useLoaderData();

    return (
        <div>
            <h1 className='text-6xl'> Job details of:{title}</h1>
            <p>company:{company}</p>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary'>apply now</button>
            </Link>
        </div>
    );
};

export default JobDetails;