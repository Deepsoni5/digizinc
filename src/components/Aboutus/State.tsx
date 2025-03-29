"use client";
import CountUp from "react-countup";

const State = () => {
  const stats = [
    { value: 5, label: "Years" },
    { value: 1000, label: "Hours Invested" },
    { value: 20, label: "Concepts delivered" },
  ];

  return (
    <section className="flex justify-center mt-8 px-4 sm:px-0">
      <div
        className="w-full max-w-[950px] min-h-[100px] border border-gray-500 rounded-xl p-4 sm:p-10 shadow-lg backdrop-blur-md text-white flex flex-wrap justify-center sm:justify-around items-center gap-6 sm:gap-x-10 relative"
        style={{
          backgroundImage: "url('/Rectangle_56.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center min-w-[120px] sm:min-w-0"
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              <CountUp start={0} end={stat.value} duration={3} suffix="+" />
            </p>
            <p className="text-sm sm:text-base md:text-lg opacity-80 mt-1 sm:mt-2 text-white">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default State;
