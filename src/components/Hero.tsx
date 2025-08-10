export const Hero = () => {
  return (
    <section className="mt-20 px-4 text-center">
      {/* Badge */}
      <div className="inline-block mb-6 px-4 py-1 bg-blue-100 text-blue-700 font-medium text-sm rounded-full shadow-sm">
        🇮🇳 Built in India • Wallet-as-a-Service
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
        The Indian Cryptocurrency
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent pl-4">
          Revolution
        </span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Create a frictionless wallet from India with just a Google Account.
        Convert your INR into cryptocurrency instantly and securely.
      </p>

      {/* Call-to-actions */}
      <div className="mt-8 flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition">
          Learn More
        </button>
      </div>

      {/* Product Visual */}
      {/* <div className="mt-12 max-w-5xl mx-auto">
        <img
          src="/wallet-preview.png"
          alt="Wallet preview"
          className="rounded-xl shadow-2xl"
        />
      </div> */}
    </section>
  );
};
