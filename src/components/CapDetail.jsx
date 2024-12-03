// import {Link} from 'react-router-dom';
import Footer from './Footer.jsx';
import '././home/Home.scss';
import Header from "./header/Header.jsx";
import Card from "./card/Card.jsx"
import MenuBar from "./MenuBar.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cap02 from "./../assets/cap-2.png"
import cap01 from "./../assets/cap-1.png"
import cap0 from "./../assets/cap0.png"
import cap1 from "./../assets/cap1.png"
import cap2 from "./../assets/cap2.png"
import cap3 from "./../assets/cap3.png"

const tour = {
    images: [cap02, cap01, cap0, cap1, cap2, cap3]
}

    const settings = {
        initialSlide: 2,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    };

const CapDetail = () => {
    return (
        <div className={'page overflow-hidden flex flex-col items-center gap-3'}>
            <Header/>
            <div className="">
                <Slider {...settings}>
                    {tour.images.map((src, index) => (

                        // eslint-disable-next-line react/jsx-key
                            <img
                                src={src}
                                alt={`Slide + ${index + 1}`}
                                className="w-full object-cover"
                            />
                    ))}
                </Slider>
            </div>
            <div className={"w-full items-center flex-col flex gap-5 overflow-x-hidden overflow-y-scroll h-4/6"}>
                <h3 className={'text-[#12121D] text-xl font-semibold w-11/12'}>Похожие товары</h3>
                <div className={'h-56 flex gap-4 w-full pl-3.5'}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <div className="down justify-end bg-white fixed bottom-0 items-center flex flex-col gap-6">
                <MenuBar/>
                <Footer/>
            </div>
        </div>
    );
};

export default CapDetail;
