import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCertificate,
  FaFolder,
  FaFilePdf,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div>
        <main>
          {/* First Section */}
          <section className="bg-white dark:bg-gray-900 sm:min-h-screen flex relative justify-start items-center flex-col sm:flex-row">
            <div className="fixed left-4 bottom-4 flex items-center space-x-4 text-[#275b97] z-50">
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
            <div className="ml-4 mt-20 sm:ml-10 md:ml-20 lg:ml-24 mt-4 sm:mt-8 text-center relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#141e30] to-[#243b55] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt slide-in-profile"></div>
              <div className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full slide-in-profile mx-auto group-hover:shadow-lg relative z-10">
                <img
                  src="/IMG_0121.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="p-10 mt-8 flex flex-col text-center sm:text-left">
              <h1 className="text-2xl xl:text-4xl py-2 font-poppins font-bold slide-in">
                Hello World 🌏
              </h1>
              <p className="text-black text-sm xl:text-lg py-2 font-poppins slide-in mx-auto sm:mx-0">
                I'm{" "}
                <span className="text-sm xl:text-lg font-bold text-[#141e30] hover:text-[#243b55] transition-colors duration-300">
                  Mitchie
                </span>
                , from the Philippines 📍. I hold a bachelor's degree in
                Information Technology, specializing in web development 💻 with
                a decent background in both front-end and back-end development.
                <br />
                <br />
                In addition to my technical skills, I have a background in
                graphic design, which I occasionally incorporate into my
                projects.
                <br />
                <br />
                If you'd like to connect, don't hesitate to reach out via Email
                or LinkedIn. Thank you for taking the time to visit! 🌟
              </p>

              {/* Tech Stack */}
              <div className="flex flex-col xl:flex-row space-x-4 py-2 items-center slide-in">
                <h3 className="text-md xl:text-xl py-2 font-poppins font-bold">
                  Tech Stack
                </h3>
                <div className="flex flex-nowrap space-x-4 overflow-x-auto">
                  {/* HTML */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="HTML"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* CSS */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="CSS"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* JavaScript */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* PHP */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    alt="PHP"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* MySQL */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg"
                    alt="MySQL"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* CodeIgniter */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain-wordmark.svg"
                    alt="CodeIgniter"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* Laravel */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"
                    alt="Laravel"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* React */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="React"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* Tailwind CSS */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    alt="Tailwind CSS"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                  {/* Bootstrap */}
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 max-w-full"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex mt-4 space-x-4 justify-center sm:justify-start">
                <a
                  href="/Resume.pdf"
                  download="Mitchie Gaspar - Resume.pdf"
                  className="bg-[#141e30] hover:bg-[#243b55] text-white py-1 px-2 sm:py-2 sm:px-4 rounded-lg flex items-center space-x-2 slide-in"
                >
                  <FaFilePdf className="text-lg sm:text-base" />
                  <span className="text-xs sm:text-sm">Resume</span>
                </a>
                <a
                  href="mailto:gasparmitchie@gmail.com"
                  className="bg-[#141e30] hover:bg-[#243b55] text-white py-1 px-2 sm:py-2 sm:px-4 rounded-lg flex items-center space-x-2 slide-in"
                >
                  <FaEnvelope className="text-lg sm:text-base" />
                  <span className="text-xs sm:text-sm">Send Me An Email!</span>
                </a>
              </div>
            </div>
          </section>

          {/* Second Section */}
          <section className="bg-gradient-to-br from-[#141e30] to-[#243b55] flex relative justify-start items-center flex-col overflow-hidden">
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
