import { SHOWCASE_LIST } from "@/utils/data";
import ShowcaseLayout from "./ShowcaseLayout";

export default function Project() {
  return (
    <section
      id='projects'
      className='py-section'
    >
      <div className='container mx-auto px-2'>
        <h2 className='text-6xl font-semibold mb-12'>Projects</h2>
        <ShowcaseLayout showcaseList={SHOWCASE_LIST} />
      </div>
    </section>
  );
}
