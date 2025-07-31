import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--tiffany-blue)] relative">
      <section className="relative py-8 px-4 pt-0">
        <div className="fixed inset-0 z-0 overflow-hidden">
          <Image 
            src="/beach2.jpg"
            alt="Beach landscape"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 via-transparent to-blue-100/40"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto pt-[300px] md:pt-[500px]">

          <div className="flow-root">
            <div className="p-4 md:p-6">
              <div className="text-left text-5xl text-gray-800">
              <h2 className="text-4xl md:text-6xl font-bold text-divine-navy mb-4">Shy&apos;s Story</h2>
              
              {/* Mobile Layout - Avatar after text */}
              <div className="block md:hidden">
                <p className="mb-6 text-lg">
                  My journey to creating Divine Healing Therapy began with a simple belief: that true healing encompasses mind, body, and spirit. As a therapist, I saw so many people who felt they had to choose between their faith and their mental health care. I wanted to create a space where they didn&apos;t have to.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/avatar.png"
                    alt="Shy, owner of Divine Healing Therapy"
                    width={150}
                    height={150}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Desktop Layout - Avatar floated right */}
              <div className="hidden md:block">
                <Image
                  src="/avatar.png"
                  alt="Shy, owner of Divine Healing Therapy"
                  width={200}
                  height={200}
                  className="float-right ml-6 mb-4 rounded-full object-cover"
                />
                <p className="mb-4">
                  My journey to creating Divine Healing Therapy began with a simple belief: that true healing encompasses mind, body, and spirit. As a therapist, I saw so many people who felt they had to choose between their faith and their mental health care. I wanted to create a space where they didn&apos;t have to.
                </p>
              </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link 
              href="/schedule"
              className="bg-[var(--lilac)] text-[var(--mardi-gras)] px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg hover:bg-[var(--magenta)] transition-colors text-center"
            >
              Schedule a Session
            </Link>
            <Link 
              href="/about"
              className="border-2 border-divine-blue text-[var(--mardi-gras)] px-6 sm:px-8 py-3 rounded-lg font-bold text-base sm:text-lg hover:bg-[var(--magenta)] hover:text-white transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white relative z-20">
        <div className="absolute inset-0 bg-white"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 bg-white p-8 rounded-lg shadow-2xl border-4 border-divine-navy">
            <h2 className="text-2xl sm:text-3xl font-bold text-divine-navy mb-4 sm:mb-6 text-center">
              Our Comprehensive Healing Process
            </h2>
            <p className="text-base sm:text-lg text-divine-navy max-w-3xl ml-auto text-right">
              Divine Healing Therapy follows a structured, personalized approach to ensure 
              your healing journey is both effective and aligned with your faith.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-2xl border-4 border-divine-navy transform hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">1️⃣</div>
              <h3 className="text-base sm:text-lg font-semibold text-divine-navy mb-2 sm:mb-3">Initial Assessment</h3>
              <p className="text-divine-navy text-sm">
                Comprehensive evaluation of your individual needs and goals
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-2xl border-4 border-divine-navy transform hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">2️⃣</div>
              <h3 className="text-base sm:text-lg font-semibold text-divine-navy mb-2 sm:mb-3">Custom Treatment Plan</h3>
              <p className="text-divine-navy text-sm">
                Tailored therapy approach designed specifically for your healing journey
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-2xl border-4 border-divine-navy transform hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">3️⃣</div>
              <h3 className="text-base sm:text-lg font-semibold text-divine-navy mb-2 sm:mb-3">Guided Therapy</h3>
              <p className="text-divine-navy text-sm">
                Regular sessions combining professional therapy with spiritual guidance
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-2xl border-4 border-divine-navy transform hover:scale-105 transition-transform">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">4️⃣</div>
              <h3 className="text-base sm:text-lg font-semibold text-divine-navy mb-2 sm:mb-3">Progress Monitoring</h3>
              <p className="text-divine-navy text-sm">
                Ongoing assessment and adjustment of your treatment plan
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white relative z-20">
        <div className="absolute inset-0 bg-white"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 bg-white p-8 rounded-lg shadow-2xl border-4 border-divine-navy">
            <h2 className="text-2xl sm:text-3xl font-bold text-divine-navy mb-4 text-center">
              Specialized Therapy Services
            </h2>
            <p className="text-base sm:text-lg text-divine-navy max-w-3xl ml-auto text-right">
              Professional counseling that integrates faith and evidence-based practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-2xl border-4 border-divine-navy transform hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🧠</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-divine-navy">Trauma & Anxiety</h3>
              <p className="text-divine-navy text-sm sm:text-base">
                Specialized treatment for trauma and anxiety disorders using evidence-based 
                therapeutic approaches integrated with Christian principles.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-2xl border-4 border-divine-navy transform hover:scale-105 transition-transform">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">❤️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-divine-navy">Emotional Healing</h3>
              <p className="text-divine-navy text-sm sm:text-base">
                Comprehensive emotional healing sessions that address deep-rooted issues 
                through faith-based therapeutic interventions.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg text-center shadow-xl border-2 border-divine-navy/20 transform hover:scale-105 transition-transform sm:col-span-2 lg:col-span-1">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🌟</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-divine-navy">Culturally Responsive Care</h3>
              <p className="text-divine-navy text-sm sm:text-base">
                Trauma-informed therapy that respects and incorporates your cultural 
                background and personal faith journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white relative z-20">
        <div className="absolute inset-0 bg-white"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8 sm:mb-12 bg-white p-8 rounded-lg shadow-2xl border-4 border-divine-navy">
            <h2 className="text-2xl sm:text-3xl font-bold text-divine-navy mb-4 text-center">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-base sm:text-lg text-divine-navy mb-6 sm:mb-8 max-w-3xl ml-auto text-right">
              Contact us today to schedule your initial assessment and take the first step 
              toward healing through faith and professional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border-2 border-divine-navy/20 transform hover:scale-105 transition-transform">
              <h3 className="text-lg sm:text-xl font-semibold text-divine-navy mb-4">Contact Information</h3>
              <div className="space-y-3 sm:space-y-4 text-divine-navy">
                <div className="flex items-center justify-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📞</span>
                  <span className="text-sm sm:text-base">(888) 747-4325</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">✉️</span>
                  <span className="text-sm sm:text-base break-all">shykita@mydivinehealingtherapy.com</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl border-2 border-divine-navy/20 transform hover:scale-105 transition-transform">
              <h3 className="text-lg sm:text-xl font-semibold text-divine-navy mb-4">Availability</h3>
              <div className="space-y-3 sm:space-y-4 text-divine-navy">
                <div className="flex items-center justify-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📅</span>
                  <span className="text-sm sm:text-base">Six days a week</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">💰</span>
                  <span className="text-sm sm:text-base">Transparent fee structure</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📋</span>
                  <span className="text-sm sm:text-base text-center">Good Faith Estimates provided</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/schedule"
              className="bg-[var(--lilac)] text-[var(--mardi-gras)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-[var(--magenta)] transition-colors"
            >
              Schedule Your Initial Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
