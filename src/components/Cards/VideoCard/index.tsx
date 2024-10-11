import Image from "next/image";
import youtube from "../../../assets/youtube.svg";

interface VideoCardProps {
  title: string;
  position: string;
  description: string;
  videoRight?: boolean;
}

export const VideoCard = ({
  description,
  position,
  title,
  videoRight,
}: VideoCardProps) => {
  return (
    <div className="flex flex-1 items-center px-52">
      <div className="flex items-center gap-6 flex-col xl:flex-row">
        <div className="flex items-center justify-center bg-red-800 px-40 py-20 rounded-md xl:hidden">
          <Image src={youtube} alt="youtube logo" />
        </div>
        {!videoRight && (
          <div className="items-center justify-center bg-red-800 px-40 py-20 rounded-md hidden xl:flex">
            <Image src={youtube} alt="youtube logo" />
          </div>
        )}
        <article>
          <div className="flex flex-col gap-2">
            <h3 className="font-helveticaNeue text-2xl">{title}</h3>
            <h4 className="text-caption font-helveticaNeueMedium uppercase">
              {position}
            </h4>
            <p className="text-darkGray text-sectionParagraph">{description}</p>
          </div>
        </article>
        {videoRight && (
          <div className="items-center justify-center bg-red-800 px-40 py-20 rounded-md ml-6 hidden xl:flex">
            <Image src={youtube} alt="youtube logo" />
          </div>
        )}
      </div>
    </div>
  );
};
