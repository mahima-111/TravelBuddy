import { MdCopyright } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer=()=>{
    const solutions=["Travel","Booking","Flights","Cruises"];
    const support=["Pricing","Documentation","Tours","Refunds"];
    const company=["About","Blog","Jobs","Partners"];
    const legal=["Claims","Privacy","Terms","Policies","Conditions"];
    return <div className="bg-black/90 text-white/80 pb-8">
        <div className="w-[85vw] md:w-[70vw] lg:w-[80vw] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between pt-12 mb-8">
            <div className="grid grid-cols-2 justify-between justify-items-center gap-y-4 md:grid-cols-4 mx-auto w-full lg:w-[40vw]">
                <div>
                    <h1 className="font-semibold text-lg mb-2">SOLUTIONS</h1>
                    <ul className="">
                        {solutions.map((elem,index)=>{
                            return <li key={index} className="mb-4">{elem}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-2">SUPPORT</h1>
                    <ul>
                        {support.map((elem,index)=>{
                            return <li key={index} className="mb-4">{elem}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-2">COMPANY</h1>
                    <ul>
                        {company.map((elem,index)=>{
                            return <li key={index} className="mb-4">{elem}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <h1 className="font-semibold text-lg mb-2">LEGAL</h1>
                    <ul>
                        {legal.map((elem,index)=>{
                            return <li key={index} className="mb-4">{elem}</li>
                        })}
                    </ul>
                </div> 
            </div>
            <div className="lg:w-[30vw]">
                <h1 className="font-semibold text-lg mb-2">SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p className="text-md mb-4">The latest deals, articles, and resources, sent to your inbox weekly.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Enter Email.." className="rounded-md px-4 py-2 text-black sm:w-[80%]" ></input>
                <button type="submit" className="rounded-md border border-white/80">Subscribe</button>
                </div>
            </div>
            </div>
        <hr className="bg-white/50 h-[2px]" />
        <div className="flex flex-col sm:flex-row gap-y-4 justify-between items-center py-4 px-4">
            <div className="flex items-center">
            <MdCopyright />
            <h3>2024, All rights reserved.</h3>
            </div>
            <ul className="flex gap-4">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
                <li><FaPinterest /></li>
            </ul>
        </div>
        </div>
    </div>
}
export default Footer;
