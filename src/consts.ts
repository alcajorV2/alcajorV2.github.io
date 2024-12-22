import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "AlcajorV2",
  DESCRIPTION: "Welcome to my website, here you can find my work, blog posts, and projects.",
  AUTHOR: "Alca Jor",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work Trayectorie",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "<empty>",
    HREF: "mailto:<empty>",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "AlcajorV2",
    HREF: "https://github.com/alcajorv2"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "<empty>",
    HREF: "https://www.linkedin.com/in/<empty>/",
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "<empty>",
    HREF: "https://twitter.com/<empty>",
  },
]

