
const Hero=()=>{
    return (
        <div className="w-full h-screen bg-cover bg-center overflow-hidden bg-black/50 bg-blend-darken bg-[url('https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
            
            <div className="flex w-full h-full justify-center items-center">
                
                <div className="text-center w-[80vw] md:w-[70vw] lg:w-[60vw]">
                    <div className="font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6">
                        <h1>EXPERIENCE THE BEST</h1>
                        <h1>ISLAND GETAWAY</h1>
                    </div>
                    
                    <h2 className="font-medium text-2xl md:text-3xl  text-white mb-2">Travel With Us!</h2>
                    <p className=" text-white text-md md:text-lg  my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda mollitia voluptas, veritatis esse ex in rerum nobis at a! Enim est corrupti officia voluptates magni quisquam neque libero iure iusto.</p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;