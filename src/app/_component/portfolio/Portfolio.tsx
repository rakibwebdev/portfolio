import Slider from './Slider'

function Portfolio() {
  return (
    <section className="bg-white pt-[140px] pb-[140px]">
      <div className="container mx-auto">
        <h2 className="inline-block mb-[10px] text-primary-color font-title font-medium">
          Portfolio
        </h2>
        <p className="font-extrabold uppercase text-[30px] font-title">
          selected works
        </p>
        <Slider />
      </div>
    </section>
  )
}

export default Portfolio
