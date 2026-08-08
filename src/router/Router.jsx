import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Signin from "../pages/Signin";
import JobDetails from "../pages/JobDetails";
import JobApply from "../pages/JobApply";
import PrivateRout from "./PrivateRout";
import MyApplications from "../pages/MyApplications";
import AddJob from "../AddJob/AddJob";
import MyPostedJob from "../pages/MyPostedJob";
import ViewApplications from "../pages/ViewApplications";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/careerCood/${params.id}`)
            },
            {
                path: '/register',
                element: <Register />,
            },

            {
                path: "/jobApply/:id",
                element: <PrivateRout><JobApply></JobApply></PrivateRout>,

            },

            {
                path: 'myApplications',
                element: <PrivateRout><MyApplications></MyApplications></PrivateRout>
            },


            {
                path: "/AddJob",
                element: <PrivateRout><AddJob></AddJob></PrivateRout>,

            },

            {
                path: "/myPostedJob",
                element: <PrivateRout><MyPostedJob></MyPostedJob></PrivateRout>
            },



            {
                path: "/applications/:code_id",
                element: (
                    <PrivateRout>
                        <ViewApplications />
                    </PrivateRout>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:3000/applications/code/${params.code_id}`)
            },

            {
                path: "/signin",
                element: <Signin></Signin>,
            },

        ],
    },
]);

export default router;