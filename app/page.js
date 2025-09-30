"use client";
import { useState, useEffect } from "react";
import ProjectSection from "../components/ProjectSection";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaCloudRain,
  FaReact,
  FaArrowDown,
  FaPython,
  FaJs,
  FaRProject,
  FaGithub,
  FaChartPie,
  FaDatabase,
  FaLock,
  FaAws,
  FaGoogle,
  FaCreditCard,
  FaChartBar,
  FaCode,
  FaVial,
  FaComment,
  FaPen,
  FaUsers,
  FaLightbulb,
  FaBolt,
  FaChalkboardTeacher,
  FaSitemap,
} from "react-icons/fa";

export default function Home() {
  const openAccordionSection = (id) => {
    const section = document.getElementById(id);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  };

  const [projects, setProjects] = useState(null);
  const [upcoming, setUpcoming] = useState(null);

  useEffect(() => {
    const scrollToProject = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const id = queryParams.get("id");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToProject();
  }, [projects]);

  const myStack = [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "SCSS",
    "TailwindCSS",
    "Git & GitHub",
    "Node.js ",
    "Express.js",
    "MongoDB",
    "+ more!",
  ];

  const icons = {
    React: <FaReact />,
    "Next.js": <FaJs />,
    Python: <FaPython />,
    Django: <FaPython />,
    JavaScript: <FaJs />,
    GitHub: <FaGithub />,
    Git: <FaGithub />,
    Figma: <FaCode />,
    VSCode: <FaCode />,
    "Node.js": <FaJs />,
    "HTML/CSS": <FaCode />,
    TailwindCSS: <FaCode />,
    SQL: <FaDatabase />,
    PostgresSQL: <FaDatabase />,
    MongoDB: <FaDatabase />,
    Mongoose: <FaDatabase />,
    AWS: <FaAws />,
    Jest: <FaVial />,
    R: <FaRProject />,
    Supertest: <FaVial />,
    Kinde: <FaLock />,
    tRPC: <FaDatabase />,
    TypeScript: <FaJs />,
    Express: <FaDatabase />,
    "Google API": <FaGoogle />,
    Stripe: <FaCreditCard />,
    "Aceternity UI": <FaCode />,
    "OpenWeather API": <FaCloudRain />,
  };

  useEffect(
    () =>
      setProjects([
        {
          name: "Hospital Management System",
          description:
            "Hospital Management System , React.js , Next Js , Mongodb, Express , Node",
          mainimage: "/project1image.png",
          screenshot1: "/project1shot1.png",
          screenshot2: "/project1shot2.png",
          screenshot3: "/project1shot3.png",
          screenshot4: "/project1shot4.png",
          techstack: [
            "React",
            "Javascript",
            "TailwindCSS",
            "React Routers",
            "MongoDB",
            "HTML",
            "Node.Js",
            "Next.React Context API",
            "GitHub",
            "Express.js",
          ],
          story:
            "Developed a full-stack Hospital Management System using the MERN stack, enabling users to book appointments, select doctors, and manage healthcare interactions               Implemented secure authentication, dynamic dashboards, and real-time data handling for a seamless user experience",
          link: "https://github.com/Sanskriti6nirmal/hospital-management-",
          repo: "https://github.com/Sanskriti6nirmal/hospital-management-",
          id: "project1",
        },
        {
          name: "Menu Card UI",
          description: "Pizza Menu Card UI",
          mainimage: "/project2image.png",
          screenshot1: "/project2shot1.png",
          techstack: [
            "React.js",
            "Javascript",
            "TailwindCSS",
            "HTML",
            "Vite",
            "Framer Motion",
            "Css",
          ],
          story:
            "A modern, responsive pizza menu card UI built with React. Focuses on clean design, smooth hover effects, and a user-friendly layout.",
          link: "https://pizza-menu-three-psi.vercel.app/",
          repo: "https://github.com/Sanskriti6nirmal/pizza_menu",
          id: "project2",
        },
        {
          name: "Travel Buddy ✈️",
          description: "travel list ",
          mainimage: "/project3image.png",
          screenshot1: "/project3shot1.png",
          screenshot2: "/project3shot2.png",
          techstack: ["React", "Javascript(ES6)", "TailwindCSS", "HTML"],
          story:
            "A simple and interactive packing list app to help travelers organize what to pack. Add, manage, sort, and clear items with ease — perfect for planning your next adventure!",
          link: "https://travell-list.vercel.app/",
          repo: "https://github.com/Sanskriti6nirmal/travell-list",
          id: "project3",
        },
      ]),
    []
  );
  useEffect(
    () =>
      setUpcoming([
        {
          name: "Wild Oasis Website",
          description:
            "A modern hotel booking web app for managing rooms, guests, and reservations.”",
          techstack: [
            "React.js",
            "Next.js",
            "TailwindCSs",
            "Javascript(Es6)",
            "GitHub",
          ],
          repo: "https://github.com/Sanskriti6nirmal/the-wild-oasis-website",
        },
        {
          name: "News Explorer App",
          description:
            "A responsive web app for browsing and exploring trending news articles by category or keyword.",
          techstack: [
            "React",
            "Next.js",
            "TailwindCSS",
            "Javascript(es6)",
            "GitHub",
          ],
          repo: "https://github.com/Sanskriti6nirmal/News-Explorer-App",
        },
        {
          name: "Project management App",
          description:
            "A powerful and intuitive Project Management App designed to help teams and individuals plan, organize, and track their work seamlessly.",
          techstack: [
            "React",
            "Next.js",
            "TailwindCSS",
            "Javascript(Es6)",
            "GitHub",
          ],
          repo: "https://github.com/Sanskriti6nirmal/Project-Management-App-React",
        },
      ]),
    []
  );

  return (
    <main className="w-full z-0">
      <div
        id="home"
        className="pt-16 sm:pt-32 flex flex-col items-center justify-between min-h-screen bg-[url('/avatar2.png')] bg-no-repeat bg-right-bottom z-0"
      >
        <div className="text-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -200, z: 0 }}
            whileInView={{ opacity: 1, x: 0, z: 0 }}
            transition={{ duration: 1.1 }}
            className="text-3xl sm:text-4xl bg-gradient-to-l from-white/90 to-accent-one/90 bg-opacity-80 border border-accent-one rounded-full px-10 py-10 md:p-10 mt-2 sm:mt-6 shadow-lg w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mb-5"
          >
            <h1 className="p-3">Hi! I'm Sanskriti.</h1>
            <p className="text-xl sm:text-2xl my-3">
              I’m a Full-Stack Software Developer specializing in the MERN
              Stack. I use:
            </p>
            <div className="w-full flex flex-row flex-wrap items-center justify-center">
              {myStack &&
                myStack.map((tech, index) => (
                  <motion.div
                    initial={{ x: 60 }}
                    whileInView={{ x: [60, 0, -10, 0] }}
                    transition={{
                      duration: 0.6,
                      once: true,
                      delay: index * 0.1,
                    }}
                    key={index}
                    className="text-lg lg:text-xl w-fit flex flex-row items-center text-colour-text bg-gradient-to-r from-accent-one via-accent-one to-white p-3 mr-4 my-2 rounded-lg"
                  >
                    {icons[tech]}
                    <p className="px-2">{tech}</p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200, z: 0 }}
            whileInView={{ opacity: 1, x: 0, z: 0 }}
            transition={{ duration: 1.1 }}
            className="text-3xl bg-gradient-to-tr from-accent-two/80 to-accent-two/90 bg-opacity-80 border border-accent-two rounded-full p-10 2xl:mt-10 shadow-lg w-8/12 lg:w-5/12 mx-auto"
          >
            <p className="text-lg md:text-2xl">Find me here:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="flex flex-row">
                <a
                  href="https://www.linkedin.com/in/sanskritinirmal/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                <span className="p-3"></span>
                <a href="https://github.com/Sanskriti6nirmal" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <span className="p-3"></span>
                <a href="mailto:nirmalsanskruti6@gmail.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
                  </svg>
                </a>
              </div>
              <p className="py-5 sm:p-5 text-lg md:text-2xl">
                <a
                  href="./Sanskriti_Nirmal_Resume.pdf"
                  target="_blank"
                  className="font-bold hover:text-white hover:bg-colour-text rounded-xl border-colour-text border-2 p-3"
                >
                  Download Resume
                </a>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 0, z: 0 }}
            animate={{ y: [0, -8, 0], z: 0 }}
            transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
            className="bg-gradient-radial from-white via-white/10 to-transparent w-full sm:w-1/2 mx-auto rounded-full p-4 right-1/2"
          >
            <a
              className="text-colour-link text-lg sm:text-xl underline decoration-dotted px-16 py-6"
              href="#projects"
              id="projectslink"
            >
              <p>See examples of my work</p>
              <FaArrowDown className="text-colour-link text-3xl sm:text-5xl mx-auto" />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="bg-colour-text" id="projects">
        {projects &&
          projects.map((project) => (
            <div key={project.id} id={project.id}>
              <ProjectSection project={project}></ProjectSection>
            </div>
          ))}
        <div className="h-full sm:h-screen pt-16 sm:pt-32 flex flex-col justify-center">
          <h1 className="text-3xl text-center text-colour-navs">
            Coming soon:
          </h1>
          <div className="flex flex-col sm:flex-row sm:justify-around">
            {upcoming &&
              upcoming.map((project, index) => (
                <div
                  key={index}
                  className="bg-colour-navs p-3 m-5 rounded-lg shadow-lg flex flex-col sm:w-4/12 text-lg sm:text-xl"
                >
                  <h1 className="text-xl sm:text-2xl">{project.name}</h1>
                  <p>{project.description}</p>
                  <a
                    href={project.repo}
                    className="m-2 bg-accent-two p-3 rounded-lg hover:font-bold"
                  >
                    Github repo
                  </a>
                  <div className="flex flex-row flex-wrap">
                    {project.techstack &&
                      project.techstack.map((tech, index) => (
                        <motion.div
                          initial={{ x: 60 }}
                          whileInView={{ x: [60, 0, -10, 0] }}
                          transition={{
                            duration: 0.6,
                            once: true,
                            delay: index * 0.1,
                          }}
                          key={index}
                          className="w-fit flex flex-row text-colour-text bg-gradient-to-r from-accent-one via-accent-one to-white p-3 mr-4 my-2 rounded-lg"
                        >
                          {icons[tech]}
                          <p className="px-2">{tech}</p>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div
        id="skills"
        className="grid grid-cols-1 sm:grid-cols-2 min-h-screen pt-16 sm:pt-32 z-0 mx-auto w-full bg-gradient-to-br from-accent-one via-accent-one/80 to-colour-link/80"
      >
        <div className="col-span-1 w-11/12">
          <h3 className="text-3xl p-3 bg-gradient-to-l from-accent-one to-white shadow-lg w-full my-5 rounded-r-full">
            Proficient in:
          </h3>

          {/* React & Next.js */}
          <button
            onClick={() => openAccordionSection("react")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">React & Next.js</p>
          </button>
          <div
            id="react"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              6 months' experience building full-stack MERN & Next.js projects.
            </p>
          </div>
          {/* DSA */}
          <button
            onClick={() => openAccordionSection("dsa")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaSitemap className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Data Structures & Algorithms (DSA)</p>
          </button>
          <div
            id="dsa"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Medium-level understanding of Data Structures & Algorithms
              including arrays, linked lists, stacks, queues, trees, and basic
              graph concepts.
            </p>
            <p className="px-5 py-3 text-lg">
              Comfortable applying DSA for problem solving and logic building in
              JavaScript.
            </p>
          </div>

          {/* Node.js */}
          <button
            onClick={() => openAccordionSection("node")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Node.js</p>
          </button>
          <div
            id="node"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Beginner-level experience building backends using Node.js.
            </p>
          </div>

          {/* Express.js */}
          <button
            onClick={() => openAccordionSection("express")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaDatabase className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Express.js</p>
          </button>
          <div
            id="express"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Beginner-level experience creating RESTful APIs with Express.js.
            </p>
          </div>

          {/* HTML/CSS & TailwindCSS */}
          <button
            onClick={() => openAccordionSection("html")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaCode className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">HTML/CSS & TailwindCSS</p>
          </button>
          <div
            id="html"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              2 years experience creating responsive designs using modern HTML,
              CSS & TailwindCSS.
            </p>
          </div>

          {/* JavaScript */}
          <button
            onClick={() => openAccordionSection("javascript")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaJs className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">JavaScript</p>
          </button>
          <div
            id="javascript"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              1 year experience writing clean, modern JavaScript for frontend.
            </p>
          </div>
          {/* SQL */}
          <button
            onClick={() => openAccordionSection("sql")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaDatabase className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">SQL</p>
          </button>
          <div
            id="sql"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Strong working knowledge of writing complex queries, designing
              relational databases.
            </p>
          </div>

          {/* Git & GitHub */}
          <button
            onClick={() => openAccordionSection("git")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaGithub className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Git & GitHub</p>
          </button>
          <div
            id="git"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Good experience managing code with Git & collaborating on GitHub.
            </p>
          </div>
        </div>

        <div className="col-span-1 w-11/12">
          <h3 className="text-3xl p-3 bg-gradient-to-l from-accent-one to-white shadow-lg w-full my-5 rounded-r-full">
            Soft Skills:
          </h3>

          {/* Communication */}
          <button
            onClick={() => openAccordionSection("communication")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaComment className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Communication</p>
          </button>
          <div
            id="communication"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Strong verbal and written communication skills for team & client
              work.
            </p>
          </div>
          {/* Self-Motivation */}
          <button
            onClick={() => openAccordionSection("selfmotivation")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaBolt className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Self-Motivation</p>
          </button>
          <div
            id="selfmotivation"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Proactive in taking initiative, learning new skills independently,
              and delivering work without constant supervision.
            </p>
          </div>

          {/* Presentation Skills */}
          <button
            onClick={() => openAccordionSection("presentation")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaChalkboardTeacher className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Presentation Skills</p>
          </button>
          <div
            id="presentation"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Confident at presenting technical work and projects clearly to
              peers, mentors, or stakeholders.
            </p>
          </div>

          {/* Team Leadership */}
          <button
            onClick={() => openAccordionSection("leadership")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaUsers className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Team Leadership</p>
          </button>
          <div
            id="leadership"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Able to guide tasks, help coordinate small teams & manage
              deadlines.
            </p>
          </div>

          {/* Problem Solving */}
          <button
            onClick={() => openAccordionSection("problemsolving")}
            className="flex flex-row items-center px-5 hover:font-bold duration-200"
          >
            <FaLightbulb className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Problem Solving</p>
          </button>
          <div
            id="problemsolving"
            className="hidden flex flex-col items-center w-11/12 z-0"
          >
            <p className="px-5 py-3 text-lg">
              Quick thinker who loves finding solutions & improving workflows.
            </p>
          </div>

          <h3 className="text-3xl p-3 bg-gradient-to-l from-accent-one to-white shadow-lg w-full my-5 rounded-r-full">
            Some knowledge of:
          </h3>
          <div className="flex flex-row items-center px-5">
            <FaVial className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Software Testing</p>
          </div>
          <div className="flex flex-row items-center px-5">
            <FaCloudRain className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Firebase</p>
          </div>

          <div className="flex flex-row items-center px-5">
            <FaPython className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Python</p>
          </div>

          <div className="flex flex-row items-center px-5">
            <FaChartPie className="text-colour-text text-3xl" />
            <p className="px-3 text-2xl">Basic Data Visualization</p>
          </div>
        </div>

        <motion.div
          initial={{ y: 0, z: 0 }}
          animate={{ y: [0, -8, 0], z: 0 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
          className="col-span-1 sm:col-span-2 bg-gradient-radial from-white via-white/5 to-transparent w-full sm:w-1/2 mx-auto rounded-full p-8 sm:mt-20"
        >
          <a
            className="text-colour-link text-lg sm:text-xl underline decoration-dotted px-16 py-6 text-center"
            href="#about"
          >
            <p>Find out more about me</p>
            <FaArrowDown className="text-colour-link text-3xl sm:text-5xl mx-auto" />
          </a>
        </motion.div>
      </div>

      <div
        id="about"
        className="w-full flex flex-col min-h-screen items-center bg-gradient-to-b from-white via-accent-two/20 to-accent-two pt-16 sm:pt-32"
      >
        <motion.img
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-1/2 sm:w-3/12 md:w-1/12 sm:pt-4"
          src="/favicon.ico"
          alt="profile"
        />
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col items-center p-8 my-2 sm:my-5 text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-white/40 to-white/20 rounded-xl"
        >
          I'm a passionate Front-End Developer who loves creating beautiful,
          responsive, and interactive websites. I enjoy combining clean design
          with smart functionality to deliver meaningful digital experiences.
          <br></br>
          <br></br>When I’m not coding, you’ll find me exploring new design
          trends, curating cute aesthetics, or enjoying a good cup of coffee
          with my favorite playlist in the background.
          <br></br>
          <br></br>I’m always excited to learn new technologies and work on
          projects that make a positive impact. I’m currently open to
          internships,job opportunities, and exciting collaborations — let’s
          build something amazing together!
        </motion.div>
        <motion.a
          initial={{ y: 0, z: 0 }}
          animate={{ y: [0, -8, 0], z: 0 }}
          transition={{ repeat: Infinity, duration: 1.1, ease: "easeOut" }}
          className="bg-accent-two border-white/40 border-4 rounded-full text-2xl my-10 p-5 hover:bg-white"
          href="/contact"
        >
          Get in touch
        </motion.a>
      </div>
    </main>
  );
}
