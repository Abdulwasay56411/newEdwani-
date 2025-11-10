import React from "react";
import PageHeader from "../components/PageHeader"; // ✅ Reusable Header
import ContactSection from "../components/ContactSection";

const ContactUs = () => {
  return (
    <div className="relative">
      {/* ✅ Reusable Page Header */}
      <PageHeader
        title="Contact Us"
        subtitle="Edwani Contracting"
        image="/contactusbg2.jpg"
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ContactUs;
