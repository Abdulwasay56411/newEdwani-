import React from "react";
import PageHeader from "../../components/PageHeader"; // ✅ Import your PageHeader
import TransparentNavbar from "../../components/TransparentNavbar";

const Landscaping = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Page Header */}
      <TransparentNavbar/>
      <PageHeader/>

      {/* ✅ Content Section */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Landscaping Solutions
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Create stunning outdoor environments with our comprehensive
                  landscaping services. From concept to completion, we design
                  and build beautiful, functional landscapes that enhance your
                  property’s value and appeal.
                </p>

                <div className="space-y-4">
                  {[
                    "Complete landscape design and installation",
                    "Irrigation system design and installation",
                    "Garden maintenance and seasonal care",
                    "Sustainable and eco-friendly landscaping",
                  ].map((item, i) => (
                    <div className="flex items-start" key={i}>
                      <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative mx-2 inline-block">
              <div className="absolute top-3 -left-2 w-full mx-2  max-w-[520px] h-[410px] bg-[#E7E7E7] rounded-3xl -rotate-4 "></div>
                <img
                   src="/services 5.png"
                  className="w-[500px] h-[400px] mt-5 mr-4 object-cover rounded-lg relative rotate-1"
                />
              </div>
            </div>
              <div className="w-full my-10 bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#2387C0] mb-6">
                  Landscaping Features
                </h3>

                {[
                  [
                    "Garden Design",
                    "Custom garden layouts and planting schemes",
                  ],
                  ["Lawn Installation", "Turf and seed installation services"],
                  ["Water Features", "Ponds, fountains, and waterfalls"],
                  ["Lighting", "Outdoor landscape lighting solutions"],
                ].map(([title, text], i) => (
                  <div
                    key={i}
                    className="border-l-4 border-[#2387C0] pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-gray-600">{text}</p>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landscaping;
