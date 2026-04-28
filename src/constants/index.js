const navLinks = [
  { id: 1, name: "resume" },
  { id: 2, name: "contest" },
  { id: 3, name: "download" },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const desktopFolders = [
  {
    id: "about", // ✅ Matches Redux
    label: "About Me",
    icon: "/public/images/folder.png",
  },
  {
    id: "projects", // ✅ Matches Redux
    label: "Projects",
    icon: "/public/images/folder.png",
  },
  {
    id: "contact", // ✅ Matches Redux
    label: "Contact",
    icon: "/public/images/folder.png",
  },
];

const dockItem = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "/public/images/finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "/public/images/safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "/public/images/photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "/public/images/contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "/public/images/terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "/public/images/trash.png",
    canOpen: false,
  },
];

export { navLinks, navIcons, dockItem, desktopFolders };
