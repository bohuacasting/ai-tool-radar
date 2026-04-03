import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: "AI Tools Blog - Reviews, Guides & News | AIToolRadar",
  description: "Latest AI tool reviews, comparison guides, tutorials, and industry news to help you leverage AI technology effectively.",
};

export default function BlogPage() {
  const posts = [
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
    },
    {
      title: "Best AI Coding Assistants: GitHub Copilot vs Cursor vs Codeium",
      excerpt: "Comprehensive review of AI-powered coding tools that boost developer productivity and code quality.",
      date: "2026-03-24",
      slug: "best-ai-coding-assistants",
      category: "Coding"
    },
    {
      title: "AI Voice Generators: Which One Sounds Most Human?",
      excerpt: "Testing and comparing ElevenLabs, Murf.ai, and other leading text-to-speech AI platforms.",
      date: "2026-03-20",
      slug: "ai-voice-generators-review",
      category: "Voice"
    },
    {
      title: "Free vs Paid AI Tools: Is the Upgrade Worth It?",
      excerpt: "Analyzing the real value difference between free tiers and premium subscriptions of popular AI tools.",
      date: "2026-03-15",
      slug: "free-vs-paid-ai-tools",
      category: "Guides"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Tools Blog
        </h1>
        <p className="text-xl text-gray-600">
          Expert reviews, comparisons, and guides to help you navigate the AI tool landscape.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
