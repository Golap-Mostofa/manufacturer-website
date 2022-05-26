import React from 'react';

const BlogsMQ = () => {
    return (
        <div>
            <div>
                <h2 className='text-xl'> how to parfomenc work react application</h2>
                <p>the component changes, React recreates the virtual DOM tree and compares the result with the previous render.

                    It then only updates the changed element in the actual DOM. This process is called diffing.

                    React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate.

                    This is great because it speeds up the UI render time. However, this concept can also slow down a complex app if its not managed very well.</p>
            </div>
        </div>
    );
};

export default BlogsMQ;