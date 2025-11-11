import React from "react";
import PageHeader from "../../components/PageHeader"; // ✅ Import PageHeader
import TransparentNavbar from "../../components/TransparentNavbar";

const MEPConsultancy = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Page Header */}
      <TransparentNavbar/>
      <PageHeader/>
      {/* ✅ Content Section (unchanged) */}
      <div className=" bg-gray-50">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 justify-items-center items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Expert MEP Engineering Solutions
                </h2>

                <p className="text-lg text-gray-700 mb-6">
                  Our MEP Consultancy services provide integrated mechanical,
                  electrical, and plumbing solutions that ensure optimal
                  performance, energy efficiency, and compliance with
                  international standards.
                </p>

                <div className="space-y-4">
                  {[
                    "HVAC system design and optimization",
                    "Electrical power distribution and lighting systems",
                    "Plumbing, fire protection, and drainage systems",
                    "Building automation and control systems",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="/uzair.png"
                  className="w-[500px] h-[400px] mt-5 mr-4 object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="my-10 w-full bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#2387C0] mb-6">
                Our MEP Services
              </h3>

              {[
                ["Mechanical Systems", "HVAC, ventilation, and refrigeration"],
                [
                  "Electrical Systems",
                  "Power, lighting, and low voltage systems",
                ],
                [
                  "Plumbing Systems",
                  "Water supply, drainage, and fire protection",
                ],
                [
                  "Sustainability",
                  "Energy-efficient and green building solutions",
                ],
              ].map(([title, desc], i) => (
                <div key={i} className="border-l-4 border-[#2387C0] pl-4 py-2">
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MEPConsultancy;
