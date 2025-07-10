export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Austin, TX",
      text: "Divine Healing Therapy has been a true blessing in my life. The combination of professional counseling with Christian values helped me find peace during my darkest moments. I felt truly heard and supported.",
      rating: 5,
    },
    {
      name: "Michael & Jennifer R.",
      location: "Phoenix, AZ",
      text: "Our marriage was struggling, but through the faith-based couples counseling, we rediscovered our love for each other and our shared faith. The guidance we received was both practical and spiritually enriching.",
      rating: 5,
    },
    {
      name: "David L.",
      location: "Denver, CO",
      text: "I was skeptical about online therapy, but the sessions were incredibly effective. The integration of biblical principles with therapeutic techniques provided the healing I needed. God truly works through this ministry.",
      rating: 5,
    },
    {
      name: "Amanda K.",
      location: "Nashville, TN",
      text: "After years of anxiety and depression, I finally found hope through Divine Healing Therapy. The therapist's compassionate approach and faith-centered methods helped me reclaim my life and strengthen my relationship with Christ.",
      rating: 5,
    },
    {
      name: "Robert P.",
      location: "San Antonio, TX",
      text: "The individual counseling sessions helped me work through childhood trauma with grace and understanding. I appreciate how Scripture was naturally woven into our conversations, bringing deep healing to my soul.",
      rating: 5,
    },
    {
      name: "Lisa & Tom H.",
      location: "Charlotte, NC",
      text: "We've been married for 15 years, but we felt disconnected. The couples therapy helped us rebuild our foundation on Christ and communicate with love and respect. Our marriage is stronger than ever.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Testimonials
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from those who have experienced God's healing through our professional Christian counseling services.
          </p>
          <div className="mt-8 flex justify-center items-center text-divine-blue">
            <span className="text-2xl mr-2">✝</span>
            <span className="text-lg font-semibold">"He heals the brokenhearted and binds up their wounds." - Psalm 147:3</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-divine-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-divine-light-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-divine-blue font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-divine-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-gray-700 mb-6">
              Join the many who have found hope, healing, and restoration through our faith-based therapeutic approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/schedule"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Schedule Your Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}