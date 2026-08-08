import React, { Suspense } from 'react';
import ApplicationsStart from '../shared/ApplicationsStart';
import ApplicationsList from './ApplicationsList';
import useAuth from '../hooks/useAuth';
import { data } from 'react-router-dom';
import { myApplicationsPromise } from '../api/applicationApi';





const MyApplications = () => {

    const { user } = useAuth();


    return (
        <div>
            <ApplicationsStart></ApplicationsStart>
            <Suspense fallback={'loading applications....'}>
                <ApplicationsList

                    myApplicationsPromise={myApplicationsPromise(user.email)}

                ></ApplicationsList>
            </Suspense>

        </div>
    );
};

export default MyApplications;