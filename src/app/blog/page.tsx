import BlogCard from '@/components/BlogCard';
import { posts } from './posts';

export const metadata = {
  title: "AI Tools Blog - Reviews, Guides & News | AIToolRadar",
  description: "Latest AI tool reviews, comparison guides, tutorials, and industry news to help you leverage AI technology effectively.",
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

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
        {sortedPosts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}
