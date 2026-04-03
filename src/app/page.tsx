import Hero from '@/components/Hero';
import ReviewCard from '@/components/ReviewCard';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: "Best AI Tools 2026 - AIToolRadar",
  description: "Expert reviews of the best AI tools for writing, design, coding, productivity, and more. Find your perfect AI assistant.",
};

export default function Home() {
  const topTools = [
    {
      name: "ChatGPT Plus",
      rating: 4.8,
      price: "$20/mo",
      summary: "The most versatile AI assistant for writing, coding, research, and creative tasks.",
      pros: ["Superior reasoning", "Browse & analyze files", "DALL-E 3 image generation"],
      cons: ["Usage limits during peak", "Can be slower"],
      affiliateLink: "#"
    },
    {
      name: "Jasper AI",
      rating: 4.6,
      price: "$39/mo",
      summary: "AI copywriting tool specialized for marketing content and brand voice consistency.",
      pros: ["50+ templates", "Brand voice memory", "SEO mode"],
      cons: ["Pricey for individuals", "Learning curve"],
      affiliateLink: "#"
    },
    {
      name: "Midjourney",
      rating: 4.9,
      price: "$10/mo",
      summary: "Leading AI image generator known for artistic, high-quality visual creations.",
      pros: ["Stunning visuals", "Active community", "Constant updates"],
      cons: ["Discord-only interface", "No free tier"],
      affiliateLink: "#"
    }
  ];

  const recentPosts = [
    {
      title: "Best AI Writing Tools 2026: Complete Comparison",
      excerpt: "In-depth comparison of ChatGPT, Jasper, Copy.ai, and other top AI writing assistants for content creators.",
      date: "2026-04-02",
      slug: "best-ai-writing-tools-2026",
      category: "Writing"
    },
    {
      title: "AI Image Generators: Midjourney vs DALL-E 3 vs Stable Diffusion",
      excerpt: "Which AI image generator is right for you? We compare features, quality, pricing, and use cases.",
      date: "2026-03-30",
      slug: "ai-image-generators-comparison",
      category: "Design"
    },
    {
      title: "How to Use AI Tools for SEO Content Creation",
      excerpt: "Step-by-step guide to leveraging AI for keyword research, content outlines, and SEO-optimized articles.",
      date: "2026-03-27",
      slug: "ai-seo-content-guide",
      category: "SEO"
    }
  ];

  return (
    <>
      <Hero 
        title="Best AI Tools 2026 — Expert Reviews for Every Use Case"
        subtitle="Navigate the AI Tool Landscape — Reviews, Comparisons & Honest Ratings"
      />

      {/* Top Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Top AI Tools 2026
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topTools.map((tool, index) => (
            <ReviewCard key={index} {...tool} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Writing', 'Design', 'Coding', 'Video', 'Voice', 'Research', 'Productivity', 'Marketing'].map((cat) => (
              <a 
                key={cat}
                href="#"
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-center group"
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#7C3AED]">
                  {cat} AI Tools
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest AI Tool Reviews
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
