"use client";

import React, { useState, useRef } from "react";
import {
  Twitter,
  Instagram,
  Mail,
  ArrowUpRight,
  Linkedin,
  Github,
} from "lucide-react";
import Layout from "../HeroSection/Layout";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { toast } from "react-toastify";
import { Confetti, ConfettiRef } from "../magicui/confetti";
import { Section } from "../Section";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  // niche: string;   // Replaced by companyName
  companyName: string; // Added: Company Name field
  // budget: string;  // Removed: Estimated Budget field
  description: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm({ contact }: any) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    // niche: "",   // Replaced by companyName
    companyName: "", // Added: Company Name field
    // budget: "",  // Removed: Estimated Budget field
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;

    if (fieldName === "mobile") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setFormData((prev) => ({
        ...prev,
        [fieldName]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [fieldName]: value,
      }));
    }

    setErrors((prev) => ({
      ...prev,
      [fieldName]: "",
    }));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    const requiredFields: (keyof FormData)[] = [
      "name",
      "email", // Added: email is now mandatory
      "mobile",
      // "niche",   // Replaced by companyName
      "companyName", // Added: Company Name field
      // "budget",  // Removed: Estimated Budget field
      "description",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field[0].toUpperCase() + field.slice(1)
          } is required`;
      }
    });

    if (
      formData.mobile &&
      (formData.mobile.length < 10 || formData.mobile.length > 10)
    ) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  };

  const triggerConfetti = () => {
    setShowConfetti(true);

    const confettiOptions = [
      {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981"],
      },
      {
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#f59e0b", "#ef4444", "#ec4899"],
      },
      {
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#8b5cf6", "#3b82f6", "#06b6d4"],
      },
    ];

    confettiOptions.forEach((options, index) => {
      setTimeout(() => {
        confettiRef.current?.fire(options);
      }, index * 250);
    });

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const url =
        "https://script.google.com/macros/s/AKfycbxm_5IJLzgsIQi87mfzRVbSmOGws3oW_N0Jkg5LimJ7YWpbyg5kJAPnLwXHQyay7U6YYQ/exec";

      const body = new URLSearchParams({
        fullName: formData.name,
        email: formData.email,
        // niche: formData.niche,    
        companyName: formData.companyName,
        phone: formData.mobile,
        // budget: formData.budget,  
        message: formData.description,
      }).toString();

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      triggerConfetti();
      toast.success("Submitted! I'll get back to you shortly 👍");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        // niche: "",   
        companyName: "",
        // budget: "",  
        description: "",
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error(
        "❌ Something went wrong! Please try again or email me directly at k.sumit.ec@gmail.com",
        {
          position: "top-right",
          autoClose: 7000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Section id="contact">
        <div className="text-white relative">
          {showConfetti && (
            <div className="fixed inset-0 z-[9999] pointer-events-none w-full h-full">
              <Confetti
                ref={confettiRef}
                className="w-full h-full"
                manualstart={true}
              />
            </div>
          )}

          <div className="relative z-10 py-14 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left Content */}
              <div className="space-y-8 lg:pr-8">
                <div className="text-[#8b8bff] font-medium text-m mb-4">
                  Contact me
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Let’s build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    scalable web applications
                  </span>{" "}
                  for your product
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Whether you need frontend development, backend development, system
                  integrations, or production optimization — let’s discuss how
                  I can help you move faster and scale reliably.
                </p>
                <div className="space-y-6 pt-4">
                  <p className="text-gray-300 text-base">
                    You can also find me here:
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Sumit-ec"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gray-700/60 transition-all duration-300 cursor-pointer border border-gray-700/50"
                    >
                      <Github className="text-white w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/sumit-kumar-669a8021b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gray-700/60 transition-all duration-300 cursor-pointer border border-gray-700/50"
                    >
                      <Linkedin className="text-white w-5 h-5" />
                    </a>
                    <a
                      href="https://wa.me/917783873885"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gray-700/60 transition-all duration-300 cursor-pointer border border-gray-700/50"
                    >
                      <svg
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-gray-900/10 backdrop-blur-xl rounded-3xl p-4 lg:p-8 border border-gray-700/30 shadow-2xl">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-white">
                      Share your requirements
                    </h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Fill in a few details and I’ll reach out within 24-48 hours.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="name"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                          autoComplete="off"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl pr-12"
                          autoComplete="off"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Added: Company Name field */}
                    <div>
                      <input
                        name="companyName"
                        placeholder="Company Name *"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                        autoComplete="off"
                      />
                      {errors.companyName && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.companyName}
                        </p>
                      )}
                    </div>

                    {/* Removed: niche field
                    <div>
                      <input
                        name="niche"
                        placeholder="What are you building? (API, automation, SaaS, etc.) *"
                        value={formData.niche}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                        autoComplete="off"
                      />
                      {errors.niche && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.niche}
                        </p>
                      )}
                    </div>
                    */}

                    {/* Mobile number  */}
                    <div>
                      <input
                        name="mobile"
                        placeholder="Mobile Number (10 digits) *"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        maxLength={10}
                        className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                        autoComplete="off"
                      />
                      {errors.mobile && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.mobile}
                        </p>
                      )}
                    </div>

                    {/* Removed: Estimated Budget field
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          name="budget"
                          placeholder="Estimated Budget *"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none px-4 py-2 rounded-xl"
                          autoComplete="off"
                        />
                        {errors.budget && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.budget}
                          </p>
                        )}
                      </div>
                    </div>
                    */}

                    <div>
                      <textarea
                        name="description"
                        // placeholder="Tell me about your requirements, and any integrations needed... *"
                        placeholder="Message *"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full bg-gray-800/10 border border-gray-600/40 text-white placeholder:text-gray-500 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20 focus:outline-none resize-none px-4 py-2 rounded-xl h-32"
                        autoComplete="off"
                      />
                      {errors.description && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    <HoverBorderGradient
                      containerClassName="rounded-full"
                      as="button"
                      className={`bg-[#2d2d54] text-white px-5 py-2.5 flex items-center space-x-2 transition duration-300 ${loading
                        ? "opacity-70 cursor-not-allowed"
                        : "hover:bg-[#3d3d74]"
                        }`}
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      <span className="font-medium">
                        {loading ? "Submitting..." : "Submit"}
                      </span>
                      {!loading && <ArrowUpRight className="w-4 h-4" />}
                    </HoverBorderGradient>

                    <p className="text-gray-400 text-sm text-start">
                      Or email me directly at{" "}
                      <a
                        href="mailto:k.sumit.ec@gmail.com"
                        className="text-blue-400 font-medium hover:text-blue-300 transition-colors"
                      >
                        k.sumit.ec@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
