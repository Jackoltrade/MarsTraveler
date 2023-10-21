import Image from "next/image";
import logoPic from "./logo.png";

const Logo = () => {
    return (
        <div className="visible md:invisible xl:visible">
            <div className="flex flex-row place-items-center fixed xl:left-1 2xl:left-10 z-[2] drop-shadow-md md:drop-shadow-none">
                <div>
                    <Image src={logoPic} alt={"Mars Traveler"} width={100} height={100}></Image>
                </div>
                <div className="text-3xl xl:text-2xl 2xl:text-3xl text-white xl:text-[#95684c] font-black drop-shadow-md md:drop-shadow-none xl:opacity-100">Mars Traveler</div>
            </div>
        </div>
    )
}

export default Logo;