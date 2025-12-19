import React from 'react';

const AllBottle = ({ bottle, matchButton }) => {
    return (
        <>
            <div  >
                <div >
                    <img className='cart' src={bottle.image} alt="" />
                    <h3>{bottle.name}</h3>
                </div>
                <button onClick={() => matchButton(bottle.name)}>View Details</button>
            </div>
        </>
    );
};

export default AllBottle;
