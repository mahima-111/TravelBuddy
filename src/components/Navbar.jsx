import { useState } from "react"
import { CgMenuRight } from "react-icons/cg";

const Navbar=()=>{
    const [nav,setNav]=useState(false);
    const [color,setColor]=useState(false);
    const changeColor=()=>{
        if(window.scrollY>=90){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener('scroll',changeColor);
    const openNav=()=>{
        setNav(!nav)
    }
    return (
        <div className={color ? "flex justify-between px-8 py-2 bg-black fixed top-0 left-0 w-full z-10":"flex justify-between px-8 py-2 bg-transparent fixed top-0 left-0 w-full"}>
            <div className="flex gap-2 sm:gap-4"><img className="object-cover" src="../world.png" />
            <h1 className="text-white font-bold text-3xl z-30">TravelBuddy</h1></div>
            <button className={color||nav?"z-30 bg-white text-black":"z-30 "} onClick={()=>{
                openNav();
            }}><CgMenuRight /></button>
            <div className= {nav ? "absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black/80 duration-300 z-20" : "w-0 overflow-hidden absolute top-0 left-0 h-screen flex justify-center items-center bg-black/80 duration-300"}>
                <ul className="flex flex-col gap-10 text-white text-4xl font-medium ">
                    <li className="hover:drop-shadow-[0_25px_25px_rgba(255,255,255,1)] duration-200 cursor-pointer ">Home</li>
                    <li className="hover:drop-shadow-[0_25px_25px_rgba(255,255,255,1)] duration-200 cursor-pointer">Destinations</li>
                    <li className="hover:drop-shadow-[0_25px_25px_rgba(255,255,255,1)] duration-200 cursor-pointer">Packages</li>
                    <li className="hover:drop-shadow-[0_25px_25px_rgba(255,255,255,1)] duration-200 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar