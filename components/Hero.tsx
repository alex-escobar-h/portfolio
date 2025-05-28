import NestedRectanglesCanvas from "./canvas/NestedRectangles";

export default function Hero() {
  return (
    <section className='hero h-screen flex flex-col justify-between'>
      <h1 className='font-bold flex flex-col justify-center items-center flex-1 text-6xl md:text-7xl lg:text-9xl'>
        <div>ALEXANDER</div> <div>ESCOBAR</div>
      </h1>

      <div>
        <div className='px-2'>
          <div
            className='w-full h-full '
            style={{
              height: "clamp(30vh, 10vw + 20vh, 50vh)",
            }}
          >
            <NestedRectanglesCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
