import React from 'react';
import Tool2 from '../../assite/tool2.jpg'
const HomeBanner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={Tool2} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-primary">Car Parts & Supply</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, asperiores. </p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;