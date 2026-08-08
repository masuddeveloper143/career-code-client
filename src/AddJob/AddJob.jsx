import React from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const AddJob = () => {
    const { user } = useAuth();

    const handleAddJob = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Salary Object
        const { min, max, currency, ...newJob } = data;

        newJob.salaryRange = {
            min: parseInt(min),
            max: parseInt(max),
            currency,
        };

        // String => Array
        newJob.requirements = data.requirements
            .split(",")
            .map((item) => item.trim());

        newJob.responsibilities = data.responsibilities
            .split(",")
            .map((item) => item.trim());

        newJob.status = "active";

        console.log(newJob);

        axios
            .post("http://localhost:3000/careerCood", newJob)
            .then((res) => {
                console.log(res.data);

                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Job Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="max-w-5xl mx-auto py-10 px-5">
            <h1 className="text-4xl font-bold text-center mb-10">
                Add A New Job
            </h1>

            <form onSubmit={handleAddJob}>

                <div className="grid md:grid-cols-2 gap-6">

                    {/* Job Title */}
                    <div>
                        <label className="label">Job Title</label>
                        <input
                            name="title"
                            type="text"
                            placeholder="Software Engineer"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label className="label">Company Name</label>
                        <input
                            name="company"
                            type="text"
                            placeholder="Google"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Company Logo */}
                    <div>
                        <label className="label">Company Logo URL</label>
                        <input
                            name="company_logo"
                            type="text"
                            placeholder="https://..."
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="label">Location</label>
                        <input
                            name="location"
                            type="text"
                            placeholder="Dhaka"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Job Type */}
                    <div>
                        <label className="label">Job Type</label>

                        <select
                            name="jobType"
                            className="select select-bordered w-full"
                        >
                            <option>Onsite</option>
                            <option>Remote</option>
                            <option>Hybrid</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="label">Category</label>

                        <select
                            name="category"
                            className="select select-bordered w-full"
                        >
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>Design</option>
                            <option>Finance</option>
                            <option>Sales</option>
                        </select>
                    </div>

                    {/* Deadline */}
                    <div>
                        <label className="label">
                            Application Deadline
                        </label>

                        <input
                            name="applicationDeadline"
                            type="date"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Currency */}
                    <div>
                        <label className="label">Currency</label>

                        <select
                            name="currency"
                            className="select select-bordered w-full"
                        >
                            <option>BDT</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                    </div>

                    {/* Min Salary */}
                    <div>
                        <label className="label">
                            Minimum Salary
                        </label>

                        <input
                            name="min"
                            type="number"
                            placeholder="30000"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Max Salary */}
                    <div>
                        <label className="label">
                            Maximum Salary
                        </label>

                        <input
                            name="max"
                            type="number"
                            placeholder="60000"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* HR Name */}
                    <div>
                        <label className="label">HR Name</label>

                        <input
                            name="hr_name"
                            type="text"
                            placeholder="Farhan Rahman"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* HR Email */}
                    <div>
                        <label className="label">HR Email</label>

                        <input
                            defaultValue={user?.email}
                            name="hr_email"
                            type="email"
                            className="input input-bordered w-full"
                            readOnly
                        />
                    </div>

                </div>

                {/* Description */}
                <div className="mt-6">
                    <label className="label">
                        Job Description
                    </label>

                    <textarea
                        name="description"
                        rows="5"
                        className="textarea textarea-bordered w-full"
                        placeholder="Write job description..."
                    ></textarea>
                </div>

                {/* Requirements */}
                <div className="mt-6">
                    <label className="label">
                        Requirements
                    </label>

                    <textarea
                        name="requirements"
                        rows="4"
                        className="textarea textarea-bordered w-full"
                        placeholder="JavaScript, React, Node.js, MongoDB"
                    ></textarea>
                </div>

                {/* Responsibilities */}
                <div className="mt-6">
                    <label className="label">
                        Responsibilities
                    </label>

                    <textarea
                        name="responsibilities"
                        rows="4"
                        className="textarea textarea-bordered w-full"
                        placeholder="Develop Software, Review Code, Fix Bugs"
                    ></textarea>
                </div>

                <div className="mt-8">
                    <button
                        className="btn btn-primary w-full"
                        type="submit"
                    >
                        Add Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;