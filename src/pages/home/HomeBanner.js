import React from 'react';
import Tool2 from '../../assite/banner/tool-3.jpg'
const HomeBanner = () => {
    return (
        <div className="hero min-h-screen px-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Tool2} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-primary">Car Parts & Supply</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, asperiores. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;