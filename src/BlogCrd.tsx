type propsType={
    img:string,
    title:string,
    date:string,
    comment:number
}

function BlogCrd({img,title,date,comment}:propsType) {
  return (
    <div className="border  hover:scale-105 transition-transform  border-none">
        <img src={img} alt={title} className="w-full object-cover rounded-lg overflow-hidden" />
        <p className="text-lg text-accent mt-2">{date} / {comment} comments</p>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
    </div>
  )
}

export default BlogCrd