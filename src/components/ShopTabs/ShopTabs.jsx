import TabsBody from '../TabsBody/TabsBody';
import TabsHeader from '../TabsHeader/TabsHeader';
import data from '../../data/data';
import './ShopTabs.scss';
import { useState } from 'react';

function ShopTabs() {
    const [categoryId, setCategoryId] = useState(0);
    const tabs = [
        {
            title: 'Блюда и Соусницы',
            arr: data.dishSous,
            id: 1,
        },
        {
            title: 'Столовые приборы',
            arr: data.tableware,
            id: 2,
        },
        {
            title: 'Тарелки',
            arr: data.plates,
            id: 3,
        },
        {
            title: 'Формы для выпечки',
            arr: data.bakingDish,
            id: 4,
        },
    ];
    const onClickTab = (e, index) => {
        setCategoryId(index + 1);
    };

    return (
        <div className="shop-tabs">
            <TabsHeader
                onClickTab={(e, key) => onClickTab(e, key)}
                tabsHeaders={data.tabsHeaders}
            />
            {tabs.map(({ title, arr, id }) => {
                if (id === categoryId) {
                    return (
                        <div key={id}>
                            <TabsBody tabTitle={title} arr={arr} />
                        </div>
                    );
                } else if (categoryId === 0) {
                    return (
                        <div key={id}>
                            <TabsBody tabTitle={title} arr={arr} />;
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}

export default ShopTabs;
