import { Link } from 'react-router-dom';
import Header from '../../header/Header.jsx'
import Footer from '../../Footer.jsx'
import './PasswordResetCheck.scss'
import logo from "../../../assets/image.png";

const PasswordResetCheck = () => {
    return (
        <div className={'total flex flex-col justify-between items-center'}>
            <div className={'flex items-center flex-col gap-2.5'}>
                <Header/>
                <img className={'w-20 h-16 place-self-center'} src={logo} alt=""/>
                <h2 className={'text-3xl font-semibold w-80 py-5'}>Восстановить пароль</h2>
                <div className={'flex justify-between w-80 pt-5'}>
                    <input className={'border-b border-black outline-none w-8 font-medium py-3 text-3xl pl-2'}
                           type="text" maxlength="1"/>
                    <input className={'border-b border-black outline-none w-8 font-medium py-3 text-3xl pl-2'}
                           type="text" maxlength="1"/>
                    <input className={'border-b border-black outline-none w-8 font-medium py-3 text-3xl pl-2'}
                           type="text" maxlength="1"/>
                    <input className={'border-b border-black outline-none w-8 font-medium py-3 text-3xl pl-2'}
                           type="text" maxlength="1"/>
                    <input className={'border-b border-black outline-none w-8 font-medium py-3 text-3xl pl-2'}
                           type="text" maxlength="1"/>
                    <input className={'border-b border-black outline-none w-8 font-medium py-3 text-3xl pl-2'}
                           type="text" maxlength="1"/>
                </div>
                <p className={'w-80 text-[#12121D] font-medium'}>Введите 6 значный код, отправленный на номер +996 788
                    999 666</p>
            </div>
            <div>
                <Link to="/password_reseting/">
                    <button className={'signup rounded-full h-14 w-56 text-white font-bold bg-[#FDDB16] mb-14'}>Восстановить пароль
                    </button>
                </Link>
                <Footer/>
            </div>
        </div>
    );
};

export default PasswordResetCheck;