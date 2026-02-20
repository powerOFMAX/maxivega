import {
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // projects
  podcast,
  spacex,
  spotify,
  cryptoMate,
  gallery,
  petgallery,
  // projects
  threejs,
  java,
  python,
  xoor,
  ae,
  itr,
  tap,
  bnt,
  productIcon,
  reactIcon,
  mobileAppIcon,
  backendIcon,
  agileIcon,
  aiIcon,
  architectIcon,
  gbru,
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Software Architect",
    icon: architectIcon,
  },
  {
    title: "AI Automation & Prompt Engineering",
    icon: aiIcon,
  },
  {
    title: "Custom Software Development",
    icon: mobileAppIcon,
  },
  {
    title: "React Developer",
    icon: reactIcon,
  },
  {
    title: "Backend Developer",
    icon: backendIcon,
  },
  {
    title: "Performance Optimization",
    icon: productIcon,
  },
  {
    title: "Code Review and Technical Consulting",
    icon: agileIcon,
  },
]

const technologies = [
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
]

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Brave New Technology",
    icon: bnt,
    iconBg: "#383E56",
    date: "Sep 2018 - May 2020",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Built a new messenger interface and developed a successful migration plan from one messenger provider to another without affecting 1M users",
      "Increased website performance by refactoring and migrating old components to a stateless approach.",
    ],
  },
  {
    title: "Software Engineer & React Native Engineer",
    company_name: "TAP",
    icon: tap,
    iconBg: "#E6DEDD",
    date: "May 2020 - June 2020",
    points: [
      "Developing and maintaining web applications using React Native, interviews of new candidates",
      "Set a Git workflow and defined release flows according to the critical system.",
      "Fixed bugs and made proposals to improve performance.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "IT Resources",
    icon: itr,
    iconBg: "#383E56",
    date: "Aug 2020 - Jan 2021",
    points: [
      "Development of new projects, refactoring old projects to new technologies",
      "Migration of old monolithic projects to a microservices infrastructure.",
      "Generated documentation for all the projects and established a git convention.",
      "Configuration and deployment in Openshift.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "XOOR Inc.",
    icon: xoor,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Mar 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Built a system that allows to generate a customizable email templates using a drag-and-drop interface.",
      "Created a flexible and scalable system that meets the needs of US-based universities.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "AgileEngine",
    icon: ae,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Dec 2023",
    points: [
      "Lead Software Engineer at Indeed, responsible for improving the codebase, addressing A11y issues, and creating new features.",
      "Managed two globally distributed teams: one with 12 developers and another with three developers across Japan, Europe, the US, and Latin America.",
      "Led important initiatives that resulted in notorious ROI for the client.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Engineer Manager & Lead Software Engineer",
    company_name: "AgileEngine",
    icon: ae,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Solutions Consultant working with prospective clients to identify needs and propose tailored solutions",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "Maxi is a true gem: highly skilled, hard worker, and a kind team member. His skills and ability to learn surprised me every day, without leaving behind a humble and human attitude.",
    name: "Gabriel Brunacci",
    designation: "CEO & Founder",
    company: "Brave New Technology",
    image: gbru,
  },
]

const projects = [
  {
    name: "SpaceX Landing Prediction",
    description:
      "Data Science capston project that predicts if the Falcon 9 first stage will land successfully",
    tags: [
      {
        name: "Jupyter",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Pandas",
        color: "pink-text-gradient",
      },
    ],
    image: spacex,
    source_code_link:
      "https://github.com/powerOFMAX/SpaceX-Landing-Prediction/blob/main/capstone%20presentation.pdf",
  },
  {
    name: "Podcast App",
    description:
      "Web-based platform that allows users listen to Podcasts consuming AudioBoom API",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "SSR",
        color: "pink-text-gradient",
      },
    ],
    image: podcast,
    source_code_link: "https://github.com/powerOFMAX/podcast-app",
  },
  {
    name: "Solana NFT Gallery",
    description:
      "Web-based platform that allows users listen to Podcasts consuming AudioBoom API",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "BlockChain",
        color: "pink-text-gradient",
      },
    ],
    image: gallery,
    source_code_link: "https://github.com/powerOFMAX/nft-gallery",
  },
  {
    name: "Spotify in React Native",
    description:
      "Mobile application built in React Native that imitates Spotify interface",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Expo",
        color: "pink-text-gradient",
      },
    ],
    image: spotify,
    source_code_link: "https://github.com/powerOFMAX/spotify-header-sample",
  },
  {
    name: "Crypto Mate",
    description: "Send ETH to another wallet using CrytoMate ",
    tags: [
      {
        name: "Solidity",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "ViteJs",
        color: "pink-text-gradient",
      },
      {
        name: "BlockChain",
        color: "green-text-gradient",
      },
    ],
    image: cryptoMate,
    source_code_link: "https://github.com/powerOFMAX/CryptoMate",
  },
  {
    name: "Pet Gallery",
    description: "Mobile Application that consumes GraphQL API",
    tags: [
      {
        name: "PWA",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: petgallery,
    source_code_link: "https://github.com/powerOFMAX/pet-gallery",
  },
]

export { services, technologies, experiences, testimonials, projects }
