import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Navigation from "../Navigation/Navigation";
import FooterSection from "../FooterSection/FooterSection";
import Case from "./Case";
import MessageButton from "../Message/MessageButton";

const reviews = [
  {
    text: `"DigiZinc gave our restaurant a brand identity that truly stands out!"`,
    description:
      "The logo, menu design, and social media creatives crafted by their team have given our brand a fresh, premium look. Customers now recognize us instantly, and footfall has increased dramatically!",
    author: "Marco Bennett",
    role: "Founder, Urban Bites",
  },
  {
    text: `"Our product packaging is now as irresistible as our food!"`,
    description:
      "DigiZinc's creative approach to packaging design has elevated our brand image. The vibrant visuals and unique design have made our products pop off the shelves, boosting sales significantly!",
    author: "Priya Sharma",
    role: "Co-Founder, SpiceNest",
  },
  {
    text: `"Our website now reflects the cutting-edge tech we provide!"`,
    description:
      "DigiZinc revamped our website with a sleek, intuitive UI/UX that keeps visitors engaged. The modern, user-friendly design has increased inquiries and helped us land bigger clients!",
    author: "Ethan Carter",
    role: "CEO, NexaTech Solutions",
  },
  {
    text: `"Our ad campaigns have never looked this good!"`,
    description:
      "DigiZinc's visually stunning ad creatives have taken our digital marketing to the next level. The designs are bold, engaging, and perfectly aligned with our brand, leading to higher conversions and visibility.",
    author: "Sophia Lewis",
    role: "Marketing Head, CloudWave IT",
  },
  {
    text: `"Our social media now looks as delicious as our dishes!"`,
    description:
      "DigiZinc transformed our social media presence with mouthwatering visuals and a cohesive aesthetic. Engagement has skyrocketed, and we've seen a steady rise in reservations since the redesign!",
    author: "Daniel Wong",
    role: "Owner, The Gourmet Table",
  },
  {
    text: `"Our product packaging is now as irresistible as our food!"`,
    description:
      "DigiZinc's creative approach to packaging design has elevated our brand image. The vibrant visuals and unique design have made our products pop off the shelves, boosting sales significantly!",
    author: "Priya Sharma",
    role: "Co-Founder, SpiceNest",
  },
];

const Casestudy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Main Content - Now with better contrast */}
      <div className="flex-grow bg-cover bg-center px-4 sm:px-6 md:px-8 py-8 md:py-16 relative bg-black/80 backdrop-blur-sm">
        <div
          className="absolute inset-0 bg-[url('/casestudy_section.png')] bg-cover bg-center -z-10"
          style={{
            backgroundImage: "url('/casestudy_section.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <Navigation />

        {/* CASE STUDY Heading - More prominent */}
        <div className="relative flex items-center mt-12 sm:mt-20">
          <img
            src="/quotations.png"
            alt="Quote"
            className="absolute w-14 h-14 md:w-20 md:h-20 opacity-90 -left-2 sm:left-2"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white ml-12 sm:ml-16 md:ml-20 tracking-tight">
            CASE <span className="text-pink-500">STUDY</span>
          </h1>
        </div>

        {/* Case Grid - Better spacing */}
        <div className="mt-10 sm:mt-14 md:mt-20">
          <Case />
        </div>

        {/* Reviews Section - Enhanced layout */}
        <div className="relative mt-16 sm:mt-24 md:mt-32">
          <div className="flex items-center">
            <img
              src="/quotations.png"
              alt="Quote"
              className="w-14 h-14 md:w-20 md:h-20 opacity-90 mr-4"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              CLIENT <span className="text-pink-500">REVIEWS</span>
            </h1>
          </div>

          {/* Reviews Grid - Improved card design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-900/80 to-black/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-600 hover:border-pink-500 transition-all duration-300 hover:scale-[1.02]"
              >
                <p className="text-lg sm:text-xl font-medium text-white">
                  {review.text}
                </p>
                <p className="text-gray-300 mt-4 text-sm sm:text-base">
                  {review.description}
                </p>
                <div className="flex items-center mt-6">
                  <FaUserCircle className="text-pink-400 text-3xl" />
                  <div className="ml-4">
                    <p className="text-white font-medium">{review.author}</p>
                    <p className="text-gray-400 text-sm">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MessageButton />
      <FooterSection className="mt-auto" />
    </div>
  );
};

export default Casestudy;
