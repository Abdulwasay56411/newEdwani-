import React from "react";
import PageHeader from "../components/PageHeader"; //  Reusable Header
import ContactSection from "../components/ContactSection";
import TransparentNavbar from "../components/TransparentNavbar";

const ContactUs = () => {
  return (
    <div className="relative">
         <TransparentNavbar/>
      {/* Reusable Page Header */}
      <div className="flex flex-wrap pt-5 lg:flex-nowrap text-center lg:text-left items-center justify-center 2xl:justify-center  lg:justify-between mb-10 px-4">
        <PageHeader
          title="Contact Us"
          subHeading="YOUR NEXT PROJECT STARTS HERE"
          subtitle="We’re here to help and answer any questions you may have. Whether you’re looking for more information about our services, projects or career opportunities, our team is ready to assist you. Get in touch with us through the form below, email or phone and we’ll ensure your inquiries are addressed promptly and efficiently. Your connection with us is important and we look forward to hearing from you."
        />
        <div>
          <img
            className="w-[400px] h-[300px] mt-5 mr-4 object-cover rounded-lg shadow-md"
            src="/contactusbg2.jpg"
          />
        </div>
      </div>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactUs;
