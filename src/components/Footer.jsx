
const Footer = ({ svgColor = '#000' }) => {
    return (
        <div className={'flex justify-center place-items-end mb-2'}>
            <svg width="134" height="5" viewBox="0 0 134 5" fill="none">
                <rect width="134" height="5" rx="2.5" fill={svgColor}/>
            </svg>
        </div>
    );
};

export default Footer;