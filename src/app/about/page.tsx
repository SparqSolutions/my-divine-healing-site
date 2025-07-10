import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Divine Healing Therapy
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Where professional excellence meets the transformative power of faith
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              At Divine Healing Therapy, we believe that true healing encompasses both the mind and the spirit. 
              Our mission is to provide professional, compassionate therapy services that honor God while 
              addressing the complex emotional and psychological needs of our clients.
            </p>
            <p className="text-gray-700 mb-6">
              We integrate evidence-based therapeutic approaches with biblical wisdom, creating a unique 
              healing environment where faith and psychology work together to restore wholeness and hope.
            </p>
            <div className="bg-divine-light-blue p-6 rounded-lg">
              <p className="text-gray-700 italic text-center">
                &quot;He heals the brokenhearted and binds up their wounds.&quot; - Psalm 147:3
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-lg bg-divine-blue flex items-center justify-center shadow-lg">
                <Image
                  src="/logoImage.png"
                  alt="Divine Healing Therapy - About Us"
                  width={320}
                  height={320}
                  className="rounded-lg object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjODdDRUVCIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRkZGRkZGIj5BYm91dCBVcyBJbWFnZTwvdGV4dD4KPC9zdmc+"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Your Therapist
          </h2>
          
          <div className="bg-divine-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex justify-center lg:justify-start">
                <div className="w-64 h-64 rounded-full bg-divine-light-blue flex items-center justify-center">
                  <Image
                    src="/avatar.png"
                    alt="Professional Therapist"
                    width={256}
                    height={256}
                    className="rounded-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjODdDRUVCIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjRkZGRkZGIj5UaGVyYXBpc3Q8L3RleHQ+Cjwvc3ZnPg=="
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">[Therapist Name], LPC</h3>
                <p className="text-gray-700">
                  <strong>Licensed Professional Counselor</strong><br />
                  Master of Arts in Clinical Psychology<br />
                  Specialization in Christian Counseling
                </p>
                
                <p className="text-gray-700">
                  With over [X] years of experience in mental health counseling, [Name] is passionate about 
                  helping individuals and couples find healing through the integration of professional 
                  therapy and biblical principles. [He/She] believes that every person is created in the 
                  image of God and deserves to experience wholeness and peace.
                </p>
                
                <p className="text-gray-700">
                  [Name] has extensive experience working with anxiety, depression, trauma, relationship 
                  issues, and spiritual concerns. [He/She] provides a safe, non-judgmental environment 
                  where clients can explore their thoughts and feelings while discovering God's love and 
                  purpose for their lives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-divine-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Education & Credentials</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Licensed Professional Counselor (LPC) - [State]</li>
              <li>• Master of Arts in Clinical Psychology - [University]</li>
              <li>• Bachelor of Science in Psychology - [University]</li>
              <li>• Certified Christian Counselor - [Organization]</li>
              <li>• Trauma-Informed Care Certification</li>
              <li>• Marriage and Family Therapy Certification</li>
            </ul>
          </div>
          
          <div className="bg-divine-beige p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h3>
            <ul className="space-y-3 text-gray-700">
              <li>• Anxiety and Depression</li>
              <li>• Trauma and PTSD</li>
              <li>• Marriage and Relationship Counseling</li>
              <li>• Grief and Loss</li>
              <li>• Faith-Based Counseling</li>
              <li>• Life Transitions and Stress</li>
              <li>• Addiction Recovery Support</li>
            </ul>
          </div>
        </div>

        <div className="text-center mb-16">
          <div className="bg-divine-light-blue p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Therapeutic Approach
            </h3>
            <p className="text-gray-700 mb-6">
              We employ a holistic approach that combines proven therapeutic methods with biblical wisdom. 
              Our sessions may include elements of Cognitive Behavioral Therapy (CBT), Solution-Focused 
              Therapy, and Christian counseling principles, all tailored to meet your unique needs and faith journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">🧠</div>
                <h4 className="font-semibold text-gray-900">Evidence-Based</h4>
                <p className="text-sm text-gray-600">Professional therapeutic methods</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✝️</div>
                <h4 className="font-semibold text-gray-900">Faith-Centered</h4>
                <p className="text-sm text-gray-600">Biblical principles and spiritual care</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">❤️</div>
                <h4 className="font-semibold text-gray-900">Compassionate</h4>
                <p className="text-sm text-gray-600">Safe, non-judgmental environment</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-divine-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-gray-700 mb-6">
              Take the first step toward restoration and hope. We&apos;re here to walk alongside you 
              as you discover God&apos;s plan for your healing and wholeness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/schedule"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}