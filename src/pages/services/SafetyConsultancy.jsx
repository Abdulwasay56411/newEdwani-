import React from "react";
import PageHeader from "../../components/PageHeader";

const SafetyConsultancy = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Header Component */}
      <PageHeader
        title="Safety Consultancy"
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
                  Safety First Approach
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our safety consultancy services help organizations create safe
                  working environments, comply with regulations, and protect
                  their most valuable asset - their people. We provide expert
                  guidance and practical solutions for all your safety needs.
                </p>

                <div className="space-y-4">
                  {[
                    "Workplace safety audits and risk assessments",
                    "Safety training and certification programs",
                    "Emergency response planning and drills",
                    "Compliance with local and international standards",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#2387C0] mb-6">
                  Safety Services
                </h3>

                {[
                  [
                    "Risk Assessment",
                    "Comprehensive workplace hazard analysis",
                  ],
                  ["Safety Training", "Employee safety awareness programs"],
                  ["Compliance Audits", "Regulatory compliance verification"],
                  [
                    "Emergency Planning",
                    "Crisis management and response plans",
                  ],
                ].map(([title, desc], index) => (
                  <div
                    key={index}
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

export default SafetyConsultancy;
