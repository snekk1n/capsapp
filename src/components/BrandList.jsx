import Header from "./header/Header.jsx";
import Footer from "./Footer.jsx";
import MenuBar from "./MenuBar.jsx";
import "./home/Home.scss"
import Card from "./card/Card.jsx";
import BackButton from "./BackButton.jsx";

const BrandList = () => {
    return (
        <div className={'page flex flex-col gap-4 items-center'}>
            <Header/>
            <BackButton/>
            <h2 className={'w-11/12 font-bold text-[#12121D] mb-2'}>New Era</h2>
            <div
                className="w-11/12 flex flex-wrap gap-5 overflow-x-hidden overflow-y-scroll h-3/5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <div className="down justify-end bg-white fixed bottom-0 items-center flex flex-col gap-6">
                <MenuBar/>
                <Footer/>
            </div>
        </div>
    );
};

export default BrandList;