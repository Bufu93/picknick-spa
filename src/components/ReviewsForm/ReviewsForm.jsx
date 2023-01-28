import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Rating from 'react-rating';
import Title from '../UI/Title/Title';
import './ReviewsForm.scss';

function ReviewsForm() {
    const { t } = useTranslation();
    const [stars, setStars] = useState(0);

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {
        const FromData = {
            ...data,
            stars,
        };
        console.log(FromData);
        reset();
    };

    return (
        <section>
            <div className="container">
                <Title
                    titletext={'Оставить отзыв'}
                    titleclasses={'title-text small'}
                />
                <form className="review-form" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <p className="review-form__label">
                            {t('reviewTitleRating')}
                        </p>
                        <Rating
                            onClick={(value) => setStars(value)}
                            initialRating={stars}
                            emptySymbol={
                                <svg
                                    className="icon"
                                    width="13"
                                    height="14"
                                    viewBox="0 0 13 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.03834 1.10996C6.20914 0.699319 6.79086 0.699318 6.96166 1.10996L8.36649 4.48759C8.4385 4.6607 8.6013 4.77899 8.7882 4.79397L12.4346 5.08631C12.878 5.12185 13.0577 5.6751 12.7199 5.96444L9.94175 8.34425C9.79936 8.46623 9.73717 8.65762 9.78068 8.84L10.6295 12.3983C10.7327 12.8309 10.262 13.1728 9.88248 12.941L6.76063 11.0342C6.60062 10.9365 6.39938 10.9365 6.23937 11.0342L3.11752 12.941C2.73797 13.1728 2.26735 12.8309 2.37054 12.3983L3.21932 8.84C3.26283 8.65762 3.20064 8.46623 3.05825 8.34425L0.280054 5.96444C-0.057714 5.6751 0.122048 5.12185 0.565375 5.08631L4.2118 4.79397C4.3987 4.77899 4.5615 4.6607 4.63351 4.48759L6.03834 1.10996Z"
                                        fill="#BAB9B9"
                                    />
                                </svg>
                            }
                            fullSymbol={
                                <svg
                                    className="icon"
                                    width="13"
                                    height="14"
                                    viewBox="0 0 13 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.03834 1.10997C6.20914 0.699319 6.79086 0.699318 6.96166 1.10996L8.36649 4.48759C8.4385 4.6607 8.6013 4.77899 8.7882 4.79397L12.4346 5.08631C12.878 5.12185 13.0577 5.6751 12.7199 5.96444L9.94175 8.34425C9.79936 8.46623 9.73717 8.65762 9.78068 8.84L10.6295 12.3983C10.7327 12.8309 10.262 13.1728 9.88248 12.941L6.76063 11.0342C6.60062 10.9365 6.39938 10.9365 6.23937 11.0342L3.11752 12.941C2.73797 13.1728 2.26735 12.8309 2.37054 12.3983L3.21932 8.84C3.26283 8.65762 3.20064 8.46623 3.05825 8.34425L0.280054 5.96444C-0.057714 5.6751 0.122048 5.12185 0.565375 5.08631L4.2118 4.79397C4.3987 4.77899 4.5615 4.6607 4.63351 4.48759L6.03834 1.10997Z"
                                        fill="#6F8751"
                                    />
                                </svg>
                            }
                        />
                    </label>
                    <label>
                        <p className="review-form__label">{t('reviewName')}</p>
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
                        <p className="review-form__label">{t('reviewArea')}</p>
                        <textarea
                            {...register('text', {
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 10,
                                    message: 'Минимум 10 символа',
                                },
                                maxLength: {
                                    value: 255,
                                    message: 'Минимум 255 символа',
                                },
                            })}
                        ></textarea>
                        <div style={{ height: 20 }}>
                            {errors?.text && (
                                <p>{errors?.text?.message || 'Error!'}</p>
                            )}
                        </div>
                    </label>

                    <button disabled={!isValid} type="submit">
                        {t('buttonSend')}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ReviewsForm;
