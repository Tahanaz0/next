import Link from "next/link";
// import Contact from "../";
import Image from "next/image";

import { GrHome } from "react-icons/gr";
import { RiContactsLine } from "react-icons/ri";
import { AiFillAlert } from "react-icons/ai";

function Header() {
    return (
        <div className="flex justify-around bg-slate-100 h-14 font-Dancing script ">
            <div>
                <Image className="mx-1 mt-1 " src='/foodlogo.png' alt="logo" width={55} height={55} />
            </div>
            <ul className="flex  gap-7 m-3 font-serif">
                <li className="text-xl flex gap-1 font-extrabold hover:bg-black hover:text-white">
                <div><GrHome/></div>
                <Link href="home">Home</Link>
                </li>
                <li className="text-xl flex gap-1 font-extrabold hover:bg-black hover:text-white">
                    <div><AiFillAlert />
                    </div>
                    <Link href="about">About</Link>
                </li>
                <li className="text-xl flex gap-1 font-extrabold hover:bg-black hover:text-white" >
               <div><RiContactsLine /></div> 
                <Link href="contact">Contact</Link>
                </li>

            </ul>
        </div>)
}
export default Header;