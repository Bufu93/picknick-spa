import './TabsHeaderCard.scss';
import { Link } from 'react-scroll';

function TabsHeaderCard({ title, img, onClickTab, index }) {
    return (
        <Link
            to="anchor"
            spy={true}
            smooth={true}
            duration={500}
            onClick={(e) => onClickTab(e, index)}
            className="tab-header"
        >
            <p>{title}</p>
            <div className="tab-header__img">
                <img src={img} alt="tabs" width="100%" height="100%" />
            </div>
        </Link>
    );
}

export default TabsHeaderCard;
