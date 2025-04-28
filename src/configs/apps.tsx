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
    show: false,
    img: "img/icons/user.png",
    content: <AboutMe />
  },
  {
    id: "basketballcamp",
    title: "BasketballCamp",
    desktop: false,
    width: 1000,
    height: 800,
    img: "img/icons/launchpad/basketballcam.png",
    link: "https://plumleebasketball.com/"
  },
  {
    id: "AGC",
    title: "AGC",
    desktop: false,
    width: 1024,
    height: 768,
    img: "img/icons/launchpad/agc.png",
    link: "https://www.helloagc.com"
  },
  {
    id: "twitter",
    title: "twitter",
    desktop: false,
    width: 600,
    height: 580,
    img: "img/icons/contacts/twitter.png",
    link: "https://x.com/masonplumlee"
  },
  {
    id: "linkedin",
    title: "Linkedin",
    desktop: false,
    img: "img/icons/contacts/linkedin.png",
    link: "https://www.linkedin.com/in/mason-plumlee/"
  },
  {
    id: "book",
    title: "Book",
    desktop: false,
    img: "img/icons/book.png"
  },
  {
    id: "shop",
    title: "Shop",
    desktop: false,
    img: "img/icons/shop.png"
  },
];

export default apps;
