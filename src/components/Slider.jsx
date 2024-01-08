import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
const slider_images=[
    "https://images.pexels.com/photos/10572388/pexels-photo-10572388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3323682/pexels-photo-3323682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

]
const Slider=()=>{
    const [currSlide,setCurrSlide]=useState(0);
    const prevSlide=()=>{
        const newSlide=(currSlide===0)?(slider_images.length)-1:currSlide-1;
        setCurrSlide(newSlide);
    }
    const nextSlide=()=>{
        const newSlide=(currSlide===slider_images.length-1)?0:currSlide+1;
        setCurrSlide(newSlide);
    }
    const showSlide=(index)=>{
        setCurrSlide(index);
    }
    return <div className="relative w-[80vw] lg:w-[70vw] mx-auto mt-12 mb-8 group">
        <h1 className="text-center text-4xl lg:text-5xl font-bold my-8">Try our cocktails!</h1>
        <img className="object-cover h-[30vh] lg:h-[50vh] w-[90%] mx-auto " src={slider_images[currSlide]}/>
        <div className="absolute top-[50%] left-[-3%] text-2xl md:text-4xl rounded-full
        translate-y-[-50%] group-hover:bg-black/20 cursor-pointer"><HiChevronLeft onClick={prevSlide}/></div>
        <div className="absolute top-[50%] right-[-3%] text-2xl md:text-4xl rounded-full group-hover:bg-black/20 cursor-pointer
        translate-y-[-50%]"><HiChevronRight onClick={nextSlide}/></div>
        <div className="flex justify-center mt-4">
            {
                slider_images.map((elem,index)=>{
                    return <div key={index}>
                        <GoDotFill className="cursor-pointer text-sm md:text-md" onClick={()=>{
                            showSlide(index);
                        }}/>
                    </div>
                })
            }
        </div>
    </div>
}
export default Slider;