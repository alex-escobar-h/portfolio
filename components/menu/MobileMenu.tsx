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
  console.log(externalList);

  return (
    <div className='fixed inset-0 bg-base-200 -z-0  sm:hidden'>
      <div className='mx-auto px-4 max-w-md py-20 flex flex-col justify-between size-full  pr-16'>
        <ul className='space-y-4'>
          {updatedNavlist.map((nav, idx) => (
            <li key={`${nav.id}${nav.title}`}>
              <a
                href={`#${nav.title.toLowerCase()}`}
                className='flex items-end gap-8'
                onClick={handleNavClick}
              >
                <Accent className='text-start'>({formatID(idx + 1)})</Accent>

                <div className='text-4xl font-bold capitalize'>{nav.title}</div>
              </a>
            </li>
          ))}
        </ul>
        <div className='space-y-2'>
          <hr />
          <ul>
            {externalList.map((link) => (
              <li key={`${link.id}${link.title}`}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='space-x-2'
                >
                  <span>{link.title}</span>
                  <span>↗</span>
                </a>
              </li>
            ))}
          </ul>
          <hr />
        </div>
      </div>
    </div>
  );
}
