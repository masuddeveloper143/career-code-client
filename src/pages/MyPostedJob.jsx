import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import JobList from './MyPosted/JobList';
import { JobCreatedByPromise } from '../api/jobsApi';

const MyPostedJob = () => {

    const { user } = useAuth();

    return (
        <div>
            <h1>My Posted Job</h1>
            <Suspense>
                <JobList JobCreatedByPromise={JobCreatedByPromise(user.email)}></JobList>
            </Suspense>

        </div>
    );
};

export default MyPostedJob;