import React from 'react';
import { Outlet } from 'react-router-dom'; // react-router-dom থেকে ইম্পোর্ট করুন
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;