import React from 'react';
import image from '../../../assite/banner/banner5.jpg'
const Contect = () => {
    return (
        <div className='px-16'>
            <div style={{ background: `url(${image})` }} className='bg-primary py-14  mt-12 mb-12'>
                <div className='text-center pb-14 text-white'>
                    <p className='text-xl font-bold text-green-500 '>
                        Contact Us
                    </p>
                    <h1 className='text-4xl text-success'>Stay connected with us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Email Address'
                        className='input bg-gray-700 w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Subject'
                        className='input w-full bg-gray-700 max-w-md'
                    />
                    <textarea
                        className='textarea w-full bg-gray-700 max-w-md'
                        placeholder='Your message'
                        rows={6}
                    ></textarea>

                </div>
            </div>
        </div>
    );
};

export default Contect;