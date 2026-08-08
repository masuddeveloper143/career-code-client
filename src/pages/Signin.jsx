import Lottie from 'lottie-react';
import SginInLottie from '../assets/lottes/SinIn.json'
import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../contexts/AuthContext';
import Register from './Register';

const Signin = () => {
    const { signInWithGoogle, signInUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';


    console.log('location in sign in  page', location);


    // Google Sign In Handle
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log("Google Sign In Success:", result.user);
                navigate(from, { replace: true }); // ✅ হোম বা আগের পেজে রিডাইরেক্ট হবে
            })
            .catch(error => {
                console.error("Google Sign In Error:", error.message);
            });
    };


    // console.log('location in signIn page', location)

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        // sign in user
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                // navigate(from, { replace: true }) || '/';
                navigate(from);
            })
            .catch(error => {
                console.error("Google Sign In Error", error.message);
            });
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl w-full">
                <div className="w-full max-w-sm">
                    <p className="text-center text-sm text-blue-600 mb-2">Sign In</p>
                    <h1 className="text-center text-2xl font-bold text-slate-900 mb-1">
                        Welcome Back
                    </h1>
                    <p className="text-center text-xs text-slate-400 mb-6">
                        Access to all features. No credit card required.
                    </p>



                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border border-slate-200 rounded-md py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors mb-4 cursor-pointer"
                    >
                        <FcGoogle size={18} />
                        Sign in with Google
                    </button>




                    <div className="flex items-center gap-3 mb-5">
                        <div className="flex-1 h-px bg-slate-200" />
                        <span className="text-xs text-slate-400 whitespace-nowrap">
                            Or continue with
                        </span>
                        <div className="flex-1 h-px bg-slate-200" />
                    </div>

                    <form onSubmit={handleSignIn} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-blue-600 mb-1">
                                Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="stevenjob@gmail.com"
                                required
                                className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-slate-700 mb-1">
                                Password<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="•••••••••••"
                                required
                                className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-slate-900 hover:bg-slate-800 transition-colors text-white text-sm font-medium rounded-md py-2.5 cursor-pointer"
                        >
                            Sign In
                        </button>

                        <p className="text-center text-xs text-slate-400">
                            Don't have an account?{' '}
                            <NavLink className="text-green-500 hover:underline" to="/register">
                                Register
                            </NavLink>
                        </p>
                    </form>

                </div>

                <div className="w-80 h-80 mx-auto">
                    <Lottie.default animationData={SginInLottie} />
                </div>
            </div>
        </div>
    );
};

export default Signin;