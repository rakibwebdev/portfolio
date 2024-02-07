interface propsType {
  thumb: string
  title: string
  description: string
}

function SliderItem({ thumb, title, description }: propsType) {
  return (
    <div
      className="h-[415px] flex justify-center items-center rounded-[10px] bg-cover bg-center"
      style={{ backgroundImage: `url(${thumb})` }}
    >
      <div className="p-[30px] bg-white h-[90%] w-[90%] rounded-[10px] opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="font-title font-bold text-[20px] mb-[10px]">{title}</h3>
        <p className="text-[14px] leading-[20px]">{description}</p>
      </div>
    </div>
  )
}

export default SliderItem
