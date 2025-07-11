import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Finding Peace in Times of Anxiety: A Christian Perspective",
      excerpt: "Discover how faith can be your anchor during anxious moments, and learn practical biblical strategies for managing worry and fear.",
      author: "Divine Healing Therapy",
      date: "March 15, 2024",
      category: "Mental Health",
      readTime: "5 min read",
      image: "/blog/blogPic1.jpg"
    },
    {
      id: 2,
      title: "The Power of Prayer in Healing Trauma",
      excerpt: "Explore how prayer and professional therapy work together to bring healing from past wounds and traumatic experiences.",
      author: "Divine Healing Therapy",
      date: "March 10, 2024",
      category: "Trauma Recovery",
      readTime: "7 min read",
      image: "/blog/blogPic2.jpg"
    },
    {
      id: 3,
      title: "Strengthening Your Marriage Through Biblical Principles",
      excerpt: "Learn how couples can build a stronger, more loving relationship by applying timeless wisdom from Scripture.",
      author: "Divine Healing Therapy",
      date: "March 5, 2024",
      category: "Relationships",
      readTime: "6 min read",
      image: "/blog/blogPic3.jpg"
    },
    {
      id: 4,
      title: "Understanding Depression: When Faith Meets Mental Health",
      excerpt: "Breaking down the stigma around depression in Christian communities and finding hope through faith-based healing.",
      author: "Divine Healing Therapy",
      date: "February 28, 2024",
      category: "Mental Health",
      readTime: "8 min read",
      image: "/blog/blogPic4.jpg"
    },
    {
      id: 5,
      title: "Forgiveness as a Path to Emotional Freedom",
      excerpt: "Discover how biblical forgiveness can release you from the burden of resentment and open doors to healing.",
      author: "Divine Healing Therapy",
      date: "February 22, 2024",
      category: "Emotional Healing",
      readTime: "5 min read",
      image: "/blog/blogPic5.jpg"
    },
    {
      id: 6,
      title: "Parenting with Grace: Christian Approaches to Family Challenges",
      excerpt: "Navigate the complexities of modern parenting while maintaining Christian values and fostering healthy family relationships.",
      author: "Divine Healing Therapy",
      date: "February 15, 2024",
      category: "Family",
      readTime: "9 min read",
      image: "/blog/blogPic0.jpg"
    }
  ];

  const categories = ["All", "Mental Health", "Relationships", "Trauma Recovery", "Emotional Healing", "Family"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Healing & Hope Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Insights, encouragement, and practical guidance for your journey toward healing and spiritual growth.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-divine-white text-divine-blue border-2 border-divine-blue rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-divine-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-divine-beige text-divine-blue text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <p>{post.author}</p>
                    <p>{post.date}</p>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-divine-blue font-semibold hover:text-blue-600 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-divine-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-700 mb-6">
              Receive weekly encouragement, practical tips, and new blog posts delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-divine-blue focus:border-transparent"
              />
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-divine-light-blue p-6 rounded-lg">
            <div className="flex items-center justify-center text-divine-blue mb-2">
              <span className="text-2xl mr-2">✝</span>
              <span className="text-lg font-semibold">&quot;Trust in the Lord with all your heart and lean not on your own understanding.&quot; - Proverbs 3:5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}