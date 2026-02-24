import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import QuadB from "../../../public/assets/jobma.png";
import Mastertrust from "../../../public/assets/mastertrust.png";
import Hiranandani from "../../../public/assets/excellence_technologies.png";
import Elepixala from "../../../public/assets/elpixala.png";
import RsTech from "../../../public/assets/rstech.png";
import Image from "next/image";
import Oodles from "../../../public/assets/oodles_technologies.png";

const reviews = [
  // { img: QuadB },
  { img: Oodles },
  // { img: Mastertrust },
  { img: Hiranandani }
  // { img: Elepixala },
  // { img: RsTech },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <div className={cn("w-32 h-24 overflow-hidden", " dark:border-white/20")}>
      <Image
        className="object-contain w-full h-14 border p-2"
        width={96}
        height={96}
        alt="User"
        src={img}
      />
    </div>
  );
};

export function CompanyList() {
  return (
    <div className="max-w-[500px] mx-auto">
      <div className="w-full flex-col items-center justify-center overflow-hidden">
        <Marquee className="[--duration:20s]" reverse={true}>
          {reviews.map((review: any, index) => (
            <ReviewCard key={index} img={review.img} />
          ))}
        </Marquee>
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-[#09090B] dark:from-[#09090B]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-[#09090B] dark:from-[#09090B]" /> */}
      </div>
    </div>
  );
}
