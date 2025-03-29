const Empower = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center min-h-[90vh] md:min-h-[90vh] flex items-center justify-center overflow-x-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 50) 0%, rgba(0, 0, 0, 0) 30%), url('/us.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Rocket - Hidden on smallest screens, appears on medium */}
      <img
        src="/Rocket_1.png"
        alt="Left Image"
        className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-[100px] md:w-[150px] h-auto"
      />

      {/* Folder - Position adjusted for mobile */}
      <img
        src="/folder.png"
        alt="Right Image"
        className="absolute right-0 top-[60%] md:top-3/4 transform -translate-y-1/2 w-[100px] md:w-[150px] h-auto"
      />

      {/* Stars - Sizes and positions adjusted for mobile */}
      <img
        src="/star.png"
        alt="star"
        className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-[8px] md:w-[10px] h-auto"
      />
      <img
        src="/star.png"
        alt="star"
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 w-[20px] md:w-[30px] h-auto"
      />
      <img
        src="/star.png"
        alt="star"
        className="absolute right-8 md:right-20 top-[65%] md:top-3/4 transform -translate-y-1/2 w-[15px] md:w-[20px] h-auto"
      />
      <img
        src="/star.png"
        alt="star"
        className="absolute left-8 md:left-20 top-[65%] md:top-3/4 transform -translate-y-1/2 w-[15px] md:w-[20px] h-auto"
      />
      <img
        src="/star.png"
        alt="star"
        className="absolute left-8 md:left-20 top-8 md:top-10 transform -translate-y-1/2 w-[20px] md:w-[30px] h-auto"
      />

      {/* Text Content */}
      <div className="text-center max-w-3xl px-4 md:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold justify-center text-white -mt-20 md:-mt-25">
          Empowering Your <br className="hidden sm:block" />
          Digital Growth <span className="text-purple-400">Journey</span>
        </h2>
        <p className="mt-6 md:mt-12 text-white leading-relaxed text-sm sm:text-base">
          DigiZinc is a{" "}
          <span className="text-purple-400">full-service Creative Agency</span>{" "}
          that blends innovation with design, helping brands craft compelling
          visual identities and impactful storytelling. We offer tailored
          creative solutions, including branding, content creation, and digital
          experiences that captivate audiences and elevate brand presence.
        </p>
        <p className="mt-3 md:mt-4 text-white leading-relaxed text-sm sm:text-base">
          With a passion for creativity and a deep understanding of digital
          trends, DigiZinc transforms ideas into visually stunning narratives
          that drive engagement, inspire action, and create lasting brand
          impressions.
        </p>
      </div>
    </div>
  );
};
export default Empower;
