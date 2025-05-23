import CustomImage from "@/components/CustomImage";

export interface IInfoCard {
  icon: string;
  title: string;
  topics: string[];
  alt: string;
}

export const InfoCard = ({ icon, title, topics, alt }: IInfoCard) => {
  return (
    <article className="flex items-start gap-6 max-w-width501 min-h-56 shadow-shadowCard rounded-lg p-8 bg-white">
      <CustomImage src={icon} alt={alt} />

      <div className="flex flex-col gap-2">
        <h4 className="font-helveticaNeue text-2xl">{title}</h4>

        <ul className="flex flex-col gap-1 list-disc ml-4">
          {topics.map((topic, i) => (
            <li key={i} className="text-darkGray">
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
