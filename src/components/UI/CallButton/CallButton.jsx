import './CallButton.scss';
import { Open } from '../../../redux/modalSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

function CallButton({ classes }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const modalOpen = () => {
        dispatch(Open());
    };

    return (
        <button onClick={modalOpen} className={classes}>
            {t('buttonCall')}
        </button>
    );
}

export default CallButton;
