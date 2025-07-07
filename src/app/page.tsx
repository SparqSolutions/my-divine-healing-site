import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-divine-white">
      <section className="relative">
        <Image 
          src="/beachscape.jpg"
          alt="Beach landscape"
          width={1408}
          height={768}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute top-0 left-0 right-0 h-3/4 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-white to-transparent"></div>
        <div className="absolute inset-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-divine-navy mb-6">
                  Divine Healing Therapy
                </h1>
                <p className="text-xl text-gray-800 mb-6">
                  "Divine Healing Therapy because you can have Jesus & a therapist..."
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  Personalized therapy focusing on trauma, anxiety, and emotional healing through 
                  transparent fee structure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="/schedule"
                    className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
                  >
                    Schedule a Session
                  </Link>
                  <Link 
                    href="/about"
                    className="border-2 border-divine-blue text-divine-blue px-8 py-3 rounded-lg font-bold hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-72 h-72 rounded-full bg-divine-light-blue flex items-center justify-center">
                    <Image
                      src="/avatar.png"
                      alt="Professional Therapist - Divine Healing Therapy"
                      width={280}
                      height={280}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="bg-divine-white/80 p-4 rounded-lg shadow-lg text-center mt-4">
                  <div className="flex items-center justify-center text-divine-blue">
                    <span className="text-2xl mr-2">✝</span>
                    <span className="font-semibold">Faith-Based Healing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-divine-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Comprehensive Healing Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Divine Healing Therapy follows a structured, personalized approach to ensure 
              your healing journey is both effective and aligned with your faith.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-divine-white/90 p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Initial Assessment</h3>
              <p className="text-gray-700 text-sm">
                Comprehensive evaluation of your individual needs and goals
              </p>
            </div>
            
            <div className="bg-divine-white/90 p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Custom Treatment Plan</h3>
              <p className="text-gray-700 text-sm">
                Tailored therapy approach designed specifically for your healing journey
              </p>
            </div>
            
            <div className="bg-divine-white/90 p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Guided Therapy</h3>
              <p className="text-gray-700 text-sm">
                Regular sessions combining professional therapy with spiritual guidance
              </p>
            </div>
            
            <div className="bg-divine-white/90 p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-3xl mb-4">4️⃣</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Progress Monitoring</h3>
              <p className="text-gray-700 text-sm">
                Ongoing assessment and adjustment of your treatment plan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-divine-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Specialized Therapy Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional counseling that integrates faith and evidence-based practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-divine-white p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3">Trauma & Anxiety</h3>
              <p className="text-gray-600">
                Specialized treatment for trauma and anxiety disorders using evidence-based 
                therapeutic approaches integrated with Christian principles.
              </p>
            </div>
            
            <div className="bg-divine-white p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-semibold mb-3">Emotional Healing</h3>
              <p className="text-gray-600">
                Comprehensive emotional healing sessions that address deep-rooted issues 
                through faith-based therapeutic interventions.
              </p>
            </div>
            
            <div className="bg-divine-white p-6 rounded-lg text-center shadow-md transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-3">Culturally Responsive Care</h3>
              <p className="text-gray-600">
                Trauma-informed therapy that respects and incorporates your cultural 
                background and personal faith journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-divine-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to schedule your initial assessment and take the first step 
              toward healing through faith and professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-divine-beige p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-3">📞</span>
                  <span>(888) 747-4325</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-3">✉️</span>
                  <span>shykita@mydivinehealingtherapy.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-divine-light-blue p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Availability</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-3">📅</span>
                  <span>Six days a week</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-3">💰</span>
                  <span>Transparent fee structure</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-3">📋</span>
                  <span>Good Faith Estimates provided</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/schedule"
              className="bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors"
            >
              Schedule Your Initial Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
