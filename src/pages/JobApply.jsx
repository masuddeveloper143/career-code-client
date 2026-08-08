import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {

    const handleApply = e => {
        e.preventDefault()
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;



        console.log(linkedin, github, resume);

        const application = {
            jobId,
            applicant: user.email,
            linkedin,
            github,
            resume,
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data);

                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your application has been submited",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

            .catch(error => {
                console.log(error);
            })
    }




    const { id: jobId } = useParams();
    const { user } = useAuth();

    console.log(jobId, user);
    return (




        <div className=''>
            <h1 className='text-4xl font-bold mb-5 text-center'>Apply for this job: <Link to={`/jobs/${jobId}`}></Link></h1>
            <form className='flex justify-center' onSubmit={handleApply}>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">LinkedIn Link</label>
                    <input type="url" name='linkedin' className="input" placeholder="LinkedIn Link" />

                    <label className="label">Github Link</label>
                    <input name='github' type="url" className="input" placeholder="Github Link" />

                    <label className="label">Resume Link</label>
                    <input name='resume' type="text" className="input" placeholder="Resume Link" />
                    <button className='btn btn-primary'>submit</button>
                </fieldset>

            </form>
        </div>
    );
};

export default JobApply;