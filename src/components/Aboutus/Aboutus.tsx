import FooterSection from "../FooterSection/FooterSection";
import Navigation from "../Navigation/Navigation";
import State from "../Aboutus/State";
import MessageButton from "../Message/MessageButton";

const steps = [
  { step: "STEP 01", title: "Discover" },
  { step: "STEP 02", title: "Strategy" },
  { step: "STEP 03", title: "Execution" },
  { step: "STEP 04", title: "Growth" },
];
const AboutUs = () => {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-x-hidden"
      style={{
        background: "url('/about_us.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navigation />

      {/* Header Section */}
      <header className="text-center py-8 sm:py-10 mt-22 sm:mt-25 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white px-2">
          We are <span className="text-[#FF2FD2]">Zincnites</span>
        </h1>
        <div className="mt-2 sm:mt-3">
          <p className="text-lg sm:text-xl md:text-2xl text-white">
            We Craft digital stories that spark
          </p>
          <p className="text-base sm:text-lg md:text-lg font-semibold text-[#AB2FFF] mt-1">
            connections and drive growth
          </p>
        </div>
      </header>

      {/* Info Section */}
      <section
        className="w-full max-w-[950px] min-h-[300px] sm:h-[400px] border border-gray-500 rounded-2xl p-5 sm:p-6 shadow-lg backdrop-blur-md text-white mt-5 mx-2 sm:mx-0"
        style={{
          backgroundImage: "url('/Rectangle_57.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            At <span className="text-pink-500 font-semibold">DigiZinc</span>, we
            bring together creativity, strategy, and innovation to craft
            compelling digital experiences.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Whether it's visual identity, social media campaigns, performance
            marketing, or high-converting creatives, we tailor solutions that
            resonate with your audience.
          </p>
        </div>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mt-5 sm:mt-6">
          Our team of forward-thinking creatives is committed to pushing
          boundaries and helping brands stand out.
        </p>
      </section>

      <State />

      {/* How We Work Section */}
      <section className="w-full flex flex-col items-center py-8 sm:py-16 px-2 sm:px-6 text-white">
        <div className="relative w-full flex justify-center">
          <img
            src="/quotations.png"
            alt="Quote"
            className="absolute w-12 h-12 sm:w-16 sm:h-16 left-2 sm:left-10 md:left-20 top-0 opacity-80"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <span className="text-white">How </span>
            <span className="text-pink-500">We</span>
            <span className="text-white"> Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 w-full px-2 sm:px-0">
          {steps.map((item, index) => (
            <div
              key={index}
              className="w-full h-40 sm:h-64 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg border border-gray-700 hover:scale-[1.02] transition-all"
              style={{
                backgroundImage: "url('/Rectangle_115.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="text-sm sm:text-base text-pink-500 font-bold">
                {item.step}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold mt-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Achievement Section */}
      <section className="w-full max-w-[950px] min-h-[400px] sm:h-[500px] border border-gray-500 rounded-2xl p-5 sm:p-6 shadow-lg backdrop-blur-md text-white mt-5 mx-2 sm:mx-0">
        <div className="relative w-full flex justify-center mb-6">
          <img
            src="/quotations.png"
            alt="Quote"
            className="absolute w-12 h-12 sm:w-16 sm:h-16 left-10 sm:left-20 md:left-32 top-0 opacity-80"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            <span className="text-white">Our</span>
            <span className="text-pink-500 ml-2">Achievement</span>
          </h2>
        </div>

        <div className="w-full px-4 md:px-8 lg:px-12 py-8">
          {/* Title Section */}

          {/* Achievement Cards - Mobile: Column, Desktop: Row */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-center">
            {/* First Achievement Card */}
            <div className="w-full lg:w-[45%] bg-gradient-to-br from-purple-900/80 to-black/80 border border-purple-400/50 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                First Brand to Believe in DigiZinc
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                EAOverseas was the first to place their trust in DigiZinc,
                marking the start of our creative journey. Their confidence in
                our vision set the foundation for the innovative and impactful
                design solutions we continue to deliver.
              </p>
            </div>

            {/* Second Achievement Card */}
            <div className="w-full lg:w-[45%] bg-gradient-to-br from-purple-900/80 to-black/80 border border-purple-400/50 rounded-xl p-6 md:p-8 shadow-lg backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                Trusted by Emerging Brands
              </h2>
              <p className="text-white/80 text-sm md:text-base">
                Startups and businesses have trusted DigiZinc for their digital
                presence, and we continue to empower brands with innovative
                design solutions.
              </p>
            </div>
          </div>

          {/* Social Media Links */}
        </div>
      </section>

      <MessageButton />
      <div className="mt-8 sm:mt-12 w-full">
        <FooterSection />
      </div>
    </div>
  );
};

export default AboutUs;
