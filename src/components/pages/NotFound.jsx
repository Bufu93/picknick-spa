import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
    return (
        <main className="notfound">
            <h2 className="notfound__text">NotFound</h2>
            <Link className="notfound__link" to="/">
                Go to Home /
            </Link>
        </main>
    );
}

export default NotFound;
