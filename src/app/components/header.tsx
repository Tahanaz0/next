import Link from "next/link";
// import Contact from "../";
import Image from "next/image";
import img from '../public/foodlogo.png'

function Header() {
    return (
        <div className="flex justify-between bg-slate-100 h-14 font-Dancing script ">
            <div>
                <Image className="mx-1 mt-1 "  src={img} alt="logo" width={55} height={55}/>
            </div>
            <ul className="flex  gap-x-3 mt-4 mr-2 font-serif">
                <li>
                    <Link href="home">Home</Link>
                </li>
                <li><Link href="about">About</Link></li>
                <li>
                    <Link href="contact">Contact</Link>
                </li>
                
            </ul>
        </div>)
}
export default Header;