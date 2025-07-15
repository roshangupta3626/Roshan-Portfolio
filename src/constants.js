// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
// import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
// import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import outlierLogo from './assets/company_logo/outlier.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import lpuLogo from './assets/education_logo/lpulogo.png';
import ddmodelLogo from './assets/education_logo/ddmodel.png';
import stjosephLogo from './assets/education_logo/stjoseph.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
// import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: outlierLogo,
      role: "Fullstack Developer | Freelancer",
      company: "Online Digital & Outlier Platform",
      date: "November 2024 - Present",
      desc: "Experienced Fullstack Developer with expertise in MERN stack development and international freelancing. Successfully delivered scalable web applications and completed USDT-based international projects. Demonstrated strong problem-solving skills, team collaboration, and client communication while maintaining high code quality and responsive design standards.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        "Next Js",
        "Team Collaboration",
        "Problem-solving",
        "Client Communication",
        "Responsive Design",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: lpuLogo,
      school: "Lovely Professional University, Phagwara",
      date: "Sept 2022 - July 2026",
      grade: "7.51 CGPA",
      desc: "Currently pursuing my B.Tech in Computer Science & Engineering at LPU. The curriculum covers core areas like Data Structures, Algorithms, Web Development, and Software Engineering, providing hands-on experience through projects and internships.",
      degree: "B.Tech in CSE",
    },
    
    {
      id: 1,
      img: ddmodelLogo,
      school: "D.D. Model School, Uttar Pradesh",
      date: "Apr 2020 - March 2022",
      grade: "1st Division",
      desc: "I completed my Class 12th from D.D. Model School, Mathura, with a First Division, focusing on Physics, Chemistry, Mathematics, and Computer Science.",
      degree: "CBSE (XII) - PCM",
    },
    {
      id: 3,
      img: stjosephLogo,
      school: "St. Joseph School, Masirpur Lalganj",
      date: "Apr 2018 - March 2020",
      grade: "1st Division",
      desc: "I completed my Class 10 education from St. Joseph School, Masirpur Lalganj, securing a First Division with a strong foundation in core subjects.",
      degree: "High School - Class X",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Checker",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/roshangupta3626/GitHub-Profile-Search-App-react",
      webapp: "https://githubprochecker.vercel.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/roshangupta3626/movie-recommendation-app",
      webapp: "https://moviehouse-ten.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "#", // TODO: Update with real repository link
      webapp: "#", // TODO: Update with real live demo link
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "#", // TODO: Update with real repository link
      webapp: "#", // TODO: Update with real live demo link
    },
    {
      id: 5,
      title: "Guess Game",
      description:
        "An interactive number guessing game built with HTML, CSS, and JavaScript. Players need to guess a randomly generated number within a specified range. The game provides feedback on whether the guess is too high or too low, making it an engaging and educational experience for users of all ages.",
      image: webverLogo,
      tags: ["React JS", "JavaScript", "Framer Motion"],
      github: "https://github.com/roshangupta3626/Guess-Game-Reactjs",
      webapp: "https://guessgame-livid.vercel.app/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "#", // TODO: Update with real repository link
      webapp: "#", // TODO: Update with real live demo link
    },
    {
      id: 7,
      title: "Weather Information App",
      description:
        "A comprehensive weather application built with React.js that provides real-time weather information for cities worldwide. Users can search for any city and get detailed weather data including temperature, humidity, wind speed, and weather conditions. The app features a clean, responsive design with dynamic weather icons and provides both current weather and forecast information.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Weather API", "CSS", "Javascript"],
      github: "https://github.com/roshangupta3626/Weather-App-Reactjs",
      webapp: "https://cityweather-alpha.vercel.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/roshangupta3626",
      webapp: "https://github.com/roshangupta3626",
    },
  ];  
