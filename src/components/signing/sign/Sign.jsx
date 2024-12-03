import Header from '../../header/Header.jsx';
import { Link } from 'react-router-dom';
import Footer from '../../Footer.jsx';
import './Sign.scss';
import logo from "../../../assets/image.png";

const Sign = () => {
    return (
        <div className={'main flex flex-col justify-between'}>
            <Header svgColor="#fff"/>
            <img className={'w-20 h-16 place-self-center'} src={logo} alt=""/>
            <div className={'flex flex-col gap-80'}>
                <div className={'flex flex-col gap-3 items-center'}>
                    <h1 className={'text-white text-4xl font-bold tracking-wider w-80'}>CUSTOM CAPS</h1>
                    <p className={'text-white text-lg w-80'}>Магазин кепок</p>
                </div>
                <div className={'flex flex-col gap-3 items-center'}>
                    <Link to="/signin/">
                        <button className={'w-80 h-14 bg-white rounded-full font-semibold'}>Войти</button>
                    </Link>
                    <Link to="/signup/">
                        <button
                            className={'w-80 h-14 text-white bg-[#12121D8A] rounded-full font-semibold'}>Регистрация
                        </button>
                    </Link>
                </div>
            </div>
            <Footer svgColor="#fff"/>
        </div>
    );
};

export default Sign;
