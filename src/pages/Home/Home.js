import React from 'react';
import { useEffect, useState } from 'react';
import FetchApi from '../../datas/FetchApi';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import './Home.scss';

const Home = () => {

    const [housing, setHousing] = useState([])

    useEffect(() => {

        (async function fetchData() {
            const data = await FetchApi.get('../logements.json')
            setHousing(data)
        })()

    }, [])

    return (
        <section className='home-container'>
            <Banner />

            <div className="cards">
                {
                    housing.map((house) =>
                        <Card key={house.id} house={house} />)
                }
            </div>
        </section>
    );
};

export default Home;