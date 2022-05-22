import React from 'react';
import Tool1 from '../../assite/tool1.jpg'
import Tool2 from '../../assite/tool2.jpg'
const Services = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8'>
            <div class="card lg:max-w-lg bg-slate-100 text-white-content">
                <div>
                    <img src={Tool2} alt="" />
                </div>
                <div class="card-body">
                    <h2 class="text-3xl text-center text-indigo-500">brick repeare Tool</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>

                </div>
            </div>
            <div class="card lg:max-w-lg bg-slate-100 text-white-content">
                <div>
                    <img className=' ' src={Tool1} alt="" />
                </div>
                <div class="card-body">
                <h2 class="text-3xl text-center text-indigo-500">brick repeare Tool</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-slate-100 text-white-content">
                <div>
                    <img src={Tool2} alt="" />
                </div>
                <div class="card-body">
                <h2 class="text-3xl text-center text-indigo-500">brick repeare Tool</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
        </div>
    );
};

export default Services;