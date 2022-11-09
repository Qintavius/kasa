import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchApi from '../../datas/FetchApi';
import Carousel from '../../components/Carousel/Carousel';
import './Housing.scss';


const Housing = () => {

    const [housing, setHousing] = useState({});

    const { id } = useParams();

    useEffect(() => {

        (async function fetchData() {
            const data = await FetchApi.get('../logements.json')
            const display = data.filter((house) => house.id === id)[0]

            setHousing(display)
        })()

    }, [id])

    return (
        <div className='housing-container'>
            <Carousel img={housing.pictures} />
            <h2 className='housing-title'>{housing.title}</h2>
            <h3 className='housing-location'>{housing.location}</h3>

        </div>
    );
};

export default Housing;