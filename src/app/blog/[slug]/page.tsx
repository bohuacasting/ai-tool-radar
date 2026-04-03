import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '../posts';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} | AIToolRadar`,
    description: post.excerpt,
  };
}

export default async function BlogArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-[#7C3AED] hover:underline mb-8"
      >
        ← Back to Blog
      </Link>
      
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <span className="bg-[#7C3AED] text-white px-3 py-1 rounded-full">
            {post.category}
          </span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
      </header>

      <div 
        className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#7C3AED] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:my-6 prose-li:my-2 prose-table:my-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
