import BlogCrd from "../BlogCrd"

const data = [
    {   
        id: 0,
        img:'/post__1.webp',
        title:'Healthy Food Healthy Life',
        date:'Aug 27, 2023',
        comment:8, 
    },
    {  
         id:1,
        img:'/post__2.webp',
        title:'Healthy Food Healthy Life',
        date:'Aug 25, 2023',
        comment:1, 
    },
    {
        id: 3,
        img:'/post__3.webp',
        title:'Healthy Food Healthy Life',
        date:'Aug 30, 2023',
        comment:6, 
    }

]

function BlogSection() {
  return (
    <div className="container pt-16">
        
        <h3 className="text-2xl">Latest News</h3>
        <p className="text-lg text-gray-600">Present posts in a best way to highlight interesting moments of your blog.</p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6  mt-4">

            {data.map((blog)=>(
                <BlogCrd 
                key={blog.id}
                img ={blog.img}
                title ={blog.title}
                date ={blog.date}
                comment ={blog.comment}
                />
            ))}
            

        </div>
    </div>
  )
}

export default BlogSection