import React from 'react';
import './Housing.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import FetchApi from '../../datas/FetchApi';
import Carousel from '../../components/Carousel/Carousel';
import Tags from '../../components/Tags/Tags';
import DropdownEquipments from '../../components/Dropdown/DropdownEquipments';
import DropdownDescription from '../../components/Dropdown/DropdownDescription';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import logements from './../../datas/logements.json';


const Housing = () => {

    const [housing, setHousing] = useState(logements);

    const { id } = useParams();

    useEffect(() => {
            const display = logements.filter((house) => house.id === id)[0]
            setHousing(display)
    }, [id])

    return (
        <div className='housing-container'>
            <Carousel img={housing.pictures} />

            <div className="housing-inner-container">
                <div className="housing-title-location">
                    <h2 className='housing-title'>{housing.title}</h2>
                    <h3 className='housing-location'>{housing.location}</h3>
                    <Tags tags={housing.tags} />
                </div>

                <div className="rating-host-container">
                    <Rating rating={housing.rating}/>
                    <Host name={housing.host && housing.host.name} img={housing.host && housing.host.picture} />
                </div>
            </div>
            
            <div className="dropdown-container">
                <DropdownDescription title="description" description={housing.description} />
                <DropdownEquipments title="équipements" equipments={housing.equipments} />
            </div>
        </div>
    );
};

export default Housing;