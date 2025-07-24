"use client";
import React, { useEffect, useState } from "react";

const ContactPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-40 bg-accent-two min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* ✅ Smaller logo, gently lower */}
      <div
        onClick={scrollToTop}
        className={`fixed top-12 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer transition-all duration-300 ${
          scrolled ? "scale-90 opacity-90" : "scale-100 opacity-100"
        }`}
      >
        <img
          src="/logo.png"
          alt="Logo"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* ✅ Contact Form */}
      <div className="w-[95%] sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-3xl z-10 mt-10">
        <iframe
          id="JotFormIFrame-252034578254054"
          title="Contact Form"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://form.jotform.com/252034578254054"
          className="w-full h-[850px] border-none rounded-xl shadow-2xl"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
