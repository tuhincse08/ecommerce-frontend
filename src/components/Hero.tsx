import { BsArrowRight } from "react-icons/bs"


function Hero() {
  return (
    <div className="container">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-4">
            <div className="xl:col-span-2 xl:row-span-2 relative">
                <img src="/hero__1.webp" 
                className="h-full w-full rounded-lg object-cover"
                alt="Hero 1st" />

                <div className="absolute max-w-[470px] top-[20%] ml-16">
                    <p className="text-2xl">100% Original Dry Fruits</p>
                    <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold pt-4">Dried Fruits Best Healthy</h2>
                    <p className="text-xl text-gray-500 pt-8">Starting At</p>
                    <div className="text-4xl text-red-600 font-medium pt-4">$18.36</div>

                    <div className="flex rounded-full bg-accentDark hover:bg-accent items-center gap-4 w-fit text-white py-2 px-4 mt-8">
                        Shop Now 
                        <BsArrowRight/>
                    </div>
                </div>
            </div>

            <div className="relative">
                <img src="/hero__2.webp" 
                className="h-full w-full rounded-lg object-cover"
                alt="Hero 2nd" />

                <div className="absolute max-w-[470px]  top-[12%] ml-16">
                    <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold pt-4">Best Yummy Pizza</h2>
                    <p className="text-xl text-gray-500 pt-8">Starting At</p>
                    <div className="text-4xl text-red-600 font-medium pt-2">$25</div>

                    <div className="flex rounded-full bg-accent hover:bg-accentDark items-center gap-4 w-fit text-white py-2 px-4 mt-8">
                        Shop Now 
                        <BsArrowRight/>
                    </div>
                </div>
                
            </div>

            <div className="relative">
                <img src="/hero__3.webp" 
                className="h-full w-full rounded-lg object-cover"
                alt="Hero 3rd" />

            <div className="absolute max-w-[470px]  top-[12%] ml-16">
                    <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold pt-4">Best Yummy Chips</h2>
                    <p className="text-xl text-gray-500 pt-8">Starting At</p>
                    <div className="text-4xl text-red-600 font-medium pt-2">$10</div>

                    <div className="flex rounded-full bg-accent hover:bg-accentDark items-center gap-4 w-fit text-white py-2 px-4 mt-8">
                        Shop Now 
                        <BsArrowRight/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero