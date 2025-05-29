import { NAV_LIST } from "@/utils/data";

export default function DesktopMenu() {
  return (
    <ul className='bg-base-200 rounded-xs hidden sm:flex overflow-hidden'>
      {NAV_LIST.map((nav, idx) => (
        <li
          key={`${nav.id}${nav.title}`}
          className='px-4 transition-colors duration-300 bg-base-200 text-base-content-100 hover:bg-base-content-100 hover:text-base-200'
        >
          <a href={`#${nav.title.toLowerCase()}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );
}
