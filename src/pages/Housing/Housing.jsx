import React from 'react';
import './Housing.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchApi from '../../datas/FetchApi';
import Carousel from '../../components/Carousel/Carousel';
import Tags from '../../components/Tags/Tags';
import DropdownEquipments from '../../components/Dropdown/DropdownEquipments';
import DropdownDescription from '../../components/Dropdown/DropdownDescription';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';


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
            <Tags tags={housing.tags} />
            <Rating />
            <Host name={housing.host && housing.host.name} img={housing.host && housing.host.picture} />
            <div className="dropdown-container">
                <DropdownDescription description={housing.description} />
                <DropdownEquipments equipments={housing.equipments} />
            </div>
        </div>
    );
};

export default Housing;