import {
  Html5,
  CssThree,
  Javascript,
  Typescript,
  ReactJs,
  Gatsby,
  Nextdotjs,
  Styledcomponents,
  Graphql,
  Apollographql,
  Figma,
  Firebase,
} from "@icons-pack/react-simple-icons";

export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const STACK_DATA = [
  {
    text: "HTML",
    icon: Html5,
  },
  {
    text: "CSS",
    icon: CssThree,
  },
  // {
  //   text: "Javascript",
  //   icon: Javascript,
  // },
  {
    text: "Typescript",
    icon: Typescript,
  },
  {
    text: "React",
    icon: ReactJs,
  },
  {
    text: "NextJs",
    icon: Nextdotjs,
  },
  {
    text: "Gatsby",
    icon: Gatsby,
  },
  {
    text: "Styled Components",
    icon: Styledcomponents,
  },
  {
    text: "Graphql",
    icon: Graphql,
  },
  {
    text: "Apollo",
    icon: Apollographql,
  },
  {
    text: "Figna",
    icon: Figma,
  },
  {
    text: "Firebase",
    icon: Firebase,
  },
];

export const PROJECT_DATA = [
  {
    id: "animation-suite",
    image: "animation-suite",
    github: "https://github.com/mlee2197/animation-suite",
    link: "https://animationsuite.netlify.app/",
    title: "Animation Suite",
    description:
      "To practice CSS animation skills, I created a suite of animations to catalog some of my more complex animations done. These animations range from strict CSS to using JS and HTML Canvas.",
  },
  {
    id: "memorlee",
    image: "memorlee",
    github: "https://github.com/mlee2197/memorlee",
    link: "https://memorlee.netlify.app/",
    title: "Memorlee",
    description:
      "The goal of the project was to catalog images from past family trips. I utilized Firebase to store my image assets and firestore as the Backend.",
  },
  {
    id: "anniversary",
    image: "anniversary",
    github: "https://github.com/mlee2197/anniversary-wrapped",
    link: "",
    title: "Anniversary Wrapped",
    description:
      "This experience was a gift for someone to wrap up their year. Using strictly CSS, I utilized transformations and perspective to create 3D scenes. Each of which has it's own CSS and GSAP animations and scrolls horizontally as a bonus.",
  },
  {
    id: "reminder-extension",
    image: "reminder_extension",
    github: "https://github.com/mlee2197/Reminder-Chrome-Extension",
    link: "",
    title: "Reminder Extention",
    description:
      "By implementing a module pattern, I'm developing a reminder extension that allows the user to quickly add self-reminders and quickly view the reminders for the day",
  },
];
