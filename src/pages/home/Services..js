import React from 'react';
import tool1 from '../../assite/banner/bike-01.jpg'
import tool2 from '../../assite/banner/banner4.webp'
import tool3 from '../../assite/banner/banner5.jpg'
const Services = () => {
    return (
        <div className='px-16'>
            <h2 className='text-3xl mb-4 text-green-500 text-center'>brick repeare Tool </h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24'>
                <div className="grid rounded-lg shadow-md grid-cols-2 lg:max-w-lg bg-slate-100 text-white-content">
                    <div className='flex justify-center items-center'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={tool1} />
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="text-xl font-semibold text-center text-success">brick repeare Tool</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>
                <div className="grid rounded-lg shadow-md grid-cols-2 lg:max-w-lg bg-slate-100 text-white-content">
                    <div className='flex justify-center items-center'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={tool2} />
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="text-xl font-semibold text-center text-success">brick repeare Tool</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="grid rounded-lg shadow-md grid-cols-2  lg:max-w-lg bg-slate-100 text-white-content">
                    <div className='flex justify-center items-center'>
                        <div class="avatar">
                            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={tool3} />
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="text-xl font-semibold text-center text-success">brick repeare Tool</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;