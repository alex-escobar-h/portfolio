"use client";
import { NAV_LIST, EXTERNAL_LINK_LIST } from "@/utils/data";
import { formatID } from "@/utils/utilFunctions";
import { Accent } from "../Accent";

type MobileMenuProps = {
  handleNavClick: () => void;
};
export default function MobileMenu({ handleNavClick }: MobileMenuProps) {
  const [_, ...externalList] = EXTERNAL_LINK_LIST;
  const updatedNavlist = [{ id: 4, title: "Home" }, ...NAV_LIST];

  return (
    <div className='fixed inset-0 bg-base-200 -z-0 py-36 px-4 md:hidden'>
      <div className='mx-auto px-2 max-w-md'>
        <ul className='space-y-6'>
          {updatedNavlist.map((nav, idx) => (
            <li key={`${nav.id}${nav.title}`}>
              <a
                href={`#${nav.title.toLowerCase()}`}
                className='flex items-start gap-4'
                onClick={handleNavClick}
              >
                <Accent className='text-xl font-medium'>
                  ({formatID(idx + 1)})
                </Accent>

                <div className='text-6xl font-bold'>{nav.title}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
