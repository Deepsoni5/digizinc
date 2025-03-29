import CountUp from "react-countup";

const StateSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#7d18c0] to-[#754f8e] text-white py-8 md:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Stats Item 1 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200">
              <CountUp start={0} end={5} duration={3} suffix="+" />
            </h2>
            <p className="text-sm md:text-base uppercase tracking-widest font-medium text-purple-100">
              Years of Excellence
            </p>
          </div>
        </div>

        {/* Stats Item 2 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200">
              <CountUp start={0} end={1000} duration={3} suffix="+" />
            </h2>
            <p className="text-sm md:text-base uppercase tracking-widest font-medium text-purple-100">
              Hours Invested
            </p>
          </div>
        </div>

        {/* Stats Item 3 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:scale-105 transition-all duration-300 border border-white/20">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200">
              <CountUp start={0} end={20} duration={3} suffix="+" />
            </h2>
            <p className="text-sm md:text-base uppercase tracking-widest font-medium text-purple-100">
              Concepts Delivered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
