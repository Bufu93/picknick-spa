import Title from '../UI/Title/Title';
import TabsHeaderCard from '../TabsHeaderCard/TabsHeaderCard';

function TabsHeader({ tabsHeaders, onClickTab }) {
    return (
        <>
            <Title titleclasses={'title-text'} titletext={'Магазин'} />
            <div className="tabs__wrapper">
                {tabsHeaders.map(({ title, img, id, anchor }, i) => {
                    return (
                        <TabsHeaderCard
                            index={i}
                            key={id}
                            onClickTab={onClickTab}
                            title={title}
                            img={img}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default TabsHeader;
