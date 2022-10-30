import './Accordion.scss';

function Accordion({ title, description, active, setActive }) {
    return (
        <div className="accordion">
            <div
                onClick={() => setActive(title)}
                className="accordion__heading"
            >
                <div className="accordion__wrapper">
                    <p>{title}</p>
                    <div className="accordion__heading--toggle">
                        <svg
                            className={
                                active === title
                                    ? 'svgarrow'
                                    : 'svgarrow  rotate90'
                            }
                            width="17"
                            height="9"
                            viewBox="0 0 17 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 8L8.5 0.999999L1 8"
                                stroke="#6f8751"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div
                className={
                    (active === title ? 'show' : '') + ' accordion__content'
                }
            >
                <div className="accordion__wrapper">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
