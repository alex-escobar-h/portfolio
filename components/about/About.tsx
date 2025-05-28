import { BIO_LIST } from "@/utils/data";
import BioLayout from "./BioLayout";
export default function About() {
  return (
    <section
      id='about'
      className='py-[8rem]'
    >
      <div className='container mx-auto px-2'>
        <div className='mb-12'>
          <h2 className='text-6xl font-semibold'>About</h2>
        </div>
        <BioLayout bioList={BIO_LIST} />
      </div>
    </section>
  );
}
