import axios from 'axios';
import React from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header/Header';
import styles from './home.module.css';

export const Home = () => {
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const loadPost = async () => {
            setLoading(true);

            const response = await axios.get('https://api.punkapi.com/v2/beers/');

            setData(response.data);

            setLoading(false);
        };

        loadPost();
    }, []);
    console.log(data);
    return (
        <div>
            <Header />
            <h2 className={styles.content__title}>Все виды</h2>
            <div className={styles.container}>
                {data.map((el) => (
                    <Card key={el.id} {...el} />
                ))}
            </div>
        </div>
    );
};
