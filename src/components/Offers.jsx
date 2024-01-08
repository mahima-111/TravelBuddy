const Offers=()=>{
    return (
        <div className="flex justify-center mt-16" >
            <div className="w-[80vw] lg:w-[70vw] md:flex md:justify-between gap-8">
            <div className="grid grid-cols-3 w-full md:w-[38vw] gap-2">
                <img className="object-cover w-full h-full row-span-3" src="https://images.pexels.com/photos/4577681/pexels-photo-4577681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <img className="object-cover w-full h-full col-span-2" src="https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <img className="object-cover w-full h-full row-span-2" src="https://images.pexels.com/photos/2765869/pexels-photo-2765869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <img className="object-cover w-full h-full row-span-3" src="https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                <img className="object-cover w-full h-full col-span-2 " src="https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
            <div className="md:w-[40vw] lg:w-[35vw] self-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Plan your next trip!</h1>
                <h3 className="text-lg font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                <p className="mb-4 lg:mb-10 text-gray-700 text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia eos quasi dolorem? Fugiat dignissimos explicabo placeat vero distinctio qui optio alias ex quidem illum.</p>
                <div className="flex justify-between w-full">
                    <button className="text-black bg-white border border-black">Learn More</button>
                    <button>Book your Trip</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Offers;