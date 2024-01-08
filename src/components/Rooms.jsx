const Rooms=()=>{
    return (
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2 py-8 px-8 bg-blue-100 w-[80vw] lg:w-[70vw] mx-auto mt-16">
                <div className="md:w-[35vw] lg:w-[30vw] pb-8">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Fine Interior Rooms</h1>
                    <p className="text-gray-700 text-md lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum nostrum cumque sint inventore alias veniam distinctio recusandae voluptatibus velit? Aspernatur unde ipsam veniam soluta!</p>
                </div>
                <div className="grid grid-cols-2 gap-2 md:w-[35vw] lg:w-[30vw]">
                    <img className="object-cover h-full w-full col-span-2" src="https://images.pexels.com/photos/3155696/pexels-photo-3155696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <img className="object-cover h-full w-full" src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <img className="object-cover h-full w-full" src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /> 
                </div>
            </div>
    )
}
export default Rooms;