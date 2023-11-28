import CategoryCard from "./CategoryCard";


function Categories() {
  const data = [
    {   
        id: 1,
        name: 'Fresh Fruits',
        img: '/public/category__1.webp',
        count: 9,
    },
    {   
        id: 2,
        name: 'Fresh Vegs',
        img: '/public/category__2.webp',
        count: 8,
    },
    {   
        id: 3,
        name: 'Canned Goods',
        img: '/public/category__3.webp',
        count: 10,
    },
    {   
        id: 4,
        name: 'Bread & Bakerys',
        img: '/public/category__4.webp',
        count: 12,
    },
    {   
        id: 5,
        name: 'Fishes',
        img: '/public/category__5.webp',
        count: 10,
    },
    {   
        id: 6,
        name: 'Eggs & Dairy',
        img: '/public/category__6.webp',
        count: 7,
    },
    {   
        id: 7,
        name: 'Soft Drinks',
        img: '/public/category__7.webp',
        count: 7,
    },
    {   
        id: 8,
        name: 'Fresh Fruits',
        img: '/public/category__1.webp',
        count: 8,
    },
 ];

  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* <div className="text-4xl text-black"> One</div> */}
            {data.map((cat)=>(
            // <div className="text-4xl text-black">{cat.name}</div>
            <CategoryCard 
            key={cat.id}
            name={cat.name}
            img={cat.img}
            count={cat.count}
            />
            ))}
        </div>
    </div>
  )
}

export default Categories