import './MainView.css';
import FavoritesView from './FavoritesView';
import { Link } from 'react-router-dom'
import Button from '@restart/ui/esm/Button';

const MainView = () => {

    return (
        <>
        <div style={{textAlign: "center"}}>
                <a className="rounded-button" href="tel:911">CRASHED</a>
        </div>

        <div style={{textAlign: "center"}}>
        <button className="favButton">
        <Link className="favText" to="/favorites">Favorites</Link>
        </button>
        </div>
        </>
    )
}

export default MainView;