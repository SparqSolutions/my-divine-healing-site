export default function Services() {
  const services = [
    {
      title: "Trauma Therapy",
      icon: "🧠",
      description: "Specialized treatment for trauma using evidence-based approaches integrated with Christian principles.",
      details: [
        "PTSD and Complex Trauma Recovery",
        "Childhood Trauma Healing",
        "Abuse and Neglect Recovery",
        "Accident and Injury Trauma",
        "Grief and Loss Processing",
        "Spiritual Trauma Recovery"
      ],
      duration: "50 minutes",
      price: "Transparent fee structure"
    },
    {
      title: "Anxiety Treatment",
      icon: "❤️",
      description: "Comprehensive anxiety treatment addressing various anxiety disorders through therapeutic and spiritual support.",
      details: [
        "Generalized Anxiety Disorder",
        "Social Anxiety and Phobias",
        "Panic Disorder Treatment",
        "Obsessive-Compulsive Disorder",
        "Post-Traumatic Stress Disorder",
        "Faith-Based Anxiety Management"
      ],
      duration: "50 minutes",
      price: "Good Faith Estimates provided"
    },
    {
      title: "Emotional Healing",
      icon: "🌟",
      description: "Deep emotional healing sessions addressing depression, relationship issues, and life transitions.",
      details: [
        "Depression and Mood Disorders",
        "Relationship and Attachment Issues",
        "Life Transition Support",
        "Self-Esteem and Identity Work",
        "Forgiveness and Healing",
        "Spiritual Growth and Direction"
      ],
      duration: "50 minutes",
      price: "Contact for pricing details"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Specialized Therapy Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Personalized therapy focusing on trauma, anxiety, and emotional healing through 
            trauma-informed, culturally responsive care
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-divine-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
              </div>
              
              <p className="text-gray-700 mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Address:</h3>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-divine-blue mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Duration:</span> {service.duration}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Pricing:</span> {service.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="bg-divine-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Our Therapeutic Approach
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-divine-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📖</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Biblical Integration</h3>
                <p className="text-sm text-gray-600">Scripture-based wisdom woven throughout the therapeutic process</p>
              </div>
              
              <div className="text-center">
                <div className="bg-divine-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Evidence-Based</h3>
                <p className="text-sm text-gray-600">Proven therapeutic methods including CBT, DBT, and EMDR</p>
              </div>
              
              <div className="text-center">
                <div className="bg-divine-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Compassionate Care</h3>
                <p className="text-sm text-gray-600">Safe, non-judgmental environment for healing and growth</p>
              </div>
              
              <div className="text-center">
                <div className="bg-divine-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized</h3>
                <p className="text-sm text-gray-600">Tailored treatment plans that honor your unique journey</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-divine-beige rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Insurance & Payment Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Accepted</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Most major insurance plans</li>
                  <li>• Medicare and Medicaid</li>
                  <li>• Employee Assistance Programs (EAP)</li>
                  <li>• Health Savings Accounts (HSA)</li>
                  <li>• Flexible Spending Accounts (FSA)</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Note:</strong> Please contact us to verify your specific insurance coverage.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Insurance co-pays</li>
                  <li>• Self-pay options available</li>
                  <li>• Sliding scale fees for qualifying individuals</li>
                  <li>• Payment plans available</li>
                  <li>• Credit card and check payments accepted</li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  <strong>Financial Assistance:</strong> We believe everyone deserves access to quality mental health care.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-divine-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-gray-700 mb-6">
              Contact us today to schedule a consultation and learn more about how we can support you 
              on your path to wholeness and peace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/schedule"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
            
            <div className="mt-8 p-4 bg-divine-light-blue rounded-lg">
              <p className="text-gray-700 italic">
                &quot;Divine Healing Therapy because you can have Jesus & a therapist...&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}