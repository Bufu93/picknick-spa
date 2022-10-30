import './AdvantagesItem.scss';

function AdvantagesItem({ img, text, classes }) {
    return (
        <div className={classes}>
            <img src={img} alt="icon" />
            <p>{text}</p>
        </div>
    );
}

export default AdvantagesItem;
