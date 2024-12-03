import { Link } from 'react-router-dom';
import Header from '../../header/Header.jsx'
import Footer from '../../Footer.jsx'
import './PasswordReset.scss'
import logo from "../../../assets/image.png";

const PasswordReset = () => {
    return (
        <div className={'all flex flex-col justify-between items-center'}>
            <div className={'flex items-center flex-col gap-2.5'}>
                <Header/>
                <img className={'w-20 h-16 place-self-center'} src={logo} alt=""/>
                <h2 className={'text-3xl font-semibold w-80 py-5'}>Восстановить пароль</h2>
                <div className={'border-b w-80 flex justify-between items-center'}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.625 3H6.375V21H17.625V3Z" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M11.9944 17.625H12.0056" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    <input className={'outline-none w-60 h-14 font-medium'} type="text"
                           placeholder={'Номер телефона'}/>
                </div>
                <p className={'w-80 text-[#12121D] font-medium'}>Введите номер, указанный при регистрации. Вам будет
                    отправлен код подтверждения</p>
            </div>
            <div>
                <Link to="/password_reset_check/">
                    <button className={'signup rounded-full h-14 w-56 text-white font-bold bg-[#FDDB16] mb-14'}>Отправить</button>
                </Link>
                <Footer/>
            </div>
        </div>
    );
};

export default PasswordReset;