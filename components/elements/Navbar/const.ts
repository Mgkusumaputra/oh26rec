import {
  Building2,
  ClipboardPenLine,
  Contact2,
  House,
  Megaphone,
  Trophy,
} from "lucide-react";

export const NavbarItem = [
  {
    name: "Home",
    icon: House,
    link: "/",
    disabled: false,
  },
  {
    name: "Ambassador",
    icon: Contact2,
    link: "/ambassador",
    disabled: false,
  },
  {
    name: "About Fasilkom",
    icon: Building2,
    link: "/about-fasilkom",
    disabled: true,
  },
  {
    name: "Announcement",
    icon: Megaphone,
    link: "/announcement",
    disabled: true,
  },
  {
    name: "Wall of Fame",
    icon: Trophy,
    link: "/wall-of-fame",
    disabled: true,
  },
  {
    name: "Registration Page",
    icon: ClipboardPenLine,
    link: "/registration",
    disabled: true,
  },
];
