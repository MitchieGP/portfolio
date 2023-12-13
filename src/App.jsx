import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGraduationCap,
  FaSortAmountUp,
  FaCode,
  FaCogs,
  FaPaintBrush,
  FaCertificate,
  FaFolder,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div>
        <main>
          {/* First Section */}
          <section className="bg-white dark:bg-gray-900 sm:min-h-screen flex relative justify-start items-center flex-col sm:flex-row">
            {/* GitHub and LinkedIn Icons */}
            <div className="fixed left-4 bottom-4 flex items-center space-x-4 text-blue-500 z-50">
              <a
                href="https://github.com/MitchieGP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:opacity-70" />
              </a>
              <a
                href="https://www.linkedin.com/in/mitchie-gaspar-70040a234/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:opacity-70" />
              </a>
            </div>

            {/* Content */}
            <div className="ml-4 sm:ml-10 md:ml-20 lg:ml-24 mt-4 sm:mt-0 text-center">
              <div className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full slide-in-profile mx-auto">
                <img
                  src="/IMG_0121.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="p-10 flex flex-col">
              <h2 className="text-black text-lg xl:text-3xl py-2 font-poppins slide-in">
                Hi I'm{" "}
                <span className="text-lg xl:text-3xl font-bold text-blue-500 hover:text-blue-600 transition-colors duration-300">
                  Mitchie
                </span>
                , a Web Developer and a Graphic Design Enthusiast.
              </h2>
              <div className="flex mt-4">
                <a
                  href="mailto:gasparmitchie@gmail.com"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 sm:py-2 sm:px-4 rounded-lg flex items-center space-x-2 slide-in"
                >
                  <FaEnvelope className="text-lg sm:text-base" />
                  <span className="text-xs sm:text-sm">Send Me An Email!</span>
                </a>
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="bg-gradient-to-br from-[#141e30] to-[#243b55] flex relative justify-start items-center flex-col overflow-hidden">
            <h2 className="text-2xl md:text-4xl text-white py-2 font-poppins mt-8 sm:mt-16 md:mt-24">
              <FaGraduationCap className="text-4xl md:text-5xl inline-block mr-2" />{" "}
              Education
            </h2>

            <hr className="w-24 h-1 bg-white my-4 mx-auto" />

            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {/* Junior High School Card */}
              <div className="text-white bg-[#141e30] shadow-lg rounded-lg p-4 w-72 sm:w-80 md:w-96 group transition-all hover:scale-105 hover:shadow-md duration-300 flex flex-col items-center justify-center">
                <img
                  src="/mnhs.png"
                  alt="Malabon National High School"
                  className="rounded-t-lg w-1/2 md:w-2/1 xl:w-2/3"
                />
                <h3 className="text-sm sm:text-md md:text-base font-semibold mt-2">
                  Malabon National High School
                </h3>
                <p className="text-sm sm:text-md md:text-base">2013 - 2017</p>
                <p className="text-sm sm:text-md md:text-base mt-2 text-center">
                  High School Diploma
                </p>
              </div>

              {/* Senior High School Card */}
              <div className="text-white bg-[#141e30] shadow-lg rounded-lg p-4 w-72 sm:w-80 md:w-96 group transition-all hover:scale-105 hover:shadow-md duration-300 flex flex-col items-center justify-center">
                <img
                  src="/au.png"
                  alt="Arellano University - EEC"
                  className="rounded-t-lg w-1/2 md:w-2/1 xl:w-2/3"
                />
                <h3 className="text-sm sm:text-md md:text-base font-semibold mt-2">
                  Arellano University - EEC
                </h3>
                <p className="text-sm sm:text-md md:text-base">2017 - 2019</p>
                <p className="text-sm sm:text-md md:text-base mt-2 text-center">
                  TVL-ICT (Computer Programming)
                </p>
              </div>

              {/* Tertiary Card */}
              <div className="text-white bg-[#141e30] shadow-lg rounded-lg p-4 w-72 sm:w-80 md:w-96 group transition-all hover:scale-105 hover:shadow-md duration-300 flex flex-col items-center justify-center">
                <img
                  src="/tup.png"
                  alt="Technological University of the Philippines - Manila"
                  className="rounded-t-lg w-1/2 md:w-2/1 xl:w-2/3"
                />
                <h3 className="text-sm sm:text-md md:text-base font-semibold mt-2">
                  TUP - Manila
                </h3>
                <p className="text-sm sm:text-md md:text-base">2019 - 2023</p>
                <p className="text-sm sm:text-md md:text-base mt-2 text-center">
                  Bachelor of Science in Information Technology
                </p>
              </div>
            </div>

            {/* Skills */}
            <h2 className="text-2xl md:text-4xl text-white py-2 font-poppins mt-8 sm:mt-16 md:mt-24">
              <FaSortAmountUp className="text-2xl md:text-4xl inline-block mr-2" />{" "}
              Skills
            </h2>

            <hr className="w-24 h-1 bg-white my-4 mx-auto" />

            <ul className="text-white font-poppins text-lg list-disc list-inside">
              <li className="text-sm sm:text-md md:text-base hover:scale-105 transform transition-transform">
                Communication
              </li>
              <li className="text-sm sm:text-md md:text-base hover:scale-105 transform transition-transform">
                Computer Literate
              </li>
              <li className="text-sm sm:text-md md:text-base hover:scale-105 transform transition-transform">
                Detail Oriented
              </li>
              <li className="text-sm sm:text-md md:text-base hover:scale-105 transform transition-transform">
                Fast Learner
              </li>
              <li className="text-sm sm:text-md md:text-base hover:scale-105 transform transition-transform">
                Problem Solving
              </li>
              <li className="text-sm sm:text-md md:text-base hover:scale-105 transform transition-transform">
                Teamwork and Collaboration
              </li>
              <li className="text-sm sm:text-md md:text-base hover:scale-105 transform transition-transform">
                Troubleshooting
              </li>
            </ul>

            {/* Languages and Tools */}
            <h2 className="text-2xl md:text-4xl text-white py-2 font-poppins mt-8 sm:mt-16 md:mt-24">
              <FaCode className="text-2xl md:text-4xl inline-block mr-2" />{" "}
              Languages and Tools
            </h2>

            <hr className="w-24 h-1 bg-white my-4 mx-auto" />

            <div className="flex flex-wrap justify-center sm:flex-row">
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-blue-400 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  alt="PHP"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-yellow-400 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-blue-900 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
                  alt="MySQL"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-white hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                  alt="GitHub"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
            </div>

            {/* Frameworks */}
            <h2 className="text-2xl md:text-4xl text-white py-2 font-poppins mt-8 sm:mt-16 md:mt-24">
              <FaCogs className="text-2xl md:text-4xl inline-block mr-2" />{" "}
              Frameworks
            </h2>

            <hr className="w-24 h-1 bg-white my-4 mx-auto" />

            <div className="flex flex-wrap justify-center sm:flex-row">
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-orange-500 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain-wordmark.svg"
                  alt="CodeIgniter"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-orange-600 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"
                  alt="Laravel"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-sky-400 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                  alt="React"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-teal-400 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt="Tailwind CSS"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-purple-600 hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                  alt="Bootstrap"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
            </div>

            {/* Editing Softwares */}
            <h2 className="text-2xl md:text-4xl text-white py-2 font-poppins mt-8 sm:mt-16 md:mt-24">
              <FaPaintBrush className="text-2xl md:text-4xl inline-block mr-2" />{" "}
              Editing Softwares
            </h2>

            <hr className="w-24 h-1 bg-white my-4 mx-auto" />

            <div className="flex flex-wrap justify-center sm:flex-row">
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-[#81acca] hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                  alt="Photoshop"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
              <div className="transition-all bg-[#141e30] p-2 sm:p-5 m-2 shadow-lg rounded-lg w-24 sm:w-48 md:w-64 flex justify-center items-center border border-gray-900 hover:border-[#f8a829] hover:scale-110">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                  alt="Illustrator"
                  className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />
              </div>
            </div>

            {/* Certifications */}
            <h2 className="text-2xl md:text-4xl text-white py-2 font-poppins mt-8 sm:mt-16 md:mt-24">
              <FaCertificate className="text-2xl md:text-4xl inline-block mr-2" />{" "}
              Certifications
            </h2>

            <hr className="w-24 h-1 bg-white my-4 mx-auto" />

            {/* Certification Card 1 */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-white bg-[#141e30] shadow-lg rounded-lg p-4 w-72 sm:w-80 md:w-96 group transition-all hover:scale-105 hover:shadow-md duration-300 flex flex-col items-center justify-center">
                <a
                  href="/cybersecurity.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/cybersecurity.png"
                    alt="Cybersecurity Certification"
                    width={300}
                    height={200}
                    className="rounded-t-lg"
                  />
                </a>
                <p className="font-poppins mt-2 text-center">
                  Cybersecurity in 21st Century
                </p>
              </div>

              {/* Certification Card 2 */}
              <div className="text-white bg-[#141e30] shadow-lg rounded-lg p-4 w-72 sm:w-80 md:w-96 group transition-all hover:scale-105 hover:shadow-md duration-300 flex flex-col items-center justify-center">
                <a href="/quest.png" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/quest.png"
                    alt="Quest Certification"
                    width={300}
                    height={200}
                    className="rounded-t-lg"
                  />
                </a>
                <p className="font-poppins mt-2 text-center">
                  QUEST: Quality Evaluation and Assurance in Software Testing
                </p>
              </div>

              {/* Certification Card 3 */}
              <div className="text-white bg-[#141e30] shadow-lg rounded-lg p-4 w-72 sm:w-80 md:w-96 group transition-all hover:scale-105 hover:shadow-md duration-300 flex flex-col items-center justify-center">
                <a
                  href="/quantumcomputing.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/quantumcomputing.png"
                    alt="Quantum Computing Certification"
                    width={300}
                    height={200}
                    className="rounded-t-lg"
                  />
                </a>
                <p className="font-poppins mt-2 text-center">
                  Quantum Computing: Are You Ready for the Future of Computing?
                </p>
              </div>
            </div>

            {/* Projects */}
            <h2 className="text-2xl md:text-4xl text-white py-2 font-poppins mt-8 sm:mt-16 md:mt-24">
              <FaFolder className="text-2xl md:text-4xl inline-block mr-2" />{" "}
              Projects
            </h2>

            <hr className="w-24 h-1 bg-white my-4 mx-auto" />

            <div className="text-white bg-[#141e30] shadow-lg rounded-lg p-4 w-72 sm:w-80 md:w-96 group transition-all hover:scale-105 hover:shadow-md duration-300 flex flex-col items-center justify-center">
              <a
                href="https://lsls-edu.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/sms.png"
                  alt="School Management System"
                  width={300}
                  height={200}
                  className="rounded-t-lg"
                />
              </a>
              <p className="font-poppins mt-2 text-center">
                School Management System
              </p>
            </div>
            <br />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
