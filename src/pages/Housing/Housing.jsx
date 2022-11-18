import './Housing.scss';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Tags from '../../components/Tags/Tags';
import Dropdown from '../../components/Dropdown/Dropdown';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import logements from './../../datas/logements.json';


const Housing = () => {

    const { id } = useParams();

    const display = logements.find((house) => house.id === id)

    if(!display) {
        return <Navigate to="/404" />
    }

    return (
        <div className='housing-container'>
            <Carousel img={display.pictures} />

            <div className="housing-inner-container">
                <div className="housing-title-location">
                    <h2 className='housing-title'>{display.title}</h2>
                    <h3 className='housing-location'>{display.location}</h3>
                    <Tags tags={display.tags} />
                </div>

                <div className="rating-host-container">
                    <Rating rating={display.rating}/>
                    <Host name={display.host && display.host.name} img={display.host && display.host.picture} />
                </div>
            </div>
            
            <div className="dropdown-container">
                <Dropdown title="description">{display.description}</Dropdown>
                <Dropdown title="équipements">
                    {display.equipments.map((house) => (
                        <div key={house}>{house}</div>
                    ))}
                </Dropdown>
            </div>
        </div>
    );
};

export default Housing;