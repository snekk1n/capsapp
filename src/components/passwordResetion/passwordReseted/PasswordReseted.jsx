import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../../header/Header.jsx';
import Footer from '../../Footer.jsx';
import './PasswordReseted.scss';
import logo from "../../../assets/image.png";

const PasswordResetCheck = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    // Проверка заполненности полей и совпадения паролей
    const isFormValid = password && confirmPassword && password === confirmPassword;

    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            setIsSubmitted(true);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            // Таймер для скрытия уведомления и перехода на страницу входа
            const timer = setTimeout(() => {
                setIsSubmitted(false);
                navigate('/signin/');
            }, 3000);

            // Очистка таймера при размонтировании компонента
            return () => clearTimeout(timer);
        }
    }, [isSubmitted, navigate]);

    return (
        <div className="place flex flex-col justify-between items-center">
            <div className="flex items-center flex-col gap-2.5">
                <Header/>
                <img className={'w-20 h-16 place-self-center'} src={logo} alt=""/>
                <h2 className="text-3xl font-semibold w-80 py-5">Восстановить пароль</h2>
                <div className="flex flex-col w-80 pt-5 gap-2.5">
                    <div className={'border-b w-80 flex justify-between items-center'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.8521 10.6919H4.85205C3.74748 10.6919 2.85205 11.5873 2.85205 12.6919V19.6919C2.85205 20.7965 3.74748 21.6919 4.85205 21.6919H18.8521C19.9566 21.6919 20.8521 20.7965 20.8521 19.6919V12.6919C20.8521 11.5873 19.9566 10.6919 18.8521 10.6919Z"
                                stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M6.85205 10.6919V6.69189C6.85205 5.36581 7.37883 4.09404 8.31652 3.15636C9.2542 2.21868 10.526 1.69189 11.8521 1.69189C13.1781 1.69189 14.4499 2.21868 15.3876 3.15636C16.3253 4.09404 16.8521 5.36581 16.8521 6.69189V10.6919"
                                stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input
                            className="outline-none w-60 h-14 font-medium"
                            type="password"
                            placeholder="Введите новый пароль"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className={'border-b w-80 flex justify-between items-center'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.8521 10.6919H4.85205C3.74748 10.6919 2.85205 11.5873 2.85205 12.6919V19.6919C2.85205 20.7965 3.74748 21.6919 4.85205 21.6919H18.8521C19.9566 21.6919 20.8521 20.7965 20.8521 19.6919V12.6919C20.8521 11.5873 19.9566 10.6919 18.8521 10.6919Z"
                                stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path
                                d="M6.85205 10.6919V6.69189C6.85205 5.36581 7.37883 4.09404 8.31652 3.15636C9.2542 2.21868 10.526 1.69189 11.8521 1.69189C13.1781 1.69189 14.4499 2.21868 15.3876 3.15636C16.3253 4.09404 16.8521 5.36581 16.8521 6.69189V10.6919"
                                stroke="#BDBDBD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input
                            className="outline-none w-60 h-14 font-medium"
                            type="password"
                            placeholder="Подтвердите новый пароль"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                </div>
            </div>
            <div className={'flex flex-col items-center'}>
                {isSubmitted && (
                    <div
                        className="notification bg-[#FDDB16] text-white rounded h-12 w-80 flex items-center pl-4 mb-16">
                        <span className={'flex items-center gap-2'}><svg width="20" height="20" viewBox="0 0 20 20"
                                                                         fill="none">
<path
    d="M9.99998 0C4.47715 0 0 4.47715 0 9.99998C0 15.5228 4.47715 20 9.99998 20C15.5228 20 20 15.5228 20 9.99998C19.9941 4.47961 15.5204 0.00590122 9.99998 0ZM9.99998 18.5714C5.26611 18.5714 1.42856 14.7338 1.42856 9.99998C1.42856 5.26611 5.26611 1.42856 9.99998 1.42856C14.7338 1.42856 18.5714 5.26611 18.5714 9.99998C18.5663 14.7318 14.7318 18.5663 9.99998 18.5714Z"
    fill="white"/>
<path
    d="M15.4873 5.92366C15.2105 5.65631 14.7717 5.65631 14.4949 5.92366L7.85706 12.5615L5.5049 10.2093C5.23085 9.92557 4.77863 9.91774 4.49491 10.1918C4.21115 10.4658 4.20332 10.9181 4.47738 11.2018C4.48311 11.2077 4.48897 11.2136 4.49491 11.2193L7.35207 14.0765C7.63097 14.3553 8.08315 14.3553 8.36205 14.0765L15.5049 6.93361C15.779 6.64989 15.7711 6.19771 15.4873 5.92366Z"
    fill="white"/>
<defs>
<clipPath id="clip0_17252_30">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
                                Вы обновили пароль</span>
                    </div>
                )}
                <button
                    onClick={handleSubmit}
                    className="signup rounded-full h-14 w-56 text-white font-bold bg-[#FDDB16] mb-14"
                    disabled={!isFormValid}
                >
                    Восстановить пароль
                </button>
                <Footer/>
            </div>
        </div>
    );
};

export default PasswordResetCheck;
