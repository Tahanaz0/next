import Image from "next/image"
import Insta from '../public/inn.png'
import Fb from '../public/fbb.png'
import Waap from '../public/wapp.png'
import '../style/stylr.css'


function Footer (){
    return(
        <div className='footer  bg-slate-100  text-slate-900 '>
      <div className="flex justify-around py-5  gap-4">
      <ul className="">
        <p className="font-bold ">POPULAR CATEGORIES</p>
        <li className="text-muted"><a href="/" className="tags">Our Values</a></li>
        <li className="text-muted"><a href="/" className="tags">Our Location</a></li>
        <li className="text-muted"><a href="/" className="tags">{`JobsLab's Story`}</a></li>
        <li className="text-muted"><a href="/" className="tags">Restaurant Jobs</a></li>
      </ul>
     




      <ul className=" w-80">
        <p className=" font-bold  ">TRENDING SEARCHES</p>
        <li className=""> {`App is where the fun is! It's Easy,`}
           <br /> Fast and Convenient.</li>
        
        <li className="text-muted">Books</li>
        
      </ul>
      <ul className="">
        <p className=" font-bold ">ABOUT US</p>
        <li className="text-muted"><a href="/" className="tags">About  Group</a></li>
        <li className="text-muted"><a href="/" className="tags">Get The App!</a></li>
        <li className="text-muted"><a href="/" className="tags">Contact Us</a></li>
        <li className="text-muted">
          <a href="/" className="tags">OLX for Businesses</a>
        </li>
      </ul>
      <ul className="lower-list">
        <p className="font-bold  ">Information</p>
        <li className="text-muted"><a href="/" className="tags">Help </a></li>
        <li className="text-muted"><a href="/" className="tags">Sitemap</a></li>
        <li className="text-muted">
          <a href="/" className="tags"> Privacy information</a>
        </li>
    
      </ul>
      <div className="">
        <p className="font-bold ">FOLLOW US</p>  
        <div className="flex justify-between gap-2 py-5">
        <Image  src={Insta} alt="pizza" width={50} height={50} />
        <Image  src={Fb} alt="pizza" width={50} height={50} />
        <Image  src={Waap} alt="pizza" width={50} height={50} />


      

            
            </div>    
      </div>
    </div>   
      </div>

    )
}
export default Footer