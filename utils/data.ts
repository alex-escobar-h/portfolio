import type { Showcase, NavList, Bio } from "./types";

export const SHOWCASE_LIST: Showcase[] = [
  {
    id: 1,
    title: "Facial Expression Recognition Model",
    stack: "Python",
    repo: "https://github.com/alex-escobar-h/Facial-Expression-Recognition-Model",
    overview:
      "Developed a custom Convolutional Neural Network (CNN) to classify facial expressions using the FER-2013 dataset (7 emotion classes, 30K+ images). Implemented data preprocessing, normalization, and augmentation techniques to handle class imbalance and improve model generalization. Performed hyperparameter tuning across optimizers, batch sizes, and epochs, achieving a peak test accuracy of 61.76%.",
  },
  {
    id: 2,
    title: "TwentyFortyEight",
    stack: ["React", "TypeScript", "CSS"],
    repo: "https://github.com/alex-escobar-h/2048-clone",
    demo: "https://2048-by-alex-e.netlify.app",
    overview:
      "My rendition of the popular 2048 puzzle game created using React, Typescript, and CSS. 2048 is a single-player sliding tile puzzle game in which the objective is to combine numbered tiles on a 4x4 grid to create a tile with the number 2048. When two tiles with the same number collide, they merge into one with double the value. The game continues until the player creates the 2048 tile or no more valid moves are possible.",
  },
  {
    id: 3,
    title: "Media Search",
    stack: "C++",
    repo: "https://github.com/alex-escobar-h/masters-program/tree/main/media-search-system",
    overview:
      "C++ application developed as a project for an OOP course during the first semester of my master's program. It allows users to search through a catalog of media items such as books, periodicals, videos, and films by call number, title, subject, or other attributes. The project emphasizes OOP principles such as inheritance, polymorphism, and dynamic memory management.",
  },
] as const;

export const BIO_LIST: Bio[] = [
  {
    id: 1,
    title: "Education",
    content:
      "I earned my bachelor's degree in Computer Science from California State University, Sacramento in 2023. I'm now pursuing my master's degree in Computer Science at California State University, Chico with plans to graduate by the end of 2026.",
  },
  {
    id: 2,
    title: "Skills",
    content:
      "I have experience working with C++, Java, Python, JavaScript, and TypeScript through personal and academic projects. On the web side, I've built projects using React, Tailwind, Express, and MongoDB. I'm also familiar with tools like Git, Jira, Node.js, and common productivity software.",
  },
  {
    id: 3,
    title: "Coursework",
    content:
      "I've taken a solid mix of courses that gave me hands-on experience with programming, systems, and networking. Some of the key ones include data structures, algorithm analysis, software engineering, and network forensics — all of which helped shape how I approach building and understanding software.",
  },
  {
    id: 4,
    title: "Interests",
    content:
      "I'm always looking to improve my skills as a developer — I enjoy learning new technologies and finding better ways to build. Outside of tech, I'm really into cooking and always experimenting to get better in the kitchen. Some of my go-to hobbies are playing video games, kayaking when the weather's good, and catching basketball games whenever I can.",
  },
] as const;

export const EXTERNAL_LINK_LIST = [
  {
    id: 1,
    title: "Email",
    href: "escobar.alex5550@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/alex-h-escobar/",
  },
  {
    id: 3,
    title: "GitHub",
    href: "https://github.com/alex-escobar-h/",
  },
] as const;

export const NAV_LIST: NavList[] = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Projects",
  },
  {
    id: 3,
    title: "Contact",
  },
] as const;
