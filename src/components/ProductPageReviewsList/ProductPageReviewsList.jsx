import { useState, useEffect } from 'react';
import { reviews } from '../../data/data';
import ReviewsListItem from '../ReviewsListItem/ReviewsListItem';
import './ProductPageReviewsList.scss';
import Title from '../UI/Title/Title';
import { useTranslation } from 'react-i18next';

function ProductPageReviewsList() {
    const { t } = useTranslation();
    const [items, setItems] = useState([]);
    const [visible, setVisible] = useState(3);
    console.log(visible);

    const MoreItems = () => {
        if (items.length >= visible) {
            setVisible((prevValue) => prevValue + 3);
        } else {
            setVisible(3);
        }
    };

    useEffect(() => {
        setItems(reviews);
    }, []);

    // useEffect(() => {
    //     fetch('')
    //         .then((res) => res.json())
    //         .then((data) => setItems(data));
    // }, []);

    return (
        <section className="reviews-list">
            <div className="container">
                <Title
                    titletext={t('reviewsListTitle')}
                    titleclasses={'title-text small'}
                />
                <div className="reviews-list__wrapper">
                    {items.slice(0, visible).map((item, index) => {
                        return <ReviewsListItem {...item} key={index} />;
                    })}
                </div>
                <button className="loadmore" onClick={MoreItems}>
                    {items.length > visible
                        ? t('reviewsBtnMoreShow')
                        : t('reviewsBtnMoreHide')}
                </button>
            </div>
        </section>
    );
}

export default ProductPageReviewsList;
