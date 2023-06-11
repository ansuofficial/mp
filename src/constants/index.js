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

import { avatar3, avatar2 }  from "../assets";

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
    title: "React.js Developer",
    company_name: "Trustbank",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Africell",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams, including other developers, to create high-quality products for Africell.",
      "Implementing responsive design and ensuring cross-browser compatibility for Africell's web applications.",
      "Participating in code reviews, specifically for Africell projects.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Ansu's CodeCamp",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Founded by Ansu, Ansu's CodeCamp specializes in developing and maintaining web applications.",
      "Collaborative team of designers, product managers, and developers create high-quality products at Ansu's CodeCamp.",
      "Implementation of responsive design and cross-browser compatibility is ensured for web applications at Ansu's CodeCamp.",
      "Ansu's CodeCamp provides a supportive learning environment for programming, hacking, and computer security education.",
    ],
  },
  {
    title: "Built My First 3D Portfolio",
    company_name: "Portfolio",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Building a 3D portfolio enhances my expertise in areas like modeling, texturing, and animation.",
      "Crafting my portfolio hones my artistic vision and helps me make effective design choices.",
      "Overcoming technical challenges during portfolio creation sharpens my troubleshooting skills.",
      " Receiving feedback on my portfolio allows for continuous growth and refinement of my work.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ansu proved me wrong.",
    name: "Jhon Ceesay",
    designation: "CFO",
    company: "Acme Co",
    image: "https://static.vecteezy.com/system/resources/thumbnails/015/409/989/small/elegant-man-in-business-suit-with-badge-man-business-avatar-profile-picture-illustration-isolated-vector.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ansu does.",
    name: "Aminna Barry",
    designation: "COO",
    company: "DEF Corp",
    image: avatar2,
  },
  {
    testimonial:
      "After Ansu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Musa Leigh",
    designation: "CTO",
    company: "456 Enterprises",
    image: avatar3,
  },
];

const projects = [
  {
    name: "Ansu's CodeCamp",
    description:
      "The ultimate platform for programming and hacking education. Diverse courses, interactive resources, live coding, and a supportive community. Unleash your potential today!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: " Gam-ECommerce",
    description:
      "Experience effortless online shopping with the Ecommerce website. Discover a diverse range of products, enjoy secure payments, and easily manage orders. Shop with ease and convenience for a seamless online shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
