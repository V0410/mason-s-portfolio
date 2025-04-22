import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/mason-plumlee/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.png",
        link: "mailto:masonaplumlee@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [      
      {
        id: "twitter",
        title: "Twitter",
        img: "img/sites/twitter.svg",
        link: "https://www.twitter.com/"
      },
      {
        id: "leetcode",
        title: "LeetCode",
        img: "img/sites/leetcode.svg",
        link: "https://leetcode.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "aideadline",
        title: "AI Deadlines",
        img: "https://aideadlin.es/static/img/favicon.png",
        link: "https://aideadlin.es/",
        inner: true
      },
      {
        id: "oh-my-cv",
        title: "OhMyCV",
        img: "https://ohmycv.app/apple-touch-icon.png",
        link: "https://ohmycv.app/"
      },
      {
        id: "steam",
        title: "Steam",
        img: "img/sites/steam.svg",
        link: "https://store.steampowered.com/"
      },
    ]
  }
};

export default websites;
