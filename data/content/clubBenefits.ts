import {
  faBook,
  faCalendar,
  faCalendarWeek,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const benefits = [
  {
    title: "Resources",
    content:
      "Whether you're a new club just starting out or a pre-existing club wanting to join, Youth Economics Initiative will provide you with invaluable resources including our comprehensive AP/IB Economics club curriculum and our FLIP Personal Finance club workshop guide.",
    href: "/resources",
    ctaText: "Get Access Now",
    icon: faBook,
  },
  {
    title: "Network",
    content:
      "Take advantage of the Youth Economics Initiative's network of leaders, creators, and entrepreneurs. You'll meet Nobel Laureates, business leaders, and top professors while forming connections with like-minded students passionate about economics.",
    href: "/events/econtalks",
    ctaText: "Our Professional Network",
    icon: faGlobe,
  },
  {
    title: "Community",
    content:
      "Join a community of problem-solvers, innovators, and leaders. By joining YEI, you join a movement towards empowering students with economic literacy and uniting economics clubs throughout the world.",
    href: "https://discord.gg/RC588cv",
    ctaText: "Join our Discord",
    icon: faUsers,
  },
  {
    title: "Events",
    content:
      "Beyond club resources and mentorship, the YEI offers a variety of exclusive events, including EconBowl, EconOlympiad, EconTalks, leadership conferences, and more.",
    href: "/events",
    ctaText: "Join Our Events",
    icon: faCalendarWeek,
  },
];

export default benefits;
