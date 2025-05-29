import { Showcase } from "@/utils/types";
import { formatID } from "@/utils/utilFunctions";
import { Accent } from "../Accent";

export default function ShowcaseItem({
  id,
  title,
  stack,
  repo,
  demo,
  overview,
}: Showcase) {
  const normalizedStack = Array.isArray(stack) ? stack : [stack];
  const links = [
    { label: "Repo", url: repo },
    demo ? { label: "Demo", url: demo } : null,
  ].filter((l) => l !== null);

  return (
    <article className='grid grid-cols-12 gap-2 md:gap-4'>
      {/* IDX start ======================= */}
      <Accent className='text-start font-mono font-light'>
        ({formatID(id)})
      </Accent>

      {/* IDX end ========================= */}

      {/* CONTENT container =============== */}
      <div className='col-start-1 row-start-2 col-span-full grid grid-cols-11 gap-4 md:col-start-2 '>
        {/* Header start ======================= */}
        <header className='col-span-full'>
          <h3>{title}</h3>
          <hr className='bg-base-content-100/80' />
        </header>
        {/* Header end ========================= */}

        {/* Overview start ======================= */}
        <div className='col-span-full md:col-span-6 md:row-span-4'>
          <h4 className='text-base-content-100/90 font-medium '>Overview:</h4>
          <p className='text-sm md:max-w-[45ch] text-base-content-100/60'>
            {overview}
          </p>
        </div>
        {/* Overview end ========================= */}

        {/* Stack start ========================= */}
        <div className='row-start-4 col-start-5 col-span-6 md:row-start-2 md:col-start-9'>
          <h4 className='text-base-content-100/90 font-medium pb-1'>
            Tech Stack:
          </h4>
          <ul className='flex gap-2 flex-wrap'>
            {/* TODO: BG color */}
            {normalizedStack.map((stk, idx) => (
              <Accent
                key={idx}
                as='li'
                className='text-sm px-1 py-0.5 rounded-xs font-medium text-base-content-100/80'
                variant='background'
              >
                {stk}
              </Accent>
            ))}
          </ul>
        </div>
        {/* Stack end ========================= */}

        {/* Preview start ======================= */}
        <div className='row-start-4 col-start-1 col-span-3 md:row-start-4 md:col-start-9 md:col-span-3'>
          <h4 className='text-base-content-100/90 '>Preview:</h4>
          <ul className='flex gap-x-2'>
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-base-content-100/75'
                >
                  <span className='underline underline-offset-2'>
                    {link.label}
                  </span>
                  <span className='no-underline inline-block px-0.5'>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Preview end ========================= */}
      </div>
      {/* CONTENT container =============== */}
    </article>
  );
}
