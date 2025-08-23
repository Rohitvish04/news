export const ContactPage = () => (
  <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-fade-in">
    <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 md:p-12 max-w-2xl mx-auto border border-gray-200">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-4 md:mb-6">Contact Us</h2>
      <p className="text-center text-gray-600 mb-6 md:mb-8 text-sm sm:text-base">
        We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.
      </p>
      <form className="space-y-4 md:space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-800 font-semibold mb-2 text-sm">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 text-sm">Email</label>
          <input type="email" id="email" className="w-full px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm" placeholder="your.email@example.com" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-800 font-semibold mb-2 text-sm">Message</label>
          <textarea id="message" rows="5" className="w-full px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-sm" placeholder="Your message..."></textarea>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
          Send Message
        </button>
      </form>
    </div>
  </section>
);