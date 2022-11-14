import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './Home.scss';
import logements from './../../datas/logements.json';

const Home = () => {

    const [housing, setHousing] = useState(logements)

    useEffect(() => {
            setHousing(logements)
    }, [])

    return (
        <section className='home-container'>
            <Banner />

            <div className="gallery-layout">
                <div className="gallery">
                    {
                        housing.map((house) =>
                            <Card key={house.id} house={house} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;