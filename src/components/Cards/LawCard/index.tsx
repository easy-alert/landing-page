export interface IInfoCard {
  title: string;
  description: string;
}

export const LawCard = ({ title, description }: IInfoCard) => {
  return (
    <article className="flex items-start gap-6 max-w-width501 shadow-shadowCard rounded-lg p-8 bg-white">
      <div className="flex flex-col gap-2">
        <h4 className="font-helveticaNeue text-2xl">{title}</h4>
        <p className="text-darkGray text-sectionParagraph">{description}</p>
      </div>
    </article>
  );
};
