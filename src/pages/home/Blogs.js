import React from 'react';
import Profile from '../../assite/banner/mo.png'
const Blogs = () => {
    return (

        <div class="hero min-h-screen bg-base-200 px-12">
            <div class="hero-content flex-col gap-40 lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Font-end web devloper</h1>
                    <p class="py-6">I am <span className='text-success'>Golap Mostofa </span>i am web devloper my sume expreance html css javascript bootstrap teilwiend react and back-end node mongo express i am creating a sum webpage</p>

                    <div>
                        <a className='ml-3 text-orange-500' href="https://spiffy-piroshki-17be28.netlify.app/">page link</a>
                        <a className='ml-3 text-orange-500' href="https://beautiful-rolypoly-f4cd9d.netlify.app/home">page link</a>
                        <a className='ml-3 text-orange-500' href="https://spiffy-piroshki-17be28.netlify.app/">page link</a>
                    </div>

                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <img src={Profile} alt="" />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Blogs;