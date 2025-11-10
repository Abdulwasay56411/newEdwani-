import React from "react";
import { motion } from "framer-motion";
import TransparentNavbar from "./../../components/TransparentNavbar";
import PageHeader from "../../components/PageHeader";

const CivilEngineering = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Header */}
      <PageHeader
        title="Civil Engineering"
        subtitle="Edwani Contracting"
        image="/uzair.png"
      />

      <div className="bg-gray-50">
        {/* Content Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Civil Engineering Excellence
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our civil engineering services encompass the planning, design,
                  and management of infrastructure projects. We deliver
                  innovative solutions that meet the highest standards of
                  safety, quality, and sustainability.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      Structural design and analysis
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      Site development and earthworks
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      Road and highway engineering
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-[#2387C0] rounded-full p-2 mt-1 mr-4">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <p className="text-gray-700">
                      Water resources and drainage systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#2387C0] mb-6">
                  Civil Engineering Services
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#2387C0] pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">
                      Structural Engineering
                    </h4>
                    <p className="text-gray-600">Building and bridge design</p>
                  </div>

                  <div className="border-l-4 border-[#2387C0] pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">
                      Geotechnical Engineering
                    </h4>
                    <p className="text-gray-600">
                      Soil analysis and foundation design
                    </p>
                  </div>

                  <div className="border-l-4 border-[#2387C0] pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">
                      Transportation
                    </h4>
                    <p className="text-gray-600">
                      Roads, highways, and traffic engineering
                    </p>
                  </div>

                  <div className="border-l-4 border-[#2387C0] pl-4 py-2">
                    <h4 className="font-semibold text-gray-900">
                      Water Resources
                    </h4>
                    <p className="text-gray-600">
                      Drainage and flood control systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilEngineering;
