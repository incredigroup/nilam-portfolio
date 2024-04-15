// Copyright Nilam Wati 2021,2022. All Rights Reserved.
// Project: folio
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Nilam Wati",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://nilamwati.netlify.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Full-Stack Developer",
  "I develop modern full stack apps",
  "I love coming up with creative ideas",
];

export const EMAIL = "incredgex0225@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nilam-wati-954b89248/",
  github: "https://github.com/incredigroup"
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Smol Age",
    image: "/projects/smolage.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "The innovative gamified NFT collection that allows you to gather $BONES, develop your Common Sense.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.smolage.com/",
    tech: ["react", "solidity", "next", "web3"],
  },
  {
    name: "Robust Swap",
    image: "/projects/robust-swap.jpg",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "DEX and AMM on the Binance Smart Chain designed to optimize profitability through scarcity and liquidity.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://robustswap.com/",
    tech: ["typescript", "solidity", "next", "tailwind"],
  },
  {
    name: "iPlayMore",
    image: "/projects/thunder.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Gaming and Marketing site from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.iplaymore.com//",
    tech: ["figma", "next", "node", "react"],
  },
  {
    name: "Decentral Games",
    image: "/projects/decentral-game.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "The online casino experience that you can play your favorite games with crypto.",
    gradient: ["#003052", "#167187"],
    url: "https://decentral.games/",
    tech: ["tailwind", "next", "node"],
  },
  {
    name: "airbnb",
    image: "/projects/airbnb.jpg",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "The online marketplace that connects people who want to rent out their property with people who are looking for accommodations.",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.airbnb.com/",
    tech: ["react", "ruby_on_rails", "ngnix"],
  },
  {
    name: "persofoto",
    image: "/projects/ID-passport.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "The online service that you can create your passport photos for id cards, visa, driving licenses and health cards.",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://www.persofoto.com/",
    tech: ["laravel", "php", "bootstrap"],
  },
  {
    name: "NEW",
    image: "/projects/new.jpg",
    blurImage: "/projects/blur/akgec-blur.jpg",
    description: "The client-side interface helping you interact with the Ethereum blockchain.",
    gradient: ["#5E4C06", "#746528"],
    url: "https://staging.mewbuilds.com/",
    tech: ["vue", "aws", "ethereum", "web3"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "vue",
    "tailwind",
    "sass",
    "html",
    "css",
    "bootstrap"
  ],
  backend: [
    "node",
    "php",
    "ruby_on_rails",
    "laravel",
    "python",
    "java"
  ],
  userInterface: ["figma"],
  other: ["git", "webpack", "aws", "ethereum", "solidity", "web3"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Developed frontend, supported to upgrade contract and enhanced the accessibility and organization using The Graph",
    image: "/timeline/smolage-logo.svg",
    slideImage: "/timeline/smolage_dev.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework.",
    image: "/timeline/iplaymore_logo.png",
    slideImage: "/timeline/iplaymore_dev.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Designed and developed a quotient SaaS system with technically React/Redux.js. <br/>Accomplished the MVP goal within the expected timeframe successfully.",
    image: "/timeline/Linktree.svg",
    slideImage: "/timeline/linktree_env.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle:
      "Carried out the MVP of admin portal within 9 months of expected timeframe in Node. <br/>Assisted the envelopment of back-end Restful API system(Node.js/Express.js).",
    image: "",
    slideImage: "/timeline/linktree_env.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Senior Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Applied Agile software development methodologies to foster project progress and efficiency. <br/>Contributed significantly to formulating Coding Standards and implementing Unit Testing strategies for front-end components, enhancing code reliability.",
    image: "/timeline/livevox.svg",
    slideImage: "/timeline/Livevox-env.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle:
      "Leveraged AWS services including EC2, S3, and the Comprehend API for project infrastructure and functionalities.",
    image: "",
    slideImage: "/timeline/Livevox-env.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Frontend Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Launched 4+ React, Node.js web applications developed for clients with best quality. <br/>Built LAMP stack web applications using MVC PHP frameworks such as Laravel.",
    image: "/timeline/episource.svg",
    slideImage: "/timeline/episouce_company.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.SMALL,
    subtitle: "Consulting web development for business providing custom software solutions and architecture alongside performance optimization.",
    image: "",
    slideImage: "/timeline/episouce_company.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from University 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Graduated from Curtin University(Malaysia) & Bachelor of Computer Science",
    image: "/timeline/Curtin-University.svg",
    slideImage: "/timeline/curtin_env.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
