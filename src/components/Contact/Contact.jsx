import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("Rz7W9pVF0HdDryNNL");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // EmailJS configuration for sending to your Gmail
    emailjs
      .sendForm(
        "service_axbtt7a",        // Your EmailJS service ID
        "template_1ziboq3",       // Your EmailJS template ID
        form.current,
        "Rz7W9pVF0HdDryNNL"       // Your EmailJS public key
      )
      .then(
        (result) => {
          setIsLoading(false);
          form.current.reset();
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          setIsLoading(false);
          console.error("FAILED...", error.text);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-cv.pdf';
    link.download = 'Roshan_Gupta_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-amber-500 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      {/* Main Content - Full Width on Desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="text-white">Let&apos;s </span>
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;m passionate about technology and always excited to collaborate on interesting projects. 
            Feel free to reach out!
          </p>
        </div>

        {/* Contact Content - Full Width Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side - Profile & Info (Compact) */}
          <div className="space-y-6">
            {/* Compact Profile Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src="/src/assets/profile2.png" 
                    alt="Roshan Gupta" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400/50 shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Roshan Gupta</h3>
                  <p className="text-yellow-300 font-medium text-sm mb-1">3rd Year Student</p>
                  <p className="text-gray-400 text-xs">
                    Full Stack Developer | Tech Enthusiast
                  </p>
                </div>
              </div>
            </div>

            {/* Compact Download CV Card */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-xl p-5 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300">
              <h4 className="text-base font-semibold text-white mb-2 flex items-center">
                <span className="mr-2">📄</span>
                Download CV
              </h4>
              <p className="text-gray-300 text-xs mb-3">
                Check out my skills and experience
              </p>
              <button
                onClick={handleDownloadCV}
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-700 hover:from-yellow-700 hover:to-amber-800 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center space-x-2 text-sm"
              >
                <span>📥</span>
                <span>Download</span>
              </button>
            </div>

            {/* Direct Email Card */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-xl p-5 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300">
              <h4 className="text-base font-semibold text-white mb-2 flex items-center">
                <span className="mr-2">📧</span>
                Send Direct Email
              </h4>
              <p className="text-gray-300 text-xs mb-3">
                Open your email client directly
              </p>
              <a
                href="mailto:rg9885468@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Roshan,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ABest%20regards,"
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-700 hover:from-yellow-700 hover:to-amber-800 text-white font-medium py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center space-x-2 text-sm"
              >
                <span>📧</span>
                <span>Send Email</span>
              </a>
            </div>

            {/* Compact Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-yellow-400/40 transition-all duration-300">
              <h4 className="text-base font-semibold text-white mb-3 flex items-center">
                <span className="mr-2">📧</span>
                Contact Info
              </h4>
              <div className="space-y-2">
                <a 
                  href="mailto:rg9885468@gmail.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer text-sm"
                >
                  <span className="text-yellow-400">📧</span>
                  <span>rg9885468@gmail.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer text-sm">
                  <span className="text-yellow-400">📱</span>
                  <span>+91 8576908415</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors cursor-pointer text-sm">
                  <span className="text-yellow-400">📍</span>
                  <span>Jaunpur, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center - Contact Form */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Send me a message <span className="text-yellow-400">💬</span>
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 rounded-lg bg-slate-700/30 text-white border border-slate-600/50 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 placeholder-gray-400 group-hover:border-yellow-400/50"
                  />
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="w-full p-3 rounded-lg bg-slate-700/30 text-white border border-slate-600/50 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 placeholder-gray-400 group-hover:border-yellow-400/50"
                  />
                </div>
              </div>
              
              <div className="group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700/30 text-white border border-slate-600/50 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 placeholder-gray-400 group-hover:border-yellow-400/50"
                />
              </div>
              
              <div className="group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full p-3 rounded-lg bg-slate-700/30 text-white border border-slate-600/50 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 placeholder-gray-400 group-hover:border-yellow-400/50 resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-600 to-amber-700 hover:from-yellow-700 hover:to-amber-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>📤</span>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default Contact;
