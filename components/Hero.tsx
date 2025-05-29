import NestedRectanglesCanvas from "./canvas/NestedRectangles";
import { Accent } from "./Accent";

export default function Hero() {
  return (
    <section
      id='home'
      className='hero h-svh flex flex-col justify-between'
    >
      <div className='container mx-auto flex-1 mt-20 px-4'>
        <h1
          className='font-bold text-6xl'
          style={{
            fontSize: "clamp(3rem, 0.9412rem + 9.4118vw, 8rem)",
          }}
        >
          <div>Alexander</div>
          <div className='w-fit'>
            Escobar
            <Accent
              className='animate-pulse inline-block'
              style={{
                fontSize: "clamp(2.5rem, 0.6471rem + 8.4706vw, 7rem)",
              }}
            >
              *
            </Accent>
          </div>
        </h1>
      </div>
      <div className='px-4 py-2 bg-base-200 uppercase font-semibold text-sm'>
        Aspiring web developer
      </div>

      <div className='pb-4'>
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
