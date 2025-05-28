import type { Bio } from "@/utils/types";
import { formatID } from "@/utils/utilFunctions";

export default function BioItem({ id, title, content }: Bio) {
  return (
    <article className='flex flex-col gap-4 md:grid md:grid-cols-12'>
      {/* HR Start ----------------------- */}
      <hr className='md:col-span-full opacity-20' />
      {/* HR End ------------------------- */}

      {/* Header Start ------------------- */}
      <header className='flex gap-4 md:gap-0 md:grid md:grid-cols-subgrid md:row-start-2 md:col-start-1 md:col-span-3 '>
        <span className='text-start text-xs font-mono font-light lg:text-sm text-accent/80'>
          ({formatID(id)})
        </span>
        <h3 className='md:grid-col-start-2 md:col-span-4'>{title}</h3>
      </header>
      {/* Header End --------------------- */}

      {/* Content Start ------------------ */}
      <div className='md:col-start-7 md:col-span-6 lg:col-start-9 lg:col-span-4'>
        <p className='text-sm md:max-w-[45ch] text-base-content-100/65'>
          {content}
        </p>
      </div>
      {/* Content End -------------------- */}
    </article>
  );
}
