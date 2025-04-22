import { appBarHeight } from "~/utils";
import type { AppsData } from "~/types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "aboutme",
    title: "About Me",
    desktop: true,
    width: 1024,
    height: 768,
    show: true,
    img: "img/icons/user.png",
    content: <AboutMe />
  },
  {
    id: "twitter",
    title: "twitter",
    desktop: true,
    width: 600,
    height: 580,
    y: -20,
    img: "img/icons/contacts/twitter.png",
    link: "https://x.com/masonplumlee"
  },
  {
    id: "facebook",
    title: "Facebook",
    desktop: true,
    width: 1024,
    height: 768,
    x: -20,
    img: "img/icons/contacts/facebook.png",
    link: "https://www.facebook.com/MasonPlumlee24/"
  },
  {
    id: "youtube",
    title: "Youtube",
    desktop: true,
    width: 1000,
    height: 800,
    x: 80,
    y: -30,
    img: "img/icons/contacts/youtube.png",
    link: "https://www.youtube.com/channel/UCELBx0eOrOR0w7wbMv3bD"
  },
  {
    id: "linkedin",
    title: "Linkedin",
    desktop: true,
    img: "img/icons/contacts/linkedin.png",
    link: "https://www.linkedin.com/in/mason-plumlee/e"
  }
];

export default apps;
