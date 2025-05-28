import NestedRectanglesCanvas from "./canvas/NestedRectangles";

export default function Hero() {
  return (
    <section className='hero h-screen flex flex-col justify-between'>
      <div>
        <h1 className='text-4xl font-bold'>Alex Escobar</h1>
      </div>
      <div className='pb-8'>
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
