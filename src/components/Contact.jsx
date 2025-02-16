import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert("Message Sent Successfully");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    console.log(formData);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif text-amber-900 mb-8 text-center">
          Contact Us
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-amber-900 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-amber-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-amber-900 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-amber-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                className="w-full px-4 py-2 border border-amber-200 rounded-md focus:outline-none focus:border-amber-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-900 text-white py-3 rounded-md hover:bg-amber-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-serif text-amber-900 mb-2">Location</h3>
            <p className="text-gray-600">Bavla, Ahmedabad<br />Gujarat, India</p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-amber-900 mb-2">Email</h3>
            <p className="text-gray-600">itisessence@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-serif text-amber-900 mb-2">Phone</h3>
            <p className="text-gray-600">8849813209</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;