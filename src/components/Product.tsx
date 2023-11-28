import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai"

type propsType={
    img:string
    name:string
    price:number
}

function Product({img,name,price}:propsType) {
  return (
    <div className="border border-gray-200 hover:border-gray-300 rounded-lg hover:scale-105 transition-transform">
        <img src={img} alt={name} />

        <div className="flex justify-between items-center px-4 pt-4">
            <div className="text-yellow-400 flex gap-[2px] text-xl">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiOutlineStar/>
            </div>
            <div className="border border-gray-300 bg-accent text-white rounded-full item-center p-3 w-fit cursor-pointer">
                <AiOutlineShopping size={30} />
            </div>
        </div>
        <div className="pl-4">
            <p className="text-xl">{name}</p>
            <h4 className="text-2xl font-semibold text-red-600">${price}</h4>
        </div>
    </div>
  )
}

export default Product