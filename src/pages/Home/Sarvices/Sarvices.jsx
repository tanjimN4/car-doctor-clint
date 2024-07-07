import { useEffect } from "react";
import { useState } from "react";
import SeviceCard from "./SeviceCard";



const Sarvices = () => {

    const [Services,setService] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="flex justify-center">
            <div>
            <div className="flex justify-center text-center ">
                <div>
                    <h3 className="text-3xl text-[#FF3811] font-bold">Our Service</h3>
                    <h2 className="text-7xl pt-3">Our Service Area</h2>
                    <p className="text-white pt-4">the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which dont look even slightly believable. </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    Services.map(service=><SeviceCard key={service._id} service={service}></SeviceCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default Sarvices;