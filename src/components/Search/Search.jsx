import styles from './search.module.css';

export const Search = ({ onChange }) => {
    return (
        <div className={styles.search}>
            <input
                className={styles.searchInput}
                type="Search"
                placeholder="Поиск по названию"
                onChange={onChange}
            />
        </div>
    );
};
