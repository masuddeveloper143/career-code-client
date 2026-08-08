import { User } from 'lucide-react';
import React, { use } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('signed out user')
            })
            .catch(error => {
                console.log(error)
            })
    }







    return (
        <div className="navbar bg-base-100 shadow-sm">

            <div className="navbar-start">

                <div className="dropdown">

                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>

                </div>

                <a className="btn btn-ghost text-4xl font-bold text-green-500">JOB Portal</a>
            </div>


            {/* Home start */}


            <ul className='flex gap-6'>
                <li><NavLink to="/">Home</NavLink></li>

                {
                    user && <>

                        <li><NavLink to="/myApplications">MyApplications</NavLink></li>
                    </>
                }


                {
                    user && <>

                        <li><NavLink to="/addJob">AddJob</NavLink></li>
                    </>
                }
                {
                    user && <>

                        <li><NavLink to="/myPostedJob">MyPostedJob</NavLink></li>
                    </>
                }




            </ul>



            <div className="navbar-center hidden lg:flex">

            </div>

            <div className="navbar-end">
                {

                    user ? <button onClick={handleSignOut} className='btn'>Sign Out</button> :
                        <>

                            <NavLink className=" btn " to="/register">Register</NavLink>
                            <NavLink className=" btn " to="/signIn">SignIn</NavLink>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;