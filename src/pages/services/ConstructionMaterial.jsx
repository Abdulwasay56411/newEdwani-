import React from "react";
import PageHeader from "../../components/PageHeader";

const ConstructionMaterial = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Header Component */}
      <PageHeader
        title="Construction Material Supply"
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
                  Premium Construction Materials
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We supply high-quality construction materials from trusted
                  manufacturers worldwide. Our comprehensive inventory ensures
                  you get the right materials for your projects, delivered on
                  time and within budget.
                </p>

                <div className="space-y-4">
                  {[
                    "Quality-certified construction materials",
                    "Competitive pricing and bulk discounts",
                    "Timely delivery and logistics support",
                    "Technical support and material selection guidance",
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
                  Material Categories
                </h3>

                {[
                  [
                    "Structural Materials",
                    "Steel, concrete, reinforcement bars",
                  ],
                  ["Finishing Materials", "Tiles, paints, flooring materials"],
                  ["MEP Materials", "Pipes, cables, fixtures, fittings"],
                  [
                    "Specialty Materials",
                    "Waterproofing, insulation, adhesives",
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

export default ConstructionMaterial;
