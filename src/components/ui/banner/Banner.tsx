const Banner = () => {
  return (
    <div className="relative bg-gray-900 w-full h-[400px]">
      {/* Centered Gradient Background */}
      <div className="absolute inset-y-20 inset-x-0 w-56 h-56 blur-3xl opacity-30 rounded-full rotate-45 bg-gradient-to-b from-pink-600 to-purple-600  mx-auto"></div>

      {/* Content (Title, Description, Button) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Your Title Here</h1>
        <p className="text-lg mb-6">
          Your description goes here. This can be a brief explanation or some
          content related to the banner.
        </p>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
