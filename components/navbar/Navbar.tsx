import MenuButton from "../buttons/MenuButton";
import DesktopMenu from "../menu/DesktopMenu";

export default function Navbar() {
  return (
    <nav
      id='navbar'
      className='fixed top-0 left-0 z-[99999]  w-full pt-4 pb-12 base-gradient'
    >
      <div className='container mx-auto px-2  flex items-center justify-between'>
        <a href='#home'>Portfolio</a>
        <MenuButton />
        <DesktopMenu />
      </div>
    </nav>
  );
}
