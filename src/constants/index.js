import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mathematics Tutor",
    company_name: "Hovard Academy",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Tutored students in algebra, geometry, and calculus to strengthen foundational mathematical skills.",
      "Created step-by-step problem-solving guides to simplify complex concepts.",
      "Helped learners prepare for exams through practice problems and mock tests.",
      "Encouraged logical reasoning and critical thinking through interactive lessons.",
    ],
  },
  {
    title: "Quantitative Analyst",
    company_name: "Tesla",
    icon: docker,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Applied advanced mathematics and statistics to analyze data and optimize solutions.",
      "Built mathematical models to improve efficiency and problem-solving accuracy.",
      "Collaborated with engineers to apply numerical methods in real-world scenarios.",
      "Presented analytical insights using mathematical visualization techniques.",
    ],
  },
  {
    title: "Math Curriculum Developer",
    company_name: "Shopify",
    icon: typescript,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Designed engaging math learning modules covering algebra, trigonometry, and calculus.",
      "Developed interactive problem sets to improve problem-solving ability in students.",
      "Ensured mathematical accuracy and clarity in curriculum content.",
      "Worked with educators to align content with international math standards.",
    ],
  },
  {
    title: "Researcher in Applied Mathematics",
    company_name: "Meta",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Conducting research in applied mathematics and exploring real-world problem-solving approaches.",
      "Developing algorithms and mathematical proofs to support innovation in technology.",
      "Collaborating with researchers and scientists to apply mathematics in AI and data science.",
      "Publishing findings and contributing to the advancement of modern mathematics.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I used to struggle with algebra, but Zainy's explanations made everything crystal clear. Math feels so easy now!",
    name: "Sara Lee",
    designation: "High School Student",
    company: "Springfield Academy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The personalized math tutoring helped me not only pass my exams but also develop a genuine love for problem-solving.",
    name: "Chris Brown",
    designation: "College Student",
    company: "DEF University",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After practicing with these math resources, my SAT math score improved dramatically. Highly recommended for all learners!",
    name: "Lisa Wang",
    designation: "Graduate Applicant",
    company: "456 Preparatory School",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Algebra Solver",
    description:
      "An interactive web-based platform that helps students solve algebraic equations step by step, reinforcing problem-solving skills through guided practice.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mathjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrLlA1zv206oz9DV9mBVytlXXYQYqv19ubA&s",
    source_code_link: "https://github.com/",
  },
  {
    name: "Geometry Visualizer",
    description:
      "A web application that allows users to explore geometric concepts with interactive diagrams, making abstract theorems more intuitive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "d3",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "https://t3.ftcdn.net/jpg/00/60/46/76/360_F_60467600_edVkJvDs6Zl0HMo6x6IdZoO5Qv3WZQ64.jpg",
    source_code_link: "https://github.com/",
  },
  {
    name: "Calculus Playground",
    description:
      "A comprehensive math learning tool that lets users visualize derivatives, integrals, and limits dynamically, bringing calculus concepts to life.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSeWIJXC4x-e_gG7nekrzQvBGAY4FsG75ZeA&s",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
