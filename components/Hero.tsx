import NestedRectanglesCanvas from "./canvas/NestedRectangles";
import { Accent } from "./Accent";

export default function Hero() {
  return (
    <section
      id='home'
      className='hero bg-base-100 h-svh flex flex-col justify-between scroll-mt-[1000svh]'
    >
      <div className='flex-1 mt-18 md:mt-22 lg:mt-20 px-4'>
        <h1
          className='font-medium'
          style={{
            fontSize: "clamp(3rem, 0.9412rem + 9.4118vw, 8rem)",
            lineHeight: 1,
          }}
        >
          <div>Alexander</div>
          <div>
            Escobar
            <Accent
              as='div'
              className='animate-pulse inline-block px-4'
              style={{
                fontSize: "clamp(2.5rem, 0.6471rem + 8.4706vw, 7rem)",
              }}
            >
              *
            </Accent>
          </div>
        </h1>
      </div>

      <div className='pb-4'>
        <div className='flex justify-between p-2'>
          <span className='text-[12px] font-light'>CS Grad Student</span>
          <span className='text-[12px] font-light'>
            Based in Sacramento ,CA
          </span>
          <span className='text-[12px] font-light'>Aspiring Dev</span>
        </div>

        <div
          className='w-full h-full overflow-hidden'
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
