import React, { use } from 'react';
import JobCard from './JobCard';

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise)
    return (
        <div>
            <h1 className='text-6xl font-bold text-center  m-6'>hot jobs of the day</h1>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>

                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;