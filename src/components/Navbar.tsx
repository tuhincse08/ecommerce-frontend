import {BsSearch} from 'react-icons/bs';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import CartCountBadge from './CartCountBadge';

function Navbar() {
  return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
          
                <h1 className="text-4xl font-bold text-accent uppercase">Daily<span className="text-accentDark">Mart</span> </h1>
          

                <div className="relative w-full max-w-[500px]">
                    <input type="text" placeholder="Serach Product ..." className="w-full px-6 py-3 bg-[#f2f3f5] border-none outline-none rounded-[30px]" />
                    <BsSearch className="absolute top-0 right-5 text-gray-500 mt-[14px]" size={20}/>
                </div>
                <div className="flex gap-4">
                  <div className="icon_shaper"> 
                    <AiOutlineUser/>
                  </div>
                  <div className="icon_shaper relative">
                    <AiOutlineShoppingCart/>
                    <CartCountBadge />
                  </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar