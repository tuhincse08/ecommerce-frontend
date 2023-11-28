import { LuMailOpen } from "react-icons/lu";

function Newsletter() {
  return (
    <div className="mt-16 bg-accentDark">
        <div className="container py-8">
            <div className="md:flex md:justify-between md:items-center text-white">
                <div className="flex justify-start gap-4">
                    <LuMailOpen size={60}/>
                    <div>
                        <h2 className="text-2xl font-semibold">Sign up To Our Newsletters</h2>
                        <p className="text-md">...and receive $20 coupon for first shopping</p>
                    </div>

                </div>

                <div className="relative max-w-[500px] w-full mt-4 md:mt-0">
                        <input type="text" name="" id="" className="rounded-full w-full p-4 text-gray-500" placeholder="Your Email Address..." />
                        <div className="absolute top-2 right-2 bg-accentDark py-2 px-4 rounded-full ">Subscribe! </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Newsletter