import type { Showcase } from "@/utils/types";
import ShowcaseItem from "./ShowcaseItem";

type ShowcaseLayoutProps = {
  showcaseList: Showcase[];
};
export default function ShowcaseLayout({ showcaseList }: ShowcaseLayoutProps) {
  return (
    <div>
      {showcaseList.map((sc) => (
        <ShowcaseItem
          key={`${sc.id}${sc.title}`}
          {...sc}
        />
      ))}
    </div>
  );
}
