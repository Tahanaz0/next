
// import Contact from "../app/contact/contact";
// import Header from "./components/header";
import Image from 'next/image'
import img from '../public/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_9048155.png'
import img2 from '../public/Junk-Food-PNG-Picture.png'
import img3 from '../public/deal2.png'
import img4 from '../public/pngtree-burger-food-png-free-download-png-image_13329458.png'
import img5 from '../public/pngtree-fast-foods-png-image_13369480.png'
 import img6 from '../public/burr.webp'
 import img7 from '../public/b.png'
 import img8 from '../public/dee.webp'
 import img9 from '../public/nug.webp'

function Homepage() {
  return (
    <div>
      <div className='flex justify-evenly flex-wrap  my-5'>
        <Image  src={img} alt="pizza" width={250} height={100} />
        <Image src={img2} alt="deal" width={300} height={100} />
        <Image src={img3} alt="burgeer" width={300} height={100} />
        </div>
        <div className='flex justify-evenly flex-wrap '>
        <Image src={img4} alt="burgeer" width={300} height={100} />
        <Image src={img5} alt="burgeer" width={300} height={100} />
        <Image src={img6} alt="burgeer" width={300} height={100}/>
        </div>
      <div className='flex justify-evenly flex-wrap '>
        <Image src={img8} alt="burgeer" width={300} height={90}/> 
         <Image src={img7} alt="burgeer" width={300} height={100}/>
        <Image src={img9} alt="burgeer" width={250} height={100}/>
      </div>
    </div>


  )
}
export default Homepage