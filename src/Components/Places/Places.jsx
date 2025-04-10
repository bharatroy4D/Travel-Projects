import React, { useEffect, useState } from 'react';
import Place from './Place';


const Places = ({data}) => {      
    const [places, setPlaces] = useState([])
    useEffect( ()=>{
        fetch('place.json')
        .then(res=>res.json())
        .then(data=>setPlaces(data))
    },[])
    const filterData = data.name ? places.filter(place=>place.category === data.name):places;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-15 gap-8 px-16'>
            {
                filterData.map(place=><Place key={place.id} place={place} ></Place>)
            }
        </div>
    );
};

export default Places;