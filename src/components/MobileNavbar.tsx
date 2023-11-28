import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import {IoIosMenu} from 'react-icons/io'
import CartCountBadge from './CartCountBadge'

function MobileNavbar() {
  return (
    <div className="sticky top-0 z-10 bg-white">
        <div className="container lg:hidden">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-6">
                    <IoIosMenu size={30} />
                    <BsSearch size={20} />
                </div>

                <h1 className="text-4xl">Logo</h1>

                <div className="flex gap-4">
                    <div className="icon_shaper">
                        <AiOutlineUser />
                    </div>
                    <div className="icon_shaper relative">
                        <AiOutlineShoppingCart />
                        <CartCountBadge />
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default MobileNavbar