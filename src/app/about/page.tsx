import Image from "next/image"

function About() {
    return (
        <>
            <div className="  text-center mx-52 my-8">
                <h1 className="font-bold text-4xl">About Us</h1>
                <p className="text-3xl font-sans">{`Welcome to FOODCAMP, your trusted partner in industry/field. Our story began in year with a mission to mission statement. We're a team of passionate professionals
                    dedicated to delivering exceptional products/services that exceed your expectations..`}
                </p></div>



            <div className=" text-center mx-52 my-8">
                <h1 className="font-bold text-4xl">Our Mession</h1>
                <p className=" text-3xl  font-sans">{`At FOODCAMP, our mission is to specific goal. We strive for excellence in everything
                    we
                    do, ensuring our customers receive the best possible experience.`}
                </p></div>


                <div className=" text-center mx-52 my-8">
                    <h1 className="font-bold text-4xl">Our Value</h1> 
                    <p className=" font-sans text-3xl">we believe in</p>

                    <div className="flex justify-center mt-7 gap-5  ">
                        <Image src='/pizza.jpg' alt="burgeer" width={200} height={100} />
                        <Image src='/pp.png' alt="burgeer" width={200} height={100} />

                        
                </div>
            </div>

        </>
    )
}
export default About