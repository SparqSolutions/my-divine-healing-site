import Link from 'next/link';

// This is a placeholder for the blog post data.
// In a real application, you would fetch this data from a CMS or a database.
const getBlogPost = (id: string) => {
  const blogPosts = [
    {
      id: 1,
      title: "Finding Peace in Times of Anxiety: A Christian Perspective",
      content: "This is the full blog post content for 'Finding Peace in Times of Anxiety'. It would contain detailed strategies and biblical references.",
      author: "Divine Healing Therapy",
      date: "March 15, 2024",
      category: "Mental Health",
      readTime: "5 min read",
      image: "/blog-placeholder-1.jpg"
    },
    {
      id: 2,
      title: "The Power of Prayer in Healing Trauma",
      content: "This is the full blog post content for 'The Power of Prayer in Healing Trauma'.",
      author: "Divine Healing Therapy",
      date: "March 10, 2024",
      category: "Trauma Recovery",
      readTime: "7 min read",
      image: "/blog-placeholder-2.jpg"
    },
    {
      id: 3,
      title: "Strengthening Your Marriage Through Biblical Principles",
      content: "This is the full blog post content for 'Strengthening Your Marriage Through Biblical Principles'.",
      author: "Divine Healing Therapy",
      date: "March 5, 2024",
      category: "Relationships",
      readTime: "6 min read",
      image: "/blog-placeholder-3.jpg"
    },
    {
      id: 4,
      title: "Understanding Depression: When Faith Meets Mental Health",
      content: "This is the full blog post content for 'Understanding Depression'.",
      author: "Divine Healing Therapy",
      date: "February 28, 2024",
      category: "Mental Health",
      readTime: "8 min read",
      image: "/blog-placeholder-4.jpg"
    },
    {
      id: 5,
      title: "Forgiveness as a Path to Emotional Freedom",
      content: "This is the full blog post content for 'Forgiveness as a Path to Emotional Freedom'.",
      author: "Divine Healing Therapy",
      date: "February 22, 2024",
      category: "Emotional Healing",
      readTime: "5 min read",
      image: "/blog-placeholder-5.jpg"
    },
    {
      id: 6,
      title: "Parenting with Grace: Christian Approaches to Family Challenges",
      content: "This is the full blog post content for 'Parenting with Grace'.",
      author: "Divine Healing Therapy",
      date: "February 15, 2024",
      category: "Family",
      readTime: "9 min read",
      image: "/blog-placeholder-6.jpg"
    }
  ];
  return blogPosts.find(post => post.id.toString() === id);
};

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Blog post not found</h1>
          <Link href="/blog" className="text-divine-blue hover:underline mt-4 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-divine-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <Link href="/blog" className="text-divine-blue hover:underline">
              ← Back to Blog
            </Link>
          </div>
          
          <div className="h-64 bg-divine-light-blue flex items-center justify-center rounded-lg mb-8">
            <span className="text-divine-blue text-lg font-medium">Blog Image Placeholder</span>
          </div>
          
          <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
            <span className="inline-block px-3 py-1 bg-divine-beige text-divine-blue text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <p>By {post.author}</p>
            <span className="mx-2">•</span>
            <p>{post.date}</p>
          </div>

          <div className="prose lg:prose-xl max-w-none text-gray-700">
            <p>{post.content}</p>
            {/* You can add more detailed blog content here using Markdown or JSX */}
          </div>
        </article>

        <div className="mt-16 text-center">
          <div className="bg-divine-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Discuss this with a Professional
            </h2>
            <p className="text-gray-700 mb-6">
              If this post resonates with you, consider booking a session to explore these topics further in a supportive, faith-based environment.
            </p>
            <Link href="/booking" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 