import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: "Compare AI Tools Side-by-Side | AIToolRadar",
  description: "Interactive comparison tool to evaluate features, pricing, and performance of popular AI tools for your specific needs.",
};

export default function ComparePage() {
  const tools = [
    {
      name: "ChatGPT Plus",
      rating: 4.8,
      price: "$20/mo",
      features: ["GPT-4 access", "Browse web", "Analyze files", "DALL-E 3"],
      affiliateLink: "#"
    },
    {
      name: "Claude Pro",
      rating: 4.7,
      price: "$20/mo",
      features: ["200K context", "Priority access", "Longer outputs", "Artifact creation"],
      affiliateLink: "#"
    },
    {
      name: "Jasper AI",
      rating: 4.6,
      price: "$39/mo",
      features: ["50+ templates", "Brand voice", "SEO mode", "Team collaboration"],
      affiliateLink: "#"
    },
    {
      name: "Copy.ai",
      rating: 4.5,
      price: "$36/mo",
      features: ["90+ tools", "Brand voice", "Bulk mode", "Chrome extension"],
      affiliateLink: "#"
    },
    {
      name: "Writesonic",
      rating: 4.4,
      price: "$16/mo",
      features: ["AI article writer", "Chatsonic", "AI images", "WordPress plugin"],
      affiliateLink: "#"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Compare AI Tools Side-by-Side
        </h1>
        <p className="text-xl text-gray-600">
          Select AI tools to compare their features, pricing, and capabilities in real-time.
        </p>
      </div>

      <ComparisonTable items={tools} />

      <div className="mt-12 bg-purple-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Choose the Right AI Tool
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-[#7C3AED] mr-2">•</span>
            <span><strong>Use Case:</strong> Match the tool to your specific need (writing, design, coding, etc.)</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#7C3AED] mr-2">•</span>
            <span><strong>Quality:</strong> Test output quality with your actual use cases before committing</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#7C3AED] mr-2">•</span>
            <span><strong>Integration:</strong> Check compatibility with your existing workflow and tools</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#7C3AED] mr-2">•</span>
            <span><strong>Cost vs Value:</strong> Consider usage limits, features, and ROI for your needs</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
