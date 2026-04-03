import CTAButton from './CTAButton';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-purple-100">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton href="/compare" variant="white">
            Compare Tools
          </CTAButton>
          <CTAButton href="/blog" variant="outline">
            Read Reviews
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
