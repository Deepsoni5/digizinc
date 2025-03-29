const ContactGrid = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-8 bg-gradient-to-b from-black via-black to-purple-900">
      {/* Main container - responsive by default */}
      <div
        className="
    grid grid-cols-1 gap-6 w-full max-w-5xl bg-opacity-10 shadow-lg rounded-lg p-6 backdrop-blur-md
    sm:grid-cols-3 sm:grid-rows-3 sm:p-10
  "
      >
        {/* Title - full width on mobile, col-span-2 on desktop */}
        <h2
          className="text-3xl font-semibold text-white text-center
      sm:col-span-2 sm:text-4xl sm:text-left sm:-mt-30"
        >
          Get in <span className="text-purple-400">touch</span>
        </h2>

        {/* Office - appears second on mobile */}
        <div className="text-white sm:col-start-1 sm:row-start-2 sm:-mt-25">
          <p className="text-gray-300 text-sm">Office</p>
          <p className="text-sm text-white">Malakpet</p>
          <p className="text-sm text-white">Hyderabad</p>
          <hr className="border-white w-full h-[2px] my-3 sm:w-[120px]" />
        </div>

        {/* Email - appears third on mobile */}
        <div className="text-white sm:col-start-1 sm:row-start-3 sm:-mt-20">
          <p className="text-gray-300 text-sm">Email</p>
          <p className="text-sm text-purple-300 underline break-all sm:break-normal">
            hey@digizinc.com
          </p>
        </div>

        {/* Phone - optimized grid for mobile */}
        <div className="text-white sm:col-start-2 sm:row-span-2 sm:-mt-25">
          <p className="text-gray-300 text-sm">Phone</p>
          <div className="grid grid-cols-2 gap-x-4 sm:block">
            <div>
              <p className="text-sm text-gray mt-3">INDIA</p>
              <p className="text-sm text-white mt-2">+91 97015 63362</p>
            </div>
            <div>
              <p className="text-sm text-gray mt-3">USA</p>
              <p className="text-sm text-white mt-2">+1 (408) 741 6969</p>
            </div>
            <div className="col-span-2 sm:block">
              <p className="text-sm text-gray mt-3">DUBAI</p>
              <p className="text-sm text-white mt-2">0509323813</p>
            </div>
          </div>
        </div>

        {/* Image - appears last on mobile */}
        <div className="flex justify-center items-center sm:col-start-3 sm:row-span-3 sm:-mt-50">
          <img
            src="/sky.jpg"
            alt="City View"
            className="w-full max-w-[250px] h-auto rounded-lg shadow-lg sm:w-[250px] sm:h-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactGrid;
