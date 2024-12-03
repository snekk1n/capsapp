import { Route, Routes } from 'react-router-dom';
import Sign from './components/signing/sign/Sign.jsx';
import SignUp from "./components/signing/signup/SignUp.jsx";
import SignIn from "./components/signing/signin/SignIn.jsx";
import PasswordReset from "./components/passwordResetion/passwordReset/PasswordReset.jsx";
import PasswordResetCheck from "./components/passwordResetion/passwordResetCheck/PasswordResetCheck.jsx";
import PasswordReseted from "./components/passwordResetion/passwordReseted/PasswordReseted.jsx"
import Home from "./components/home/Home.jsx"
import BrandList from "./components/BrandList.jsx";
import BestSellers from "./components/BestSellers.jsx";
import Discounts from "./components/Discounts.jsx";
import CapDetail from "./components/CapDetail.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Sign />} />
                <Route path="/signup/" element={<SignUp />} />
                <Route path="/signin/" element={<SignIn />} />
                <Route path="/password_reset/" element={<PasswordReset />} />
                <Route path="/password_reset_check/" element={<PasswordResetCheck />} />
                <Route path="/password_reseting/" element={<PasswordReseted />} />
                <Route path="/home/" element={<Home />} />
                <Route path="/brandlist/" element={<BrandList />} />
                <Route path="/bestsellers/" element={<BestSellers />} />
                <Route path="/discounts/" element={<Discounts />} />
                <Route path="/details/" element={<CapDetail />} />
            </Routes>
        </>
    );
};

export default App;
