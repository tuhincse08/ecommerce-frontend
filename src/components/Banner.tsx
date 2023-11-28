

function Banner() {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
            
            <div className="border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                <img src="/banner__1.webp" alt="Banner one" className="w-full h-full object-cover" />
            </div>

            <div className="border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
                <img src="/banner__2.webp" alt="Banner one" className="w-full h-full object-cover" />
            </div>

        </div>
    </div>
  )
}

export default Banner