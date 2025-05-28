import NestedRectanglesCanvas from "./canvas/NestedRectangles";

export default function Hero() {
  return (
    <section className='hero h-screen flex flex-col justify-between'>
      <div className='flex-1 flex flex-col justify-end h-full'>
        <h1
          className='font-bold text-6xl'
          style={{
            fontSize: "clamp(3rem, 0.9412rem + 9.4118vw, 8rem)",
            marginBottom: "clamp(6rem, 7.2353rem + -5.6471vw, 3rem)",
          }}
        >
          <div>ALEXANDER</div>
          <div className='relative w-fit'>
            ESCOBAR
            <span
              className='absolute -right-1/10 -top-1/10 text-accent animate-pulse'
              style={{
                fontSize: "clamp(2.5rem, 0.6471rem + 8.4706vw, 7rem)",
              }}
            >
              *
            </span>
          </div>
        </h1>
      </div>

      <div className='py-8'>
        <div
          className='w-full h-full'
          style={{
            height: "clamp(30vh, 10vw + 20vh, 50vh)",
          }}
        >
          <NestedRectanglesCanvas />
        </div>
      </div>
    </section>
  );
}
