import Product from "./Product"
const data =[
    { id:0, img:"/product__1.webp", name:"Fresh Kiwi", price:15 },
    { id:1, img:"/product__2.webp", name:"Dried Mango", price:10 },
    { id:2, img:"/product__3.webp", name:"Jewel Cranberries", price:12 },
    { id:3, img:"/product__4.webp", name:"Crunchy Crisps", price:8 },
]

function FruitScetion() {
  return (
    <div className="container pt-16">

        <div>
            <h3 className="text-2xl">Fruits & Vegetables</h3>
            <div className="text-lg text-gray-600">Buy farm fresh fruits and vegetables online at the best prices</div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-3">
            <div><img src="/feature__1.webp" alt="Banner one" className="w-full h-full object-cover"/></div>
            {data.map((product)=>(
                <Product 
                key={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                />
            ))}
        </div>
        

    </div>
  )
}

export default FruitScetion