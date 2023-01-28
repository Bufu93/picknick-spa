import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Rating from 'react-rating';
import TextTruncate from 'react-text-truncate';
import './ReviewsListItem.scss';

function ReviewsListItem({ name, starts, text }) {
    const { t } = useTranslation();
    const [line, setLine] = useState(7);
    return (
        <div className="ReviewsListItem">
            <p className="ReviewsListItem__name">{name}</p>
            <div className="stars">
                <Rating
                    readonly={true}
                    initialRating={starts}
                    emptySymbol={
                        <svg
                            width="13"
                            height="14"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.03834 1.10996C6.20914 0.699319 6.79086 0.699318 6.96166 1.10996L8.36649 4.48759C8.4385 4.6607 8.6013 4.77899 8.7882 4.79397L12.4346 5.08631C12.878 5.12185 13.0577 5.6751 12.7199 5.96444L9.94175 8.34425C9.79936 8.46623 9.73717 8.65762 9.78068 8.84L10.6295 12.3983C10.7327 12.8309 10.262 13.1728 9.88248 12.941L6.76063 11.0342C6.60062 10.9365 6.39938 10.9365 6.23937 11.0342L3.11752 12.941C2.73797 13.1728 2.26735 12.8309 2.37054 12.3983L3.21932 8.84C3.26283 8.65762 3.20064 8.46623 3.05825 8.34425L0.280054 5.96444C-0.057714 5.6751 0.122048 5.12185 0.565375 5.08631L4.2118 4.79397C4.3987 4.77899 4.5615 4.6607 4.63351 4.48759L6.03834 1.10996Z"
                                fill="#BAB9B9"
                            />
                        </svg>
                    }
                    fullSymbol={
                        <svg
                            width="13"
                            height="14"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.03834 1.10997C6.20914 0.699319 6.79086 0.699318 6.96166 1.10996L8.36649 4.48759C8.4385 4.6607 8.6013 4.77899 8.7882 4.79397L12.4346 5.08631C12.878 5.12185 13.0577 5.6751 12.7199 5.96444L9.94175 8.34425C9.79936 8.46623 9.73717 8.65762 9.78068 8.84L10.6295 12.3983C10.7327 12.8309 10.262 13.1728 9.88248 12.941L6.76063 11.0342C6.60062 10.9365 6.39938 10.9365 6.23937 11.0342L3.11752 12.941C2.73797 13.1728 2.26735 12.8309 2.37054 12.3983L3.21932 8.84C3.26283 8.65762 3.20064 8.46623 3.05825 8.34425L0.280054 5.96444C-0.057714 5.6751 0.122048 5.12185 0.565375 5.08631L4.2118 4.79397C4.3987 4.77899 4.5615 4.6607 4.63351 4.48759L6.03834 1.10997Z"
                                fill="#6F8751"
                            />
                        </svg>
                    }
                />
            </div>
            <TextTruncate
                className="ReviewsListItem__text"
                line={line}
                element="article"
                truncateText="…"
                text={text}
            />
            {text.length > 211 && (
                <button
                    className="text-truncate"
                    onClick={() => {
                        line === 7 ? setLine(0) : setLine(7);
                    }}
                >
                    {line === 7 ? t('buttonShow') : t('buttonHide')}
                </button>
            )}
        </div>
    );
}

export default ReviewsListItem;
