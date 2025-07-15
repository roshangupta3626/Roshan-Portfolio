import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-amber-500 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-500 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            <span className="text-white">Education </span>
            <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            My education has been a journey of learning and development. Here are the details of my academic background
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 to-amber-500 h-full hidden lg:block"></div>

          {/* Education Entries */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                }`}
              >
                {/* Timeline Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-yellow-400 w-14 h-14 rounded-full flex justify-center items-center z-10 hidden lg:flex shadow-lg">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-10 h-10 object-contain rounded-full bg-white"
                  />
                </div>

                {/* Content Section */}
                <div
                  className={`w-full lg:max-w-md p-6 lg:p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/10 transform hover:scale-105 ${
                    index % 2 === 0 ? "lg:mr-auto lg:pr-16" : "lg:ml-auto lg:pl-16"
                  }`}
                >
                  {/* Header with School Info */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-20 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-lg flex items-center justify-center">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <h4 className="text-yellow-300 font-medium">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-gray-400">{edu.date}</p>
                    </div>
                  </div>

                  {/* Grade and Description */}
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      <span className="font-semibold text-white">Grade: </span>
                      <span className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-300 px-2 py-1 rounded-lg border border-yellow-400/30">
                        {edu.grade}
                      </span>
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 hover:border-amber-400/50 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">📚</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I believe in lifelong learning and constantly seek opportunities to expand my knowledge 
              and skills through both formal education and self-directed learning.
            </p>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50"></div>
    </section>
  );
};

export default Education;
