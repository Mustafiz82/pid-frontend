import Button from '@/components/ui/button';
import Image from 'next/image';

export default function SustainabilitySection() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-6 px-5 py-12  mx-auto">
      {/* Left: Images */}
      <div className="flex  flex-row gap-4 w-full lg:w-3/5">
        <div className="w-1/2 h-[500px] relative">
          <Image
            src="/images/home/sutainbility-1.png"
            alt="Planting 1"
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority
          />
        </div>
        <div className="w-1/2 h-[500px] relative">
          <Image
            src="/images/home/sutainbility-2.png"
            alt="Planting 2"
            layout="fill"
            objectFit="cover"
            className="rounded"
            priority
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full p-10 lg:w-2/5">
        <h2 className="text-2xl t lg:text-4xl leading-snug font-light mb-4">
          CORPORATE RESPONSIBILITY AND SUSTAINABILITY
        </h2>
        <p className="text-sm text-gray-700 mb-2">
          Sustainability means meeting today’s needs while protecting tomorrow’s.
        </p>
        <p className="text-sm text-gray-700 mb-6">
          At PID, we prioritize the environment first, approaching sustainability through a holistic lens that also considers social and economic impact.
        </p>
        <Button label={"Read More"} variant='primary' />
      </div>
    </section>
  );
}
