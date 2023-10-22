'use client'

import FromNavigation from "@/app/components/form-navigation/form-navigation";
import Logo from "@/app/components/form-navigation/logo";
import {useState} from "react";

const PageContent = () => {
    const [start, setStart] = useState(false);

    const getStart = () => {
        setStart(true)
    }

    let content = <div className="h-[100vh] w-[100vw] bg-white">
        <Logo></Logo>
        <div className="grid h-[100vh] w-[100vw] place-content-center">
            <div className="flex flex-col w-full pt-44 md:pt-0">
                <div className="grid h-2/6 md:h-auto place-items-center md:px-44">
                    <p className="text-5xl font-black text-center">Welcome, Stella Traveler</p>
                    <p className="text-2xl text-center">to the next frontier in human exploration – our Multi-Stage Mars Visit Application Form! </p>
                    <br/>
                    <p className="text-lg text-center invisible md:visible">We are thrilled to embark on this incredible journey with you as we set our sights on the Red Planet. Our comprehensive application process is designed to ensure your safety and satisfaction while exploring the wonders of Mars. So, fasten your seatbelt, prepare for lift-off, and let&apos;s make history together. Your adventure to Mars begins here!</p>
                </div>
                <div className="divider"></div>
                <div className="grid h-auto place-items-center">
                    <button
                        className="btn btn-neutral text-xl text-white bg-[#95684c]"
                        onClick={getStart}>
                        Start Your Mars Journey !
                    </button>
                </div>
            </div>
        </div>
    </div>

    if (start) content = <FromNavigation></FromNavigation>;

    return (
        <div className="min-h-[100vh] h-auto w-[100vw] bg-[url('/mars-traveler.jpg')] bg-right bg-fixed">
            {content}
        </div>
    );
}

export default PageContent;