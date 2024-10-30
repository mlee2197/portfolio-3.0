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
    id: "alter",
    image: "alter",
    link: "https://www.alterme.com/",
    title: "Alter",
    description:
      "Alter is a fitness and wellness startup with a mission to provide hyper-personalized fitness and coaching tailored to your unique DNA and biometrics. I was responsible for building a responsive, user-friendly interface while connecting with 3rd party APIs like Shopify, SplitIt, and more. One of the main challenges was ensuring consistency across all 3rd party integrations. We integrated segment to track user behavior and send consistent data between all platforms while ensuring good documentation and communication within the team.",
  },
  {
    id: "Imprint",
    image: "imprint",
    link: "https://imprintapp.com/",
    title: "Imprint",
    description:
      "Imprint is a Google Play App of the Year, offering a unique reading experience where users explore books broken down into digestible segments, enhanced by clean animations. It aims to make reading more engaging and visually immersive. Since this is an app, my expertise came into play for the web acquisition flows. I developed multiple versions of the purchase flow for various A/B tests while relying on Mixpanel to understand user behavior. Due to the fast-paced, iteration-heavy environment, I had to architect the project to allow for lots of flexibility and reusability.",
  },
  {
    id: "sightglass",
    image: "sightglass",
    link: "https://www.usesightglass.com/",
    title: "Sightglass",
    description:
      "Sightglass is a fintech startup focused on transforming the investment due diligence process. The platform automates the creation and response management of due diligence questionnaires (DDQs) for limited partners (LPs) and general partners (GPs), significantly reducing manual labor and improving efficiency in investment workflows. One of the main challenges was handling the dynamic nature of DDQ forms, which required complex state management and real-time updates. I addressed this by implementing a modular form architecture that could adapt to various questionnaire formats while maintaining responsiveness. This was also the first project in which I was the lead engineer, meaning I had participated in project planning, estimations, client meetings, and team management.",
  },
  {
    id: "sellfire",
    image: "sellfire",
    link: "https://sellfire.com/",
    title: "Sellfire",
    description:
      "Sellfire is a high-velocity sales platform that helps salespeople manage their teams, clients, sales, and communications in one place. It offers tools for efficient team coordination, client management, and seamless call integration, empowering sales teams to close deals faster. As a front-end developer responsible for the sales portal, I focused on building a robust UI for a complex platform. To manage the complexity, I implemented a modular architecture to break features down into their own components and state context. This allowed for better collaboration, debugging, testing, and scalability.",
  },
  {
    id: "motion-script",
    image: "motion-script",
    link: "https://motion-script.vercel.app/",
    github: "https://github.com/mlee2197/motion-script",
    title: "Motion Script",
    description:
      "Motion Script is a side project where I set a personal challenge to create 25 unique web animations in 25 days. The goal was to explore different CSS properties and techniques, pushing the boundaries of front-end animation capabilities while enhancing my creative coding skills. One of the biggest challenges was creating a wide variety of animations within a limited timeframe, while ensuring they remained performant across different browsers. I utilized GSAP to create smooth animations and reduced the amount of concurrent animations while maintaining visual appeal."
  },
  {
    id: "dalo-portfolio",
    image: "dalo-portfolio",
    link: "https://www.dachellealo.com/",
    title: "Portfolio Freelance",
    description:
      "I had built a portfolio site for a creative professional to showcase their work, skills, and achievements. With the client, we worked together to build a design that hit a good middle ground between design and development, while maintaining their personal brand. The site was built with NextJS, tailwind, and GSAP to create a lightweight, fast, and beautiful experience.",
  },
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
  // {
  //   id: "reminder-extension",
  //   image: "reminder_extension",
  //   github: "https://github.com/mlee2197/Reminder-Chrome-Extension",
  //   link: "",
  //   title: "Reminder Extention",
  //   description:
  //     "By implementing a module pattern, I'm developing a reminder extension that allows the user to quickly add self-reminders and quickly view the reminders for the day",
  // },
];
