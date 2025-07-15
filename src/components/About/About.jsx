import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/roshanphoto.png';

const About = () => {
  return (
    <section
  id="about"
  className="min-h-screen flex flex-col justify-center pt-16 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
>




      {/* Welcome Section with Animated SVG */}
      <div className="absolute top-0 left-0 w-full h-32">
        <img 
          src="https://raw.githubusercontent.com/BEPb/BEPb/5c63fa170d1cbbb0b1974f05a3dbe6aca3f5b7f3/assets/Bottom_up.svg" 
          width="100%" 
          alt="Welcome"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-amber-500 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500 rounded-full blur-3xl animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting with Animation */}
            <div className="space-y-4 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                Hello, I&apos;m
              </h1>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent leading-tight animate-gradient">
                Roshan Gupta
              </h2>
            </div>

            {/* Skills Heading with Typing Effect */}
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-tight">
              <span>I am a </span>
              <ReactTypingEffect
                text={[
                  'Full Stack Developer',
                  'App Developer',
                  'UI/UX Designer',
                  'Problem Solver',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-yellow-400 animate-pulse">{cursor}</span>
                )}
              />
            </div>

            {/* About Me Paragraph */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am a dedicated third-year Computer Science student and full-stack developer with experience building scalable web applications. Skilled in both front-end and back-end development, I specialize in modern technologies to deliver seamless user experiences and robust solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/16V15Bm3odebbVNaD_pSb87Xu_82irLvk/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25 animate-bounce-in"
              >
                Download CV
              </a>
              
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-bounce-in-delay"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <Tilt
              className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 border-4 border-yellow-400/30 rounded-full shadow-2xl shadow-yellow-500/20 animate-float"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={profileImage}
                  alt="Roshan Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
            </Tilt>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default About;
