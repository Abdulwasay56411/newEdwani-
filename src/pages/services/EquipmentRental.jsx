import React from "react";
import PageHeader from "../../components/PageHeader";

const EquipmentRental = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable PageHeader Component */}
      <PageHeader
        title="Equipment Rental"
        subtitle="Edwani Contracting"
        image="/uzair.png"
      />

      {/* ✅ Content Section (unchanged) */}
      <div className=" bg-gray-50 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Equipment Solutions
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We provide high-quality construction equipment rental services
                  backed by comprehensive maintenance and support. Our fleet is
                  regularly serviced and maintained to ensure optimal
                  performance and reliability for your projects.
                </p>

                <div className="space-y-4">
                  {[
                    "Modern and well-maintained equipment fleet",
                    "Flexible rental terms and competitive pricing",
                    "On-site maintenance and repair services",
                    "24/7 technical support and emergency services",
                  ].map((text, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#2387C0] mb-6">
                  Our Equipment Range
                </h3>

                {[
                  ["Heavy Machinery", "Excavators, bulldozers, loaders"],
                  [
                    "Construction Equipment",
                    "Cranes, concrete mixers, compactors",
                  ],
                  ["Power Tools", "Generators, compressors, welding machines"],
                  [
                    "Specialized Equipment",
                    "Scaffolding, formwork, safety equipment",
                  ],
                ].map(([title, desc], i) => (
                  <div
                    key={i}
                    className="border-l-4 border-[#2387C0] pl-4 py-2"
                  >
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentRental;
