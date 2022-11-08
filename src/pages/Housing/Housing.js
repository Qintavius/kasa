import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchApi from '../../datas/FetchApi'
import './Housing.scss';


const Housing = () => {

    const [housing, setHousing] = useState({});

    const { id } = useParams();

    useEffect(() => {

        (async function fetchData() {
            const data = await FetchApi.get('../logements.json')
            const display = data.filter((location) => location.id === id)[0]

            setHousing(display)
        })()

    }, [id])

    return (
        <div className='housing-container'>
            <img src={housing.pictures} alt={housing.title} />
            <h2 className='housing-title'>{housing.title}</h2>
            <h3 className='housing-location'>{housing.location}</h3>

        </div>
    );
};

export default Housing;