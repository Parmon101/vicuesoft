import axios from 'axios';
import React from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header/Header';
import { Pagination } from '../../components/Pagination';
import styles from './home.module.css';

export const Home = () => {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(8);

    React.useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://api.punkapi.com/v2/beers');
            setData(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentItem = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Header />
            <h2 className={styles.content__title}>Все виды</h2>
            <div>
                <Card posts={currentItem} loading={loading} />
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
};
