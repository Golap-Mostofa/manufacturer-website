import React from 'react';

const Parchase = ({ parchase }) => {
    const { name, discription, price } = parchase
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-success">{parchase.name}</h3>
                    <form className='grid grid-cols-1 gap-4 justify-center mt-8'>
                        <input type="text" value={name} class="input input-bordered w-full max-w-xs" />
                        <input type="text" value={price} class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value={'submit'} class=" btn primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Parchase;