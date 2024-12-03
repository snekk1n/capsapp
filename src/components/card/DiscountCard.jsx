import cap from "../../assets/cap0.png"
import "./Card.scss"

const DiscountCard = () => {
    return (
        <div className={'card flex flex-col justify-between'}>
            <div className={'box rounded-xl flex items-center justify-center'}>
                <img src={cap} alt=""/>
            </div>
            <div className={'flex items-start'}>
                <div className={'flex flex-col justify-between'}>
                    <h5 className={'font-semibold text-xs'}>Adidas</h5>
                    <p className={'title text-[#12121D4D]'}>San Francisco Baseball</p>
                    <div className={'flex gap-1'}>
                        <span className={'text-xs line-through leading-5 font-bold text-[#828282]'}>4600 сом</span>
                        <span className={'text-sm font-bold text-[#FDDB16]'}>3800 сом</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountCard;