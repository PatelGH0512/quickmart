const NewsLetter = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-green-100 to-green-200
 space-y-4 mt-28 pb-20 pt-20 px-4"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
        Never Miss a Deal!
      </h1>

      {/* Subheading */}
      <p className="text-md md:text-lg text-gray-500 max-w-xl">
        Subscribe and be the first to know about our newest arrivals, exclusive
        offers, and flash sales!
      </p>

      {/* Newsletter Form */}
      <form className="flex w-full max-w-2xl mt-6">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="flex-1 rounded-l-xl border border-gray-300 px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/60 shadow-sm"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-r-xl transition-all shadow-md hover:shadow-lg"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
