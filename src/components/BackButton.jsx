import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div onClick={handleGoBack} className={'w-80'}>
            <button className={'w-11 h-11 rounded-full bg-[#12121D0D] flex justify-center items-center'}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.3403 11.5278H5.34033" stroke="black" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                    <path d="M12.3403 18.5278L5.34033 11.5278L12.3403 4.52783" stroke="#12121D" stroke-width="1.5"
                          stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    );
};

export default BackButton;