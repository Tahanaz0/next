
 
import Image from 'next/image'



function Homepage() {
  return (
    <div className='w-max'>
      <div className='grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 m-5 '>
        {/* Image 1 */}
        <div className="relative group w-[350px] h-[300px] mt-5">
          <Image
            src='/deal.png'
            alt="pizza"
            width={350}
            height={200}
            className='hover:scale-105 active:scale-100 transition-all'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-md transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative group w-[350px] h-[300px]">
          <Image
            src='/Junk-Food-PNG-Picture.png'
            alt="deal"
            width={400}
            height={200}
            className='hover:scale-105 active:scale-100 transition-all'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative group w-[350px] h-[300px]">
          <Image
            src='/deal2.png'
            alt="burger"
            width={400}
            height={200}
            className='hover:scale-105 active:scale-100 transition-all'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  '>
        <div className="relative group w-[350px] h-[300px]">
          <Image
            src='/pangree.png'
            alt="burger"
            width={350}
            height={100}
            className='hover:scale-105 active:scale-100 transition-all'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>
        <div className="relative group w-[350px] h-[300px]">
          <Image
            src='/ff.png'
            alt="burger"
            width={350}
            height={100}
            className='hover:scale-105 active:scale-100 transition-all'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>
        <div className="relative group  w-[300px]">
          <Image
            src='/burr.webp'
            alt="burger"
            width={350}
            height={200}
            className='hover:scale-105 active:scale-100 transition-all'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>        </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 m-5 items-center'>
        <div className="relative group rounded-4xl w-[350px] h-[300px] ">
          <Image
            src='/dee.webp'
            alt="burger"
            width={450}
            height={200}
            className='mt-7'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>
        <div className="relative group rounded-4xl w-[350px] h-[300px]">
          <Image
            src='/b.png'
            alt="burger"
            width={350}
            height={100}
            className='hover:scale-105 active:scale-100 transition-all'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>
        <div className="relative group rounded-4xl w-[350px] h-[300px]">
          <Image
            src='/nug.webp'
            alt="burger"
            width={350}
            height={200}
            className='hover:scale-105 active:scale-100 transition-all'
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
            <span className="text-white font-bold text-lg">Order</span>
          </div>
        </div>      </div>
    </div>


  )
}
export default Homepage