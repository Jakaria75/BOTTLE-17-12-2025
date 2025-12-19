import React, { useState } from 'react';
import AllBottle from './allbottle';

const Bottle = ({ user }) => {
    const [search, setSearch] = useState('');
    const [bottles, setBottles] = useState([]);

    const matchButton = (bottle2) => {
        const newBottles = [...bottles, bottle2];
        setBottles(newBottles);
    }
    const searchButton = (event) => {
        const searchTerm = event.target.value.toLowerCase();

        const apiSearch = user.filter(bottle => bottle.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearch(apiSearch);
    }
    const bottle = (user);
    const AddBottle = (tab) => {
        const newBottle = [...search, tab];
        setSearch(newBottle);
    }
    return (
        <>
            <input onInput={searchButton} type="search" name="search" id="" placeholder='Search...' />
            <button onClick={AddBottle}>Add Bottle</button>
            <div className='bottle'>
                {bottle.map(bottle => { return (<AllBottle key={bottle.id} bottle={bottle} matchButton={matchButton} />) })}
            </div>
            <div>
                {bottles.map(bottle => { return (<AllBottle key={bottle.id} bottle={bottle} />) })}
            </div>
        </>
    );
};

export default Bottle;
