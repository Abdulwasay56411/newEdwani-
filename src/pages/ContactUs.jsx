import React from "react";
import PageHeader from "../components/PageHeader"; //  Reusable Header
import ContactSection from "../components/ContactSection";

const ContactUs = () => {
  return (
    <div className="relative mt-68 md:mt-54">
      {/* Reusable Page Header */}
      {/* <div className="w-full h-auto bg-cover bg-center" style={{backgroundImage: "url('/contactusbg2.jpg')/50"}} > */}
      <div className="flex flex-wrap lg:flex-nowrap text-center lg:text-left items-center justify-center lg:justify-between mb-10 px-4">
        <PageHeader
          title="Contact Us"
          subtitle="At Edwani Contracting, we believe lasting partnerships are built on trust, performance and precision. Contact our team to discuss your construction goals and discover how we can bring your vision to life with confidence."
        />
        <div>
          <img
            className="w-[400px] h-[300px] mt-5 object-cover rounded-lg"
            src="/contactusbg2.jpg"
          />
        </div>
        {/* </div> */}
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactUs;
