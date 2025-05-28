import { BIO_LIST } from "@/utils/data";
import BioLayout from "./BioLayout";
export default function About() {
  return (
    <section id='about'>
      <div className='container mx-auto px-2'>
        <BioLayout bioList={BIO_LIST} />
      </div>
    </section>
  );
}
