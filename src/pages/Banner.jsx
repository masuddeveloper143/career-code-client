import React from 'react';
import { motion } from "motion/react"
import Team1 from '../assets/team/team1.jpg';
import Team2 from '../assets/team/team2.jpg';


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={Team1}
                        animate={{ y: [0, 50, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm rounded-lg shadow-2xl border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] "
                    />

                    <motion.img
                        src={Team1}
                        animate={{ x: [150, 200, 150] }}
                        transition={{ duration: 10, delay: 5, repeat: Infinity }}
                        className="max-w-sm rounded-lg shadow-2xl border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] "
                    />
                </div>

                <div className='flex-1'>
                    {/* <motion.h1
                        animate={{
                            rotate: 180,
                            x: 200,
                            y: 100,
                            transition: { duration: 5 }

                        }}
                        className="text-5xl font-bold text-green-600">Box Office News!</motion.h1> */}



                    <motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}
                        className="text-5xl font-bold">Remote <motion.span

                            animate={{
                                color: ['#97B0D1', '#7FB379', '#A1472A', '#2A3EA1'],

                                transition: { duration: 1, repeat: Infinity }

                            }}
                        >jobs</motion.span>


                    </motion.h1>


                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;