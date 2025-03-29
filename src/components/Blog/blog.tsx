import Navigation from "../Navigation/Navigation"; // Update the path to the actual location of Navigation
import MessageButton from "../Message/MessageButton";
import FooterSection from "../FooterSection/FooterSection";
const BlogPage: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-24 w-full overflow-x-hidden"
      style={{
        backgroundImage: "url('/about_us.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navigation Bar */}
      <Navigation />

      {/* Hero Section */}
      <header className="text-center mt-32 sm:mt-35 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold">The Creative Lab</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FF2FD2] italic font-CedarvilleCursive mt-2 sm:mt-4">
          Insights, Trends & Inspiration
        </h2>
      </header>

      {/* Intro Text Section */}
      <section className="mt-6 sm:mt-8 w-full px-4 sm:px-6 md:px-12 lg:px-0 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          <p className="text-base sm:text-lg italic text-justify">
            Welcome to The Creative Lab, where ideas take shape and innovation
            meets execution. From cutting-edge design trends to marketing
            insights, UI/UX strategies, and 3D magic—this is your go-to space
            for creative intelligence.
          </p>
          <p className="text-base sm:text-lg italic text-justify">
            Stay ahead of the curve with expert articles, behind-the-scenes
            breakdowns, and actionable tips straight from the DigiZinc team.
            Because creativity isn't just an art—it's a strategy.
          </p>
        </div>
      </section>

      {/* Explore Section */}
      <header className="text-center mt-8 sm:mt-10 w-full">
        <h2 className="text-xl sm:text-2xl font-extrabold">
          <span className="text-[#FF2FD2]">Explore</span>. GET{" "}
          <span className="text-[#FF2FD2]">Inspired</span>. Create{" "}
          <span className="text-[#FF2FD2]">Boldly</span>
        </h2>
      </header>

      {/* Blog Section */}
      <section className="mt-8 sm:mt-15 w-full px-4 sm:px-6">
        <div className="flex flex-col items-start max-w-6xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr] xl:grid-cols-[2fr_1fr] gap-6 w-full">
            {/* Left Section (Large Feature Blog) */}
            <div className="w-full lg:max-w-[500px] xl:max-w-none mx-auto xl:mx-0">
              <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src="/lorem_1.jpeg"
                  alt="Feature Blog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-4 w-full text-white text-base sm:text-lg font-light">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard.
                </p>
              </div>
            </div>

            {/* Right Section (Side Blogs) */}
            <div className="space-y-3 sm:space-y-4 w-full mt-6 lg:mt-0">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-x-3 sm:gap-x-4 bg-transparent rounded-lg p-3 w-full"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-300 rounded-lg overflow-hidden">
                    <img
                      src={`/lorem${
                        item === 1 ? "" : item === 2 ? "_2" : "_3"
                      }.jpeg`}
                      alt={`Side Blog ${item}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-white">
                    <h3 className="font-semibold text-sm sm:text-base">
                      Lorem Ipsum is simply dummy text
                    </h3>
                    <p className="text-xs sm:text-xs opacity-75">
                      Lorem Ipsum has been the industry's standard.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending News Section */}
      <section className="mt-8 sm:mt-12 px-4 sm:px-8 w-full">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Trending <span className="text-[#FF2FD2]">News</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="relative h-48 sm:h-64 md:h-75 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`/lorem${item === 1 ? "" : item === 2 ? "_2" : "_3"}.jpeg`}
                alt={`Trending News ${item}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-40 p-3 text-white text-xs sm:text-sm font-semibold">
                using Lorem Ipsum is that it has a more-or-less normal
                <p className="text-xs opacity-75">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <MessageButton />
      <section className="mt-10 sm:mt-14 w-full">
        <FooterSection />
      </section>
    </div>
  );
};
export default BlogPage;
