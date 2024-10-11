interface PlanCardProps {
  title: string;
  price: string;
}

export const PlanCard = ({ price, title }: PlanCardProps) => {
  return (
    <article className="flex items-start gap-6 shadow-shadowCard rounded-lg p-8 bg-white">
      <div className="flex flex-col gap-2">
        <p className="text-darkGray text-sectionParagraph">{title}</p>
        <h4 className="font-helveticaNeue text-title">{price}</h4>
      </div>
    </article>
  );
};
