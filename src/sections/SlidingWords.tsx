export default function SlidingWords() {
  return (
    <div className="w-full overflow-hidden bg-white py-16 marquee-wrapper">
      <div className="marquee marquee-helvetica flex w-max gap-12">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}

function MarqueeContent() {
  return (
    <div className="flex items-center gap-12 s text-5xl font-bold whitespace-nowrap">
      <span className="text-primary">ADOPT</span>
      <span className="text-primary">•</span>

      <span className="stroke-text">NURTURE</span>
      <span className="text-primary">•</span>

      <span className="text-primary">DELIVER</span>
      <span className="text-primary">•</span>

      <span className="stroke-text">ADOPT</span>
      <span className="text-primary">•</span>

      <span className="text-primary">NURTURE</span>
      <span className="text-primary">•</span>

      <span className="stroke-text">DELIVER</span>
      <span className="text-primary">•</span>
    </div>
  );
}
