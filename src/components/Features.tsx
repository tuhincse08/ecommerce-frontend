import { LiaShippingFastSolid , LiaMoneyBillWaveSolid, LiaTruckPickupSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import FeatureCard from "./FeatureCard";

const data = [
    {
        title:'Free Shipping',
        icon: <LiaShippingFastSolid />
    },
    {
        title:'Best Price Guarantee',
        icon: <LiaMoneyBillWaveSolid />
    },
    {
        title:'Free Curbside Pickup',
        icon: <LiaTruckPickupSolid />
    },
    {
        title:'Support 24/7',
        icon: <BiSupport />
    },
]

function Features() {
  return (
<div className="container pt-16">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {data.map((el)=>(
        <FeatureCard 
        title = {el.title}
        icon = {el.icon}
        />
    ))}
    </div>
</div>
  )
}

export default Features