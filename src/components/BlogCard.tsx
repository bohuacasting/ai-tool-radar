import Link from 'next/link';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category?: string;
}

export default function BlogCard({ title, excerpt, date, slug, category }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border-t-4 border-[#7C3AED]">
      <div className="p-6">
        {category && (
          <span className="inline-block bg-[#7C3AED] text-white text-xs px-3 py-1 rounded-full mb-3">
            {category}
          </span>
        )}
        <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-[#7C3AED]">
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</time>
          <Link 
            href={`/blog/${slug}`} 
            className="text-[#7C3AED] font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
