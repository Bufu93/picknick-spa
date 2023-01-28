import { useDispatch } from 'react-redux';
import { thxClose } from '../../../redux/thxSlice';
import './ThxMessage.scss';

function ThxMessage({ children, title }) {
    const dispatch = useDispatch();
    return (
        <div className="thxmessage__wrp">
            <div className="thxmessage">
                <button
                    onClick={() => dispatch(thxClose())}
                    className="thxmessage__close"
                >
                    X
                </button>
                <p className="thxmessage__title">{title}</p>
                <p className="thxmessage__text">{children}</p>
            </div>
        </div>
    );
}

export default ThxMessage;
