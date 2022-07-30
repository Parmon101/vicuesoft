import axios from 'axios';
import React from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header/Header';
import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search/Search';
import styles from './home.module.css';

export const Home = () => {
    const [data, setData] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);

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

        const getCurrentItem = async () => {
            setLoading(true);
            const res = await axios.get('https://api.punkapi.com/v2/beers');
            setFilteredData(res.data);
            setLoading(false);
        };

        fetchPosts();
        getCurrentItem();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentItem = filteredData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        result = data.filter((data) => {
            return data.name.toLowerCase().search(value) != -1;
        });
        setFilteredData(result);
    };

    return (
        <div>
            <Header />
            <Search onChange={handleSearch} />
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
