import Title from '../UI/Title/Title';
import './Technology.scss';

function Technology() {
    return (
        <section className="technology">
            <div className="container">
                <Title titleclasses={'title-text'} titletext={'Технология'} />
                <div className="technology__wrapper">
                    <div className="technology__text">
                        <p>
                            Экологически чистый процесс производства одноразовой
                            посуды из отрубей пшеницы основан на натуральном
                            сырье пшеничных отрубей при небольшом количестве
                            воды. Остальное высокое давление и температуры.
                        </p>
                        <p>
                            Предлагаемый продукт из возобновляемых,экологически
                            чистых ресурсов — термоустойчив, безопасный для
                            детей, практичный и функциональный. Изготовлен
                            исключительно из съедобных отрубей, содержащих
                            клетчатку, микроэлементы и витамины.
                        </p>
                    </div>
                    <div className="technology__img">
                        <img
                            src="images/technology.svg"
                            alt="technology"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technology;
