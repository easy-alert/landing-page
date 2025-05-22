import CustomImage from "@/components/CustomImage";

interface TestimonyCardProps {
  name: string;
  position: string;
  image?: string;
  description: string;
}

export const TestimonyCard = ({
  description,
  image,
  name,
  position,
}: TestimonyCardProps) => {
  return (
    <div className="flex flex-col items-start gap-4 shadow-shadowCardLessSpread rounded-lg p-8 bg-white">
      <div className="flex gap-6">
        {image ? (
          <CustomImage
            src={image}
            alt="Imagem de testemunha"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <div className="bg-gray-200 w-8 h-8 rounded-full" />
        )}

        <div>
          <h3 className="font-helveticaNeue text-2xl">{name}</h3>
          <h4 className="text-caption text-sm font-helveticaNeueMedium uppercase">
            {position}
          </h4>
        </div>
      </div>

      <article>
        <p className="text-darkGray text-sectionParagraph">{description}</p>
      </article>
    </div>
  );
};
