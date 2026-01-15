import Image from "next/image";

type FeatureCardProps = {
  description: string;
};

export default function FeatureCard({ description }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-3">
      <Image
        src="/svg/green-arrow.svg"
        width={20}
        height={20}
        alt="arrow-green"
        aria-hidden
        className="mt-1 shrink-0"
      />

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
