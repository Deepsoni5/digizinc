import Navigation from "../Navigation/Navigation";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col items-center">
      {/* Background Image */}
      <img
        src="/Rectangle_106.png"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />

      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto mt-40 lg:mt-30 px-4 lg:px-16">
        {/* Left Section - Text Image */}
        <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1 mt-25 lg:mt-0">
          <img
            src="/text.png"
            alt="Text"
            className="w-[80%] sm:w-[60%] lg:w-[50%] xl:w-[80%] object-cover"
          />
        </div>

        {/* Right Section - GIF/Video */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
          <img
            src="/cube.gif"
            alt="Animated Cube"
            className="w-full h-[300px] sm:h-[400px] lg:h-[550px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
