import { BIO_LIST } from "@/utils/data";
import BioLayout from "./BioLayout";
export default function About() {
  return (
    <section
      id='about'
      className='py-section bg-base-200'
    >
      <div className='container mx-auto px-2'>
        <div className='mb-24'>
          <h2 className='text-6xl font-semibold'>About</h2>
          <p className='text-base-content-100/80'>
            Born and raised in Los Angeles, CA, now based in Sacramento, Ca.
          </p>
        </div>
        <BioLayout bioList={BIO_LIST} />
      </div>
    </section>
  );
}
