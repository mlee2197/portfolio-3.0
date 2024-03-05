import {
  Sihtml5,
  SicssThree,
  // Javascript,
  Sitypescript,
  Sireact,
  Sigatsby,
  Sinextdotjs,
  Sistyledcomponents,
  Sigraphql,
  Siapollographql,
  Sifigma,
  Sifirebase,
} from "@icons-pack/react-simple-icons";

export const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const STACK_DATA = [
  {
    text: "HTML",
    icon: Sihtml5,
  },
  {
    text: "CSS",
    icon: SicssThree,
  },
  // {
  //   text: "Javascript",
  //   icon: Javascript,
  // },
  {
    text: "Typescript",
    icon: Sitypescript,
  },
  {
    text: "React",
    icon: Sireact,
  },
  {
    text: "NextJs",
    icon: Sinextdotjs,
  },
  {
    text: "Gatsby",
    icon: Sigatsby,
  },
  {
    text: "Styled Components",
    icon: Sistyledcomponents,
  },
  {
    text: "Graphql",
    icon: Sigraphql,
  },
  {
    text: "Apollo",
    icon: Siapollographql,
  },
  {
    text: "Figna",
    icon: Sifigma,
  },
  {
    text: "Firebase",
    icon: Sifirebase,
  },
];

export const PROJECT_DATA = [
  {
    id: "dc-in-review",
    image: "dc-in-review",
    github: "https://github.com/mlee2197/dc-in-review",
    link: "https://dc-in-review.vercel.app/",
    title: "DC in Review",
    description:
      "Follow my trip to Washington D.C. See small snippets of my trip through complex animations built using GSAP and CSS.",
  },
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
    title: "Isometric Room",
    description:
      "This experience was a gift for someone to wrap up their year (sorry no link for this one). Using strictly CSS, I utilized transformations and perspective to create 3D scenes. Each of which has it's own CSS and GSAP animations and scrolls horizontally as a bonus.",
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
