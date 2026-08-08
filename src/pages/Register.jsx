import React, { use, useContext } from 'react';
import Lottie from 'lottie-react';
import { FcGoogle } from 'react-icons/fc';
import registerLottie from '../assets/lottes/Register.json';
import { AuthContext } from '../contexts/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';

const Register = ({ from }) => {

    const { signInWithGoogle } = use(AuthContext);

    const navigate = useNavigate();

    const handleWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const username = form.username.value;
        const password = form.password.value;
        const restpassword = form.restpassword.value;

        if (password !== restpassword) {
            alert("Password mismatch!");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log("Google Sign-In Success:", result.user);
                navigate(from || '/', { replace: true }); // ✅ রিডাইরেক্ট যুক্ত করা হলো
            })
            .catch(error => {
                console.error("Google Sign-In Error:", error.message);
            });
};

return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl w-full">
            <div className="w-full max-w-sm">
                <p className="text-center text-sm text-blue-600 mb-2">Register</p>
                <h1 className="text-center text-2xl font-bold text-slate-900 mb-1">
                    Start for free Today
                </h1>
                <p className="text-center text-xs text-slate-400 mb-6">
                    Access to all features. No credit card required.
                </p>

                <button
                    onClick={handleWithGoogle}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border border-slate-200 rounded-md py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors mb-4"
                >
                    <FcGoogle size={18} />
                    Sign up with Google
                </button>

                <div className="flex items-center gap-3 mb-5">
                    <div className="flex-1 h-px bg-slate-200" />
                    <span className="text-xs text-slate-400 whitespace-nowrap">
                        Or continue with
                    </span>
                    <div className="flex-1 h-px bg-slate-200" />
                </div>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name='fullname'
                            placeholder="Steven Job"
                            required
                            className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-blue-600 mb-1">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="stevenjob@gmail.com"
                            required
                            className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                            Username<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name='username'
                            placeholder="stevenjob"
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
                            name='password'
                            placeholder="•••••••••••"
                            required
                            className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                            Re-Password<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name='restpassword'
                            placeholder="•••••••••••"
                            required
                            className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-xs text-slate-600">
                            <input
                                type="checkbox"
                                required
                                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-400"
                            />
                            Agree our terms and policy
                        </label>
                        <a href="#" className="text-xs text-blue-600 hover:underline">
                            Learn more
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-900 hover:bg-slate-800 transition-colors text-white text-sm font-medium rounded-md py-2.5 cursor-pointer"
                    >
                        Submit &amp; Register
                    </button>

                    <p className="text-center text-xs text-slate-400">
                        Already have an account?<NavLink className={'text-green-500'} to="/SignIn">SignIn</NavLink>


                    </p>
                </form>
            </div>

            <div className="w-64 h-64 mx-auto">
                <Lottie.default animationData={registerLottie} />
            </div>
        </div>
    </div>
);
};

export default Register;