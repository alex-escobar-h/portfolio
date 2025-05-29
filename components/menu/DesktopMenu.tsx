import { NAV_LIST } from "@/utils/data";

export default function DesktopMenu() {
  return (
    <ul className='bg-base-200 rounded-xs hidden md:flex overflow-hidden'>
      {NAV_LIST.map((nav, idx) => (
        <li
          key={`${nav.id}${nav.title}`}
          className={`bg-base-200/20 px-4 ${
            idx < NAV_LIST.length - 1
              ? "border-r-[1px] border-base-content-100/20"
              : ""
          }`}
        >
          <a href={`#${nav.title.toLowerCase()}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  );
}
