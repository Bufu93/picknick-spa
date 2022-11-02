import TabsBodyCard from '../TabsBodyCard/TabsBodyCard';
import Title from '../UI/Title/Title';

function TabsBody({ arr, tabTitle }) {
    return (
        <div
            id={window.innerWidth <= 600 ? 'anchor' : ''}
            className="tabs-body"
        >
            <Title titleclasses={'title-text smalltabs'} titletext={tabTitle} />
            <div className="tabs__wrapper">
                {arr.map((product) => {
                    return <TabsBodyCard key={product.id} product={product} />;
                })}
            </div>
        </div>
    );
}

export default TabsBody;
