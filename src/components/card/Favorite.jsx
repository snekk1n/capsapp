import React, { useState } from 'react';

const Favorite = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <button onClick={handleClick}>
            <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill={isActive ? 'currentColor' : 'none'}
                stroke={isActive ? '#FDDB16' : 'black'}
                className={isActive ? 'text-[#FDDB16]' : 'text-black'}
            >
                <path
                    d="M17.3262 2.84319C16.9006 2.41736 16.3953 2.07956 15.839 1.84909C15.2828 1.61862 14.6867 1.5 14.0846 1.5C13.4825 1.5 12.8863 1.61862 12.3301 1.84909C11.7739 2.07956 11.2685 2.41736 10.8429 2.84319L9.95958 3.72652L9.07624 2.84319C8.2165 1.98344 7.05044 1.50045 5.83458 1.50045C4.61872 1.50045 3.45265 1.98344 2.59291 2.84319C1.73317 3.70293 1.25017 4.86899 1.25017 6.08485C1.25017 7.30072 1.73317 8.46678 2.59291 9.32652L3.47624 10.2099L9.95958 16.6932L16.4429 10.2099L17.3262 9.32652C17.7521 8.90089 18.0899 8.39553 18.3203 7.83932C18.5508 7.2831 18.6694 6.68693 18.6694 6.08485C18.6694 5.48278 18.5508 4.88661 18.3203 4.33039C18.0899 3.77418 17.7521 3.26882 17.3262 2.84319V2.84319Z"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
    );
};

export default Favorite;