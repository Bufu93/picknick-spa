import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Close } from '../../redux/modalSlice';
import { thxOpen } from '../../redux/thxSlice';
import parsePhoneNumber from 'libphonenumber-js';
import './ModalContact.scss';
import axios from 'axios';
import { useState } from 'react';
import ThxMessage from '../UI/ThxMessage/ThxMessage';

const _token = '5677893267:AAGk7c-b4nyiChyJPeN-FiIMOhpf9mz-mZI';
const _chat_id = '-1001650114969';

function ModalContact() {
    const { t } = useTranslation();
    const [phone, setPhone] = useState(null);
    const dispatch = useDispatch();

    const modalClose = () => {
        dispatch(Close());
    };

    const thxMessageOpen = () => {
        dispatch(thxOpen());
    };

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' });

    const normalizePhoneNumber = (value) => {
        setPhone(value);
        const phoneNumber = parsePhoneNumber(value);

        if (!phoneNumber) {
            return value;
        }
        return phoneNumber.formatInternational();
    };

    const onSubmit = (data) => {
        const FromData = `<b>Заявка на обратную связь</b>%0A %0A Имя: ${data.name} %0A Имейл: ${data.email} %0A Телефон: ${phone}`;

        axios
            .post(
                `https://api.telegram.org/bot${_token}/sendMessage?chat_id=${_chat_id}&parse_mode=html&text=${FromData}`
            )
            .then(function () {
                thxMessageOpen();
                modalClose();
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(() => {
                <p>Loading...</p>;
            });
        console.log(FromData);
        reset();
    };
    return (
        <div className="modalcontact__wrapper">
            <div className="modalcontact">
                <button onClick={modalClose} className="modalcontact__close">
                    X
                </button>
                <form
                    className="modalcontact-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label>
                        <p className="modalcontact-form__label">
                            {t('modalContactName')}
                        </p>
                        <input
                            {...register('name', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 2,
                                    message: 'Минимум 2 символа',
                                },
                            })}
                        />
                        <div style={{ height: 20 }}>
                            {errors?.name && (
                                <p>{errors?.name?.message || 'Error!'}</p>
                            )}
                        </div>
                    </label>

                    <label>
                        <p className="modalcontact-form__label">
                            {t('modalContactEmail')}
                        </p>
                        <input
                            {...register('email', {
                                required: 'Поле обязательно для заполнения',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Некоректный имейл',
                                },
                            })}
                        />
                        <div style={{ height: 20 }}>
                            {errors?.email && (
                                <p>{errors?.email?.message || 'Error!'}</p>
                            )}
                        </div>
                    </label>

                    <label>
                        <p className="modalcontact-form__label">
                            {t('modalContactPhone')}
                        </p>
                        <input
                            placeholder="+1 123 ..."
                            onChange={(e) => {
                                e.target.value = normalizePhoneNumber(
                                    e.target.value.replace(
                                        /[A-Za-zА-Яа-яЁё]/,
                                        ''
                                    )
                                );
                            }}
                            type="tel"
                        />
                        <div style={{ height: 20 }}>
                            {errors?.phone && (
                                <p>{errors?.phone?.message || 'Error!'}</p>
                            )}
                        </div>
                    </label>

                    <button disabled={!isValid} type="submit">
                        {t('modalContactButton')}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ModalContact;
