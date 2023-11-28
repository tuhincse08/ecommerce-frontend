interface propsType {
    img:string;
    name:string;
    count:number;
}

function CategoryCard ({img,name,count}: propsType) {
  return (
    <div className="border border-gray-200 hover:border-gray-300 rounded-lg hover:scale-105 transition-transform p-8">
        <div className="flex items-center gap-4">
            <div className="space-y-4">
                <h3 className="text-2xl font-medium">{name}</h3>
                <p className="text-lg text-gray-600">{count} Products</p>
            </div>
            <img src={img} alt={name} className="w-[100px]" />
        </div>
    </div>
  )
}

export default CategoryCard