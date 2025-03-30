import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const services = [
  {
    id: "01",
    name: "Branding",
    text: "Build a unique and memorable identity with logos, brand strategy, and visual consistency tailored to your business.",
  },
  {
    id: "02",
    name: "Digital",
    text: "Stunning designs that communicate your vision, from social media creatives to print materials.",
  },
  {
    id: "03",
    name: "3D Visuals",
    text: "High-quality 3D renderings and animations that bring products, spaces, and concepts to life.",
  },
  {
    id: "04",
    name: "Website",
    text: "User-centered interfaces that enhance digital experiences, ensuring seamless navigation and engagement.",
  },
  {
    id: "05",
    name: "Youtube",
    text: "Impactful ad creatives designed to boost engagement and conversions across digital platforms.",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLElement | null>(null);
  return (
    <section
      ref={servicesRef}
      className="bg-black text-white py-16 lg:py-24 px-4 bg-[url('/Rectangle_10.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Your creative project, our <br className="hidden md:block" />
          wide range of <span className="text-pink-500">services</span>
        </h2>

        {/* Service Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative w-full lg:w-[200px] xl:w-[220px]"
              onMouseEnter={() => setActive(service.id)}
              onMouseLeave={() => setActive(null)}
            >
              <motion.div
                className={`relative h-[100px] lg:h-[500px] rounded-xl cursor-pointer overflow-hidden flex flex-col items-center justify-center p-6 transition-all duration-500 ${
                  active === service.id
                    ? "lg:w-[450px] bg-black/90 text-white border-2 border-pink-500"
                    : "bg-white/90 text-black"
                }`}
                animate={{
                  width: active === service.id ? "100%" : "100%",
                  height: active === service.id ? "400px" : "100px",
                }}
                onClick={() =>
                  setActive(active === service.id ? null : service.id)
                }
              >
                {/* ID Badge */}
                <div className="absolute top-4 left-4 bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                  {service.id}
                </div>

                {active !== service.id ? (
                  <motion.span
                    className={`text-xl font-bold ${
                      window.innerWidth >= 1024 ? "rotate-90" : ""
                    }`}
                    style={{
                      color: window.innerWidth >= 1024 ? "#9f7aea" : "#000",
                    }}
                  >
                    {service.name}
                  </motion.span>
                ) : (
                  <motion.div
                    className="flex flex-col items-center text-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-pink-400">
                      {service.name}
                    </h3>
                    <p className="text-lg leading-relaxed max-w-[380px]">
                      {service.text}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="mt-20">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Didn't Find Your <span className="text-purple-400">Service</span>{" "}
            Above?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our portfolio includes a wide array of categories. Perhaps an
            opportunity to work with you can help us expand it further.
          </p>

          <button
            onClick={() => navigate("/contactus")}
            className="mt-10 px-10 py-4 bg-transparent text-xl font-bold rounded-xl border-2 border-pink-400 hover:bg-pink-400 hover:text-black transition duration-500"
          >
            LET'S <span className="text-white hover:text-black">VIEW</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
