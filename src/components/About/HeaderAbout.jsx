import React from "react";

const Headerabout = ({ bgImage, title, subtitle, children }) => {
  return (
    <div
      className={`relative flex justify-center items-center w-full bg-cyan-600/60 bg-blend-overlay bg-cover bg-center 
             min-h-[200px] md:min-h-[400px] lg:min-h-[533px]`}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Render children (navbar) if provided */}
      {children}

      {/* Rectangle Card */}
      <div
        className="flex flex-col justify-center items-center text-center 
                    bg-white/80 backdrop-blur-lg 
                    rounded-md md:rounded-xl 
                    shadow-[0px_2.9px_3.3px_0px_rgba(0,0,0,0.06),0px_7.2px_9.4px_0px_rgba(0,0,0,0.05)] 
                    md:shadow-[0px_8px_9px_0px_rgba(0,0,0,0.06),0px_20px_26px_0px_rgba(0,0,0,0.05)] 
                    w-64 h-24 md:w-[500px] md:h-[180px] lg:w-[732px] lg:h-60 p-4 md:p-8 lg:p-12"
      >
        {/* Title */}
        <h2 className="text-cyan-600 font-['Urbanist'] font-extrabold text-lg md:text-3xl lg:text-[48px] leading-tight">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-stone-900 font-['Noto_Sans'] font-semibold text-[8.75px] md:text-lg lg:text-2xl leading-snug mt-2">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Headerabout;
