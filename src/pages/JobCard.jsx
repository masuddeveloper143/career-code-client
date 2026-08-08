import React from 'react';
import { Link } from 'react-router-dom'; // ✅ সঠিক Import
import { LiaMapMarkerAltSolid } from "react-icons/lia";

const JobCard = ({ job }) => {
    const { title, location, jobType, category, description, _id, salaryRange, requirements, company, company_logo } = job;

    return (
        <div className="card bg-base-100 w-96 shadow-sm border border-gray-100">
            {/* Header Area */}
            <div className='flex items-center gap-3 p-4'>
                <figure className='w-14 h-14 shrink-0'>
                    <img
                        src={company_logo}
                        alt={company}
                        className='w-full h-full object-contain'
                    />
                </figure>
                <div>
                    <h1 className='text-2xl font-bold'>{company}</h1>
                    <p className='flex items-center gap-1.5 text-gray-500 text-sm'>
                        <LiaMapMarkerAltSolid />
                        <span>{location}</span>
                    </p>
                </div>
            </div>

            {/* Body Area */}
            <div className="card-body pt-0">
                <h2 className="card-title">{title}</h2>

                {/* Salary Range */}
                <p className='text-sm text-gray-600 font-medium'>
                    Salary: {salaryRange?.min} - {salaryRange?.max} {salaryRange?.currency?.toUpperCase()}
                </p>

                <p className='text-sm text-gray-500 my-2'>
                    {description || "A card component has a figure, a body part, and inside body there are title and actions parts"}
                </p>

                {/* Requirements Badges */}
                <div className="card-actions justify-start gap-2">
                    {
                        requirements?.map((skill, index) => (
                            <div key={index} className="badge badge-outline">{skill}</div>
                        ))
                    }
                </div>

                {/* Action Link Button */}
                <div className="card-actions justify-end mt-4">
                    <Link to={`/jobs/${_id}`} className="btn btn-primary">
                        show details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;