import axios from 'axios';
import React from 'react';
import styles from './cardDetail.module.css';
import { useNavigate, useParams } from 'react-router-dom';

export const CardDetail = () => {
    const [data, setData] = React.useState('');
    const navigate = useNavigate();

    const { id } = useParams();

    React.useEffect(() => {
        async function fetchProduct() {
            try {
                const { data } = await axios.get(`https://api.punkapi.com/v2/beers/` + id);
                setData(data);
            } catch (error) {
                navigate('/');
                alert('Ошибка загрузке. Возврат на главную страницу');
            }
        }
        fetchProduct();
    }, []);

    if (!data) {
        return <div>загрузка...</div>;
    }
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2>{data[0].name}</h2>
                <img className={styles.itemImg} src={data[0].image_url} width="200" alt="beer" />
                <div className={styles.text}>
                    Описание: <span>{data[0].description}</span>
                </div>
                <div className={styles.text}>
                    Девиз : <span>{data[0].tagline}</span>
                </div>
                <div className={styles.text}>
                    Крепость : <span>{data[0].abv}</span>
                </div>
                <div className={styles.text}>
                    Отлично сочетается с : <span>{data[0].food_pairing}</span>
                </div>
            </div>
        </div>
    );
};
