import Favorite from "./Favorite.jsx";
import {Link} from 'react-router-dom';
import cap from "../../assets/cap0.png"
import "./Card.scss"

const Card = () => {
    return (
        <Link to="/details/">
            <div className={'card flex flex-col justify-between'}>
                <div className={'box rounded-xl flex items-center justify-center'}>
                    <img src={cap} alt=""/>
                </div>
                <div className={'flex justify-between items-start'}>
                    <div className={'flex flex-col justify-between'}>
                        <h5 className={'font-semibold text-xs'}>Adidas</h5>
                        <p className={'title text-[#12121D4D]'}>San Francisco Baseball</p>
                        <span className={'text-sm font-bold text-[#FDDB16]'}>3800 сом</span>
                    </div>
                    <Favorite/>
                </div>
            </div>
        </Link>
    );
};

export default Card;