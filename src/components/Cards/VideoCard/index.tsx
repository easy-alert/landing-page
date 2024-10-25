// import Image from "next/image";
// import youtube from "../../../assets/youtube.svg";

interface VideoCardProps {
  title: string;
  position: string;
  description: string;
  videoRight?: boolean;
  src: string;
}

export const VideoCard = ({
  description,
  position,
  title,
  videoRight,
  src,
}: VideoCardProps) => {
  return (
    <div className="flex flex-1 items-center">
      <div className="flex items-center gap-6 flex-col xl:flex-row">
        <div className="flex items-center justify-center rounded-md shadow-shadowCard xl:hidden ">
          <iframe src={src} width={498} height={280} />
        </div>
        {!videoRight && (
          <div className="items-center justify-center rounded-md hidden shadow-shadowCard xl:flex">
            <iframe src={src} width={498} height={280} />
          </div>
        )}
        <article>
          <div className="flex flex-col gap-2">
            <h3 className="font-helveticaNeue text-2xl">{title}</h3>
            <h4 className="text-caption font-helveticaNeueMedium uppercase">
              {position}
            </h4>
            <p className="text-darkGray text-sectionParagraph max-w-xs">
              {description}
            </p>
          </div>
        </article>
        {videoRight && (
          <div className="items-center justify-center rounded-md ml-6 hidden shadow-shadowCard xl:flex">
            <iframe src={src} width={498} height={280} />
          </div>
        )}
      </div>
    </div>
  );
};
