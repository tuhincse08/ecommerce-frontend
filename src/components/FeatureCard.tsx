import { ReactNode } from "react"

interface propsType{
    title: string,
    icon: ReactNode
}

function FeatureCard({title,icon}: propsType) {
  return (
    <div className="flex justify-start gap-4 items-center">
        <div className="bg-gray-200 text-accentDark rounded-full w-12 h-12 grid place-items-center text-[24px]">
            {icon}
        </div>
        <div>
            <h3 className="text-xl  text-accent">{title}</h3>
            <p className="text-gray-500">Lorem Ispum..</p>
        </div>
    </div>
  )
}

export default FeatureCard