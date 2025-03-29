import { useState } from "react";
import { ArrowDownRight } from "lucide-react";

export default function CaseGrid() {
  const images = [
    {
      src: "/case_1.png",
      title: "Case 1",
      description: "Description for Case 1",
    },
    {
      src: "/case_2.jpg",
      title: "Case 2",
      description: "Description for Case 2",
    },
    {
      src: "/case_3.jpg",
      title: "Case 3",
      description: "Description for Case 3",
    },
    {
      src: "/case_4.jpg",
      title: "Case 4",
      description: "Description for Case 4",
    },
    {
      src: "/case_5.jpg",
      title: "Case 5",
      description: "Description for Case 5",
    },
    {
      src: "/case_6.jpg",
      title: "Case 6",
      description: "Description for Case 6",
    },
  ];

  const [activeCase, setActiveCase] = useState<number | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto mt-4 sm:mt-8">
      {activeCase === null ? (
        // Grid view when no case is selected
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative w-full aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300 ${
                index > 2
                  ? "pointer-events-none opacity-50"
                  : "hover:scale-105 cursor-pointer"
              }`}
              onClick={() => {
                if (index < 3) setActiveCase(index);
              }}
            >
              <img
                src={image.src}
                alt={`Case ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg sm:text-xl font-bold">
                  {image.title}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-gray-300 text-sm sm:text-base">
                    {image.description}
                  </p>
                  <div className="bg-black/50 p-2 rounded-full">
                    <ArrowDownRight className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Full-page expanded view when a case is selected
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="max-w-4xl w-full">
            <img
              src={images[activeCase].src}
              alt={`Case ${activeCase + 1}`}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {images[activeCase].title}
              </h2>
              <p className="text-gray-300 mt-2 text-base sm:text-lg max-w-2xl mx-auto">
                {images[activeCase].description}
              </p>
              <button
                className="mt-6 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg text-white font-medium transition-colors duration-300"
                onClick={() => setActiveCase(null)}
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
