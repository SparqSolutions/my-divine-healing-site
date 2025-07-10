'use client';

import { useState } from 'react';

export default function Schedule() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your request! We will contact you soon to confirm your appointment.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Schedule Your Session
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Take the first step toward healing and restoration. Book your confidential online therapy session today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-divine-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Your Appointment</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-divine-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-divine-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-divine-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700 mb-2">
                  Session Type *
                </label>
                <select
                  id="sessionType"
                  name="sessionType"
                  required
                  value={formData.sessionType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-divine-blue focus:border-transparent"
                >
                  <option value="">Select a session type</option>
                  <option value="individual">Individual Counseling</option>
                  <option value="couples">Couples Counseling</option>
                  <option value="family">Family Therapy</option>
                  <option value="consultation">Initial Consultation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-divine-blue focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-divine-blue focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please share anything you&apos;d like us to know about your needs or concerns..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-divine-blue focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Submit Appointment Request
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-divine-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                📅 Google Calendar Integration
              </h3>
              <p className="text-gray-700 mb-4">
                For your convenience, we integrate with Google Calendar to schedule and manage your appointments seamlessly.
              </p>
              <div className="bg-divine-beige p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Note:</strong> Google Calendar integration will be activated after your initial consultation. 
                  This allows for automated scheduling, reminders, and easy rescheduling of future sessions.
                </p>
              </div>
            </div>

            <div className="bg-divine-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🕐 Session Information
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• <strong>Individual Sessions:</strong> 50 minutes</li>
                <li>• <strong>Couples Sessions:</strong> 60 minutes</li>
                <li>• <strong>Initial Consultation:</strong> 30 minutes (complimentary)</li>
                <li>• <strong>Platform:</strong> Secure video conferencing</li>
                <li>• <strong>Cancellation:</strong> 24-hour notice required</li>
              </ul>
            </div>

            <div className="bg-divine-light-blue p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🙏 Prayer Before Your Session
              </h3>
              <p className="text-gray-700 mb-4">
                &quot;Come to me, all you who are weary and burdened, and I will give you rest.&quot; - Matthew 11:28
              </p>
              <p className="text-gray-700">
                We begin each session with a brief prayer, inviting God&apos;s presence into our time together. 
                This sacred space allows for authentic healing and spiritual growth.
              </p>
            </div>

            <div className="bg-divine-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                📞 Contact Information
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> info@divinehealingtherapy.com</p>
                <p><strong>Emergency:</strong> If you&apos;re experiencing a crisis, please call 988 (Suicide & Crisis Lifeline)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}