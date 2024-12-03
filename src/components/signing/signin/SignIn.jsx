import {useState} from 'react';
import {Link} from 'react-router-dom';
import Header from '../../header/Header.jsx'
import Footer from '../../Footer.jsx'
import './SignIn.scss'
import logo from "../../../assets/image.png";

const SignIn = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const isButtonEnabled = phone && password;
    return (
        <div className={'full flex flex-col justify-between items-center'}>
            <Header/>
            <img className={'w-20 h-16 place-self-center'} src={logo} alt=""/>
            <div className={'flex items-center flex-col gap-2.5'}>
                <h2 className={'border-b text-3xl font-semibold w-80 h-20'}>Войти</h2>
                <div className={'border-b w-80 flex justify-between items-center'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.625 3H6.375V21H17.625V3Z" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M11.9944 17.625H12.0056" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    <input
                        className={'outline-none w-60 h-14 font-medium'}
                        type="text"
                        placeholder={'Номер телефона'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        className={'outline-none w-60 h-14 font-medium'}
                        type="password"
                        placeholder={'Пароль'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={'flex justify-between w-80 font-light text-sm pt-4'}>
                    <span className={'text-[#12121D]'}>Еще не зарегистрированы?</span>
                    <Link to="/signup/">
                        <a href="#" className={'text-[#2566AF]'}>Регистрация</a>
                    </Link>
                </div>
                <div className={'flex justify-between w-80 font-light text-sm py-5'}>
                    <span className={'text-[#12121D]'}>Забыли пароль?</span>
                    <Link to="/password_reset/">
                        <a href="#" className={'text-[#2566AF]'}>Восстановить</a>
                    </Link>
                </div>
            </div>
            <Link to="/home/">
                <button
                    className={`signup rounded-full h-14 w-56 font-bold ${
                        isButtonEnabled ? 'bg-[#FDDB16] text-white' : 'text-[#12121D4D]'
                    }`}
                    disabled={!isButtonEnabled}
                >
                    Войти
                </button>
            </Link>
            <div className={'flex gap-1 items-center'}>
                <svg width="118" height="1" viewBox="0 0 118 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="118" y2="0.5" stroke="#B8B8BC"/>
                </svg>
                <span className={'text-[#3F3F3F]'}>или</span>
                <svg width="116" height="1" viewBox="0 0 116 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="0.5" x2="116" y2="0.5" stroke="#B8B8BC"/>
                </svg>
            </div>
            <div className={'flex gap-4'}>
                <button className={'w-14 h-14 border flex items-center justify-center rounded-full'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 12.073C24 5.40577 18.6269 0 12 0C5.37309 0 0 5.40577 0 12.073C0 18.0984 4.38761 23.0933 10.1252 24V15.5636H7.07748V12.073H10.1252V9.41251C10.1252 6.38703 11.9173 4.7147 14.6578 4.7147C15.9707 4.7147 17.3444 4.95069 17.3444 4.95069V7.92186H15.8306C14.3406 7.92186 13.8748 8.85225 13.8748 9.80808V12.0729H17.2026L16.671 15.5636H13.8747V23.9999C19.6123 23.0949 23.9999 18.1 23.9999 12.0729L24 12.073Z"
                            fill="#1977F3"/>
                    </svg>
                </button>
                <button className={'w-14 h-14 border flex items-center justify-center rounded-full'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.7666 9.6498H22.8V9.6H12V14.4H18.7818C17.7924 17.1942 15.1338 19.2 12 19.2C8.0238 19.2 4.8 15.9762 4.8 12C4.8 8.0238 8.0238 4.8 12 4.8C13.8354 4.8 15.5052 5.4924 16.7766 6.6234L20.1708 3.2292C18.0276 1.2318 15.1608 0 12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 11.1954 23.9172 10.41 23.7666 9.6498Z"
                            fill="#FFC107"/>
                        <path
                            d="M1.38281 6.4146L5.32541 9.306C6.39221 6.6648 8.97581 4.8 11.9992 4.8C13.8346 4.8 15.5044 5.4924 16.7758 6.6234L20.17 3.2292C18.0268 1.2318 15.16 0 11.9992 0C7.39001 0 3.39281 2.6022 1.38281 6.4146Z"
                            fill="#FF3D00"/>
                        <path
                            d="M11.9999 23.9992C15.0995 23.9992 17.9159 22.813 20.0453 20.884L16.3313 17.7412C15.1265 18.6538 13.6289 19.1992 11.9999 19.1992C8.87869 19.1992 6.22849 17.209 5.23009 14.4316L1.31689 17.4466C3.30289 21.3328 7.33609 23.9992 11.9999 23.9992Z"
                            fill="#4CAF50"/>
                        <path
                            d="M23.7665 9.64746H22.7999V9.59766H11.9999V14.3977H18.7817C18.3065 15.7399 17.4431 16.8973 16.3295 17.7403C16.3301 17.7397 16.3307 17.7397 16.3313 17.7391L20.0453 20.8819C19.7825 21.1207 23.9999 17.9977 23.9999 11.9977C23.9999 11.1931 23.9171 10.4077 23.7665 9.64746Z"
                            fill="#1976D2"/>
                    </svg>
                </button>
            </div>
            <Footer/>
        </div>
    );
};

export default SignIn;