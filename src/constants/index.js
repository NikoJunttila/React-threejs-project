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
    starbucks,
    tesla,
    shopify,
    threejs,

  } from "../assets";
  import hyvinluxus from "../assets/hyvinluxus.png"
  import esanv from "../assets/esanv.png"
  import angularportfolio from "../assets/angularportfolio.png"
  import esanverhoiluicon from "../assets/company/esanverhoiluicon.png"
  import securi from "../assets/company/securi.jpg"
  import sortso from "../assets/company/logo.png"

  
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
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Personal Trainer",
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
      title: "Personal assistant",
      company_name: "Sortso Oy",
      icon: sortso,
      iconBg: "#383E56",
      date: "March 2016 - April 2018",
      points: [
        "Helping disabled people in their daily lifes and events",
      ],
    },
    {
      title: "Security Guard",
      company_name: "Securitas Oy",
      icon: securi,
      iconBg: "#E6DEDD",
      date: "March 2019 - July 2021",
      points: [
        "Protecting and making sure properties in my located area are safe",
        "Driving for calls in stores when they have unwelcomed people",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Esanverhoilu",
      icon: esanverhoiluicon,
      iconBg: "#383E56",
      date: "Jan 2022 - June 2022",
      points: [
        "Planning and building website in collaboration with business owner",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Esan verhoilu",
      description:
        "animated website for small uppholstery business",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "framer",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: esanv,
      source_code_link: "https://github.com/",
    },
    {
      name: "My portfolio",
      description:
        "My website with CV, gym helper, recipes and more on the way",
      tags: [
        {
          name: "Angular",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
      ],
      image: angularportfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hyvinvointikeskusluxus",
      description:
        "A comprehensive website with backend for adding pictures to gallery, ecommerce, commenting and more",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: hyvinluxus,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };