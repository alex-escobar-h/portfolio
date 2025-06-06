import { Bio } from "@/utils/types";
import BioItem from "./BioItem";

type BioLayoutProps = {
  bioList: Bio[];
};
export default function BioLayout({ bioList }: BioLayoutProps) {
  return (
    <div className='gap-layout'>
      {bioList.map((bio) => (
        <BioItem
          key={`${bio.id}${bio.title}`}
          {...bio}
        />
      ))}
    </div>
  );
}
