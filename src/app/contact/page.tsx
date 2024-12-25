const contactUs=()=>{
    return(
       
        <div className=" flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md mx-4 bg-purple-300 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">
            Contact
          </h2>
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Your full name"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Your email"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Your phone number"
              />
            </div>
            {/* Feedback */}
            <div>
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                rows= {4}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500"
                placeholder="Your feedback"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit" 
                className="w-full bg-purple-600 text-white font-medium py-2 px-4 rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default contactUs;