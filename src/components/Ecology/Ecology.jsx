import Title from '../UI/Title/Title';
import './Ecology.scss';

function Ecology() {
    return (
        <section className="ecology">
            <div className="container">
                <Title
                    titleclasses={'title-text'}
                    titletext={'Экологичность'}
                />
                <div className="ecology__wrapper">
                    <div className="ecology__text">
                        <p>
                            На фоне глобального загрязнения окружающей среды,
                            такая посуда, по прогнозам специалистов становится
                            очень популярна. Состоит из компонентов безопасных
                            для здоровья, легко утилизируется, не выделяя в
                            атмосферу токсические вещества.
                        </p>
                        <p>
                            Одноразовая посуда изготовленная из пшеничных
                            отрубей, является отличной альтернативой любой
                            одноразовой посуде из бумаги и пластика,
                            производство которого обременительно для окружающей
                            среды.
                        </p>
                    </div>
                    <div className="ecology__img">
                        <img
                            src="images/ecology.svg"
                            alt="ecology"
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ecology;
