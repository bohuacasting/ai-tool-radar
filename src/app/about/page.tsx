export const metadata = {
  title: "About AIToolRadar - Our Mission & Expertise",
  description: "Learn about AIToolRadar's mission to help you navigate the AI tool landscape with honest, expert reviews and comparisons.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        About AIToolRadar
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Your trusted guide through the rapidly evolving AI tool landscape.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            The AI tool market is exploding with new solutions launching every week. AIToolRadar exists 
            to cut through the noise and help you find AI tools that actually solve your problems.
          </p>
          <p className="text-gray-700">
            We rigorously test AI tools across writing, design, coding, productivity, and more, providing 
            honest reviews based on real-world usage, not marketing hype.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Review Process</h2>
          <div className="bg-purple-50 rounded-lg p-6">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-[#7C3AED] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                <div>
                  <strong className="text-gray-900">Hands-On Testing:</strong>
                  <span className="text-gray-700"> We use each tool extensively for its intended purpose, not just surface-level demos.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7C3AED] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                <div>
                  <strong className="text-gray-900">Quality Benchmarks:</strong>
                  <span className="text-gray-700"> We run standardized tests to measure output quality, speed, and consistency.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7C3AED] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                <div>
                  <strong className="text-gray-900">Practical Use Cases:</strong>
                  <span className="text-gray-700"> We evaluate tools in real workflows to identify strengths and limitations.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7C3AED] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                <div>
                  <strong className="text-gray-900">Continuous Updates:</strong>
                  <span className="text-gray-700"> AI tools evolve rapidly; we update reviews to reflect new features and changes.</span>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Transparency & Disclosure</h2>
          <p className="text-gray-700 mb-4">
            AIToolRadar is supported by affiliate partnerships. When you purchase an AI tool through our 
            links, we may earn a commission at no additional cost to you. This funding allows us to 
            maintain subscriptions to multiple AI tools for testing.
          </p>
          <p className="text-gray-700">
            Our affiliate relationships do not influence our reviews. We only recommend tools that we've 
            personally tested and believe provide genuine value. Negative aspects are highlighted just as 
            prominently as positive ones.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions, tool suggestions, or feedback? We'd love to hear from you at{' '}
            <a href="mailto:contact@aitoolradar.com" className="text-[#7C3AED] hover:underline">
              contact@aitoolradar.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
