import Title from '../UI/Title/Title';
import TabsHeaderCard from '../TabsHeaderCard/TabsHeaderCard';
import { useTranslation } from 'react-i18next';

function TabsHeader({ tabsHeaders, onClickTab }) {
    const { t } = useTranslation();
    return (
        <>
            <Title titleclasses={'title-text'} titletext={t('shopTitle')} />
            <div className="tabs__wrapper">
                {tabsHeaders.map(({ title, img, id, anchor }, i) => {
                    return (
                        <TabsHeaderCard
                            index={i}
                            key={id}
                            onClickTab={onClickTab}
                            title={t(title)}
                            img={img}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default TabsHeader;
