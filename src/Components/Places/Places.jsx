import React, { useEffect, useState } from 'react';
import Place from './Place';

const Places = () => {
    const [places, setPlaces] = useState([])
    useEffect( ()=>{
        fetch('place.json')
        .then(res=>res.json())
        .then(data=>setPlaces(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10'>
            {
                places.map(place=><Place key={place.id} place={place} ></Place>)
            }
        </div>
    );
};

export default Places;