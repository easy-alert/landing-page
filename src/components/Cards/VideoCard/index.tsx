import { LazyYoutube } from "@/components/LazyYoutube";

interface VideoCardProps {
  title: string;
  position: string;
  description: string;
  videoRight?: boolean;
  videoId: string;
}

export const VideoCard = ({
  title,
  description,
  videoId,
  position,
  videoRight,
}: VideoCardProps) => {
  return (
    <div className="flex flex-1 items-center">
      <div className="flex items-center gap-6 flex-col xl:flex-row">
        {!videoRight && (
          <div className="items-center justify-center rounded-md hidden shadow-shadowCard xl:flex">
            <LazyYoutube videoId={videoId} width={560} height={315} />
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
            <LazyYoutube videoId={videoId} width={560} height={315} />
          </div>
        )}
      </div>
    </div>
  );
};
