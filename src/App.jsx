import { Route, Routes } from 'react-router-dom';
import styles from './App.css';
import { CardDetail } from './components/CardDetail';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<CardDetail />} />
            </Routes>
        </div>
    );
}

export default App;
