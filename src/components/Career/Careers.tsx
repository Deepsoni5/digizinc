import { memo } from "react";
import {
  FaLocationDot,
  FaBriefcase,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Navigation from "../Navigation/Navigation";
import InternshipSection from "./InternshipSection";
import FooterSection from "../FooterSection/FooterSection";
import { useNavigate } from "react-router-dom";
import MessageButton from "../Message/MessageButton";

const jobListings = [
  { title: "Graphic Designer", location: "Dubai", type: "Part-Time" },
  { title: "UI/UX Designer", location: "Dubai", type: "Full-Time" },
  { title: "Video Editor", location: "Dubai", type: "Part-Time" },
  { title: "Social Media Manager", location: "Dubai", type: "Part-Time" },
  { title: "Content Writer", location: "Remote", type: "Full-Time" },
  { title: "SEO Analyst", location: "Dubai", type: "Part-Time" },
];

type JobCardProps = {
  title: string;
  location: string;
  type: string;
};

const JobCard = memo(({ title, location, type }: JobCardProps) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-purple-800/20 border border-gray-600 rounded-lg p-4 hover:bg-purple-700 transition duration-300 w-full">
    <span className="text-base sm:text-lg font-semibold text-white">
      {title}
    </span>
    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
      <span className="flex items-center gap-1">
        <FaLocationDot className="text-green-400" /> {location}
      </span>
      <span className="flex items-center gap-1">
        <FaBriefcase className="text-pink-400" /> {type}
      </span>
      <FaArrowUpRightFromSquare className="text-pink-400 cursor-pointer" />
    </div>
  </div>
));

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat px-4 sm:px-6"
      style={{ backgroundImage: "url('/carrers.jpg')" }}
    >
      <Navigation />

      {/* Header Section */}
      <div className="text-center mt-32 sm:mt-24 px-4 relative z-10 w-full">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Not just a job, but your next <br className="hidden sm:block" />
          <span className="text-pink-500 italic font-CedarvilleCursive">
            creative adventure
          </span>
        </h1>
        <p className="mt-2 sm:mt-4 text-white text-sm sm:text-base">
          Fuel your passion. Elevate your skills. Join the disruption.
        </p>
      </div>

      {/* Life at Digizinc Section */}
      <div className="w-full flex flex-col items-center text-center px-4 mt-8 sm:mt-16 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          <span className="text-pink-500">Life</span> at Digizinc.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 p-4 w-full max-w-4xl mx-auto">
          <p className="italic text-gray-300 bg-purple-800/30 p-3 sm:col-span-2 sm:row-span-1 w-full sm:w-auto sm:ml-4 sm:mt-6 text-sm sm:text-base">
            "Great ideas come from great minds working together"
          </p>
          <img
            src="/Rectangle_79.png"
            alt="Image 2"
            className="w-full h-auto sm:w-50 sm:h-55 sm:mt-6 object-cover rounded-lg"
          />
          <img
            src="/Rectangle_80.png"
            alt="Image 3"
            className="w-full h-auto sm:w-50 sm:h-70 sm:-mt-9 sm:ml-20 object-cover rounded-lg"
          />
          <img
            src="/Rectangle_81.png"
            alt="Image 4"
            className="w-full h-auto sm:w-70 sm:h-70 sm:-mt-9 sm:mr-100 object-cover rounded-lg"
          />
          <img
            src="/Rectangle_82.png"
            alt="Image 5"
            className="w-full h-auto sm:w-50 sm:h-30 sm:-mt-2 object-cover rounded-lg"
          />
          <img
            src="/Rectangle_83.png"
            alt="Image 6"
            className="w-full h-auto sm:w-177 sm:h-20 sm:ml-20 object-cover rounded-lg col-span-1 sm:col-span-3"
          />
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="mt-8 sm:mt-16 text-center w-full px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Open <span className="text-pink-500">Positions.</span>
        </h2>
        <p className="text-white mt-1 sm:mt-2 text-sm sm:text-base">
          Discover exciting career opportunities, competitive benefits, and a
          vibrant work culture.
        </p>
      </div>

      {/* Job Listings */}
      <div className="relative mt-6 sm:mt-10 w-full max-w-3xl h-auto max-h-[400px] overflow-y-auto custom-scrollbar px-4">
        <div className="space-y-3 sm:space-y-4">
          {jobListings.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>

      {/* Not Finding a Role Section */}
      <div className="mt-18 sm:mt-10 text-center max-w-xl px-4 relative z-10">
        <p className="text-lg sm:text-xl font-semibold text-white">
          Don't see the role <span className="text-pink-400">you're</span>{" "}
          looking for?
        </p>
        <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">
          Relax! We would still love to hear from you. Please submit your
          profile to{" "}
          <a
            href="mailto:careers@digizinc.com"
            className="text-pink-400 font-medium"
          >
            careers@digizinc.com
          </a>{" "}
          (no agencies please), and we will get in touch with you.
        </p>
      </div>

      {/* Submit Resume Button */}
      <button
        className="mt-4 sm:mt-6 mb-8 sm:mb-10 bg-purple-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg shadow-md hover:bg-pink-600 transition duration-300 text-sm sm:text-base"
        onClick={() => navigate("/Form")}
      >
        SUBMIT RESUME
      </button>

      <InternshipSection />
      <MessageButton />
      <FooterSection className="mt-auto" />
    </div>
  );
};

export default Careers;
