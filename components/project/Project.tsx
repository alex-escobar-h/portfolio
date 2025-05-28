import { SHOWCASE_LIST } from "@/utils/data";
import ShowcaseLayout from "./ShowcaseLayout";

export default function Project() {
  return (
    <section id='project'>
      <div className='container mx-auto px-2'>
        <ShowcaseLayout showcaseList={SHOWCASE_LIST} />
      </div>
    </section>
  );
}
