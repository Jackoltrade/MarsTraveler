'use client'

import Logo from "@/app/components/form-navigation/logo";
import {SetStateAction, useState} from "react";
import FormContainer from "@/app/components/forms/form-container";

const FromNavigation = () => {

    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (buttonNumber: SetStateAction<number>) => {
        setActiveButton(buttonNumber);
    };

    return (
        <>
            <Logo></Logo>
            <div className="invisible md:visible navbar bg-white/70 backdrop-blur-md place-content-center fixed h-[100px] z-[1]">
                <div className="navbar-center">
                    <a className={`btn btn-ghost btn-wide normal-case text-xl ${activeButton === 1 && 'btn-active'}`} onClick={() => handleButtonClick(1)}>Stage I</a>
                    <a className={`btn btn-ghost btn-wide normal-case text-xl ${activeButton === 2 && 'btn-active'}`} onClick={() => handleButtonClick(2)}>Stage II</a>
                    <a className={`btn btn-ghost btn-wide normal-case text-xl ${activeButton === 3 && 'btn-active'}`} onClick={() => handleButtonClick(3)}>Stage III</a>
                </div>
            </div>

            <FormContainer activeButton={activeButton}></FormContainer>
            
            <div className="visible md:invisible btm-nav bg-white/70 backdrop-blur-md fixed">
                <button className={`normal-case text-xl ${activeButton === 1 && 'active'}`} onClick={() => handleButtonClick(1)}>
                    Stage I
                </button>
                <button className={`normal-case text-xl ${activeButton === 2 && 'active'}`} onClick={() => handleButtonClick(2)}>
                    Stage II
                </button>
                <button className={`normal-case text-xl ${activeButton === 3 && 'active'}`} onClick={() => handleButtonClick(3)}>
                    Stage III
                </button>
            </div>
        </>
    )
}

export default FromNavigation;