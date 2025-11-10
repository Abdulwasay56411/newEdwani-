import React from "react";

export default function ProjectCard2() {
  const projects = [
    {
      id: 1,
      title: "China Harbour Bridge Project",
      description:
        "Engineering marvel connecting strategic locations with state-of-the-art bridge construction technology.",
      image: "/greyson-joralemon-A1g0oeX29ec-unsplash.jpg",
      position: "left",
      category: "Infrastructure",
      duration: "48 Months",
    },
    {
      id: 2,
      title: "AL-Murooj Project",
      description:
        "Luxury residential community offering premium lifestyle amenities and sustainable living solutions.",
      image: "/guilherme-cunha-4zwozQxDbD4-unsplash.jpg",
      position: "right",
      category: "Residential",
      duration: "42 Months",
    },
    {
      id: 3,
      title: "Yasref Project",
      description:
        "Industrial facility construction with focus on safety standards and operational efficiency.",
      image: "/h-co-3coKbdfnAFg-unsplash.jpg",
      position: "left",
      category: "Industrial",
      duration: "30 Months",
    },
    {
      id: 4,
      title: "Al-Sharam Road Project",
      description:
        "Major highway development enhancing connectivity and transportation infrastructure across the region.",
      image: "/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg",
      position: "right",
      category: "Infrastructure",
      duration: "28 Months",
    },
  ];

  return (
    <div className="min-h-screen  relative overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex flex-col items-center">
            <span className="text-[#2387C0] font-semibold text-lg tracking-wider uppercase mb-3">
              Our Portfolio
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
              Featured Projects
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Discover our diverse portfolio of successful projects that
              showcase our commitment to excellence, innovation, and sustainable
              development across Saudi Arabia.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20 lg:space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Desktop Layout */}
              <div
                className={`hidden lg:flex items-center justify-between gap-12 ${
                  project.position === "right" ? "flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div
                  className={`flex-1 relative ${
                    project.position === "left" ? "order-2" : "order-1"
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#2387C0]/20 to-transparent rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500 z-10"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-[#2387C0] font-semibold text-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-6 right-6 bg-[#2387C0] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.duration}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`flex-1 ${
                    project.position === "left"
                      ? "order-1 pr-12"
                      : "order-2 pl-12"
                  }`}
                >
                  <div className="max-w-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2387C0] to-[#177bb6] rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        0{project.id}
                      </div>
                      <span className="text-[#2387C0] font-semibold tracking-wide uppercase text-sm">
                        Case Study
                      </span>
                    </div>

                    <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                      {project.title}
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4"></div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="block lg:hidden bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-[#2387C0] font-semibold text-xs">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#2387C0] text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.duration}
                  </div>

                  {/* Number */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <span className="text-[#2387C0] font-bold text-sm">
                      0{project.id}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 lg:mt-32">
          <div className="bg-gradient-to-r from-[#2387C0] to-[#194b67] rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our
              expertise and commitment to excellence.
            </p>
            <button className="bg-white text-[#2387C0] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
